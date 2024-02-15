export const checkTestCertificateIssue = (samples, job, meUid, newVersionWithIssue) => {
  let filteredSamples = []
  if (samples) {
    filteredSamples = Object.values(samples)
      .filter((sample) => sample.cocUid === job.uid && !sample.deleted)
      .map((sample) => ({
        ...sample,
        now: sample.verified,
        original: sample.verified
      }))
  }

  let issues = verifySamples(filteredSamples, job, meUid, false, false)
  // Check if any samples have not been checked off and ask the user to verify
  let samplesVerified = 0,
    samplesNotVerified = 0

  filteredSamples.forEach((sample) => {
    if (!sample.verified && sample.cocUid === job.uid) samplesNotVerified++
    else samplesVerified++
  })

  if (samplesVerified === 0) {
    let uid = job.uid + 'NoSamplesVerified'
    issues[uid] = {
      type: 'block',
      priority: 'high',
      description: 'No samples have been verified. This must be done before issuing the test certificate',
      sample: null,
      uid,
      no: 'OK'
    }
  } else {
    if (samplesNotVerified > 0) {
      let uid = job.uid + 'NotAllSamplesVerified'
      issues[uid] = {
        type: 'confirm',
        priority: 'low',
        description: `Not all samples have been verified. These will not appear in the test certificate.`,
        sample: null,
        uid,
        yes: 'This is correct',
        no: 'This needs fixing'
      }
    }

    // If new version, prompt for version change
    if (job.currentVersion && newVersionWithIssue) {
      let uid = 'versionChanges' + job.currentVersion
      issues[uid] = {
        type: 'confirm',
        description:
          'Please provide a description of the changes made since the last version issued. This will appear on the test certifcate.',
        sample: null,
        uid,
        yes: 'OK',
        no: 'Cancel'
      }
    }
  }
  return issues
}

//
// ADMIN/ISSUE
//

export const printCocBulk = (job, samples, me, staffList) => {
  let staffQualList = getStaffQuals(staffList)
  let labToContactClient = 'No'
  if (job.labToContactClient) {
    labToContactClient = `Yes, ${job.labContactName ? job.labContactName : ''} ${job.labContactNumber ? job.labContactNumber : ''}`
  }
  let labInstructions = job.labInstructions ? job.labInstructions : false
  let sampleList = []
  let analysisRequired = job.waAnalysis ? 'Western Australian Standard' : 'Bulk Analysis ID'
  let warning = ''
  if (job.priority === 1) warning = 'URGENT'
  if (job.isClearance) warning = warning + ' CLEARANCE'
  let receivedDates = writeDates(samples, 'receivedDate')
  // console.log(receivedDates);
  if (receivedDates === 'N/A') receivedDates = ''
  samples &&
    Object.values(samples).forEach((sample) => {
      if (sample.cocUid === job.uid) {
        let sampleMap = {}
        if (sample.disabled) return
        sampleMap['no'] = sample.sampleNumber
        if (job.waAnalysis) sampleMap['description'] = writeSimpleDescription(sample)
        else {
          sampleMap['description'] = writeCocDescription(sample)
          sampleMap['category'] = sample.category ? sample.category : 'Other'
        }
        // sampleMap["material"] = sample.material ?
        //   sample.material.charAt(0).toUpperCase() + sample.material.slice(1) : '';
        sampleList.push(sampleMap)
      }
    })
  let report = {
    jobNumber: job.jobNumber,
    client: job.client,
    contactName: job.contact && job.contact.name ? job.contact.name : '',
    contactEmail: job.contact && job.contact.email ? job.contact.email : '',
    orderNumber: job.clientOrderNumber ? job.clientOrderNumber : '',
    address: job.address,
    type: job.wfmType,
    analysisRequired,
    labToContactClient,
    labInstructions,
    receivedDates,
    warning: warning === '' ? false : warning,
    jobManager: job.manager,
    date: writeDates(
      Object.values(samples).filter((e) => e.cocUid === job.uid),
      'sampleDate'
    ),
    personnel: getPersonnel(
      Object.values(samples).filter((s) => s.cocUid === job.uid),
      'sampledBy',
      null,
      false
    ).map((p) => p.name),
    samples: sampleList
  }
  // console.log(report);
  return report
  // let url = job.waAnalysis ?
  //   "https://api.k2.co.nz/v1/doc/scripts/asbestos/lab/coc_wa.php?report=" +
  //   encodeURIComponent(JSON.stringify(report))
  //   :
  //   "https://api.k2.co.nz/v1/doc/scripts/asbestos/lab/coc_bulk.php?report=" +
  //   encodeURIComponent(JSON.stringify(report));
  // window.open(url);
}

export const getStaffQuals = (staffList) => {
  let staffQualList = {}
  let aaNumbers = {}
  let ip402 = {}
  let tertiary = {}
  Object.values(staffList).forEach((staff) => {
    staffQualList[staff.name] = {
      aaNumber: staff.aanumber ? staff.aanumber : false,
      ip402: staff.ip402 ? staff.ip402 : false,
      tertiary: staff.tertiary ? staff.tertiary : false
    }
  })

  return staffQualList
}

export const getPersonnel = (samples, field, qualList, onlyShowVerified) => {
  let personnel = {}
  samples &&
    Object.values(samples).forEach((sample) => {
      if (sample[field] && (!onlyShowVerified || (onlyShowVerified && sample.verified))) {
        let person = sample[field]
        if (person instanceof Array) {
          person.forEach((p) => {
            if (p === Object(p)) personnel[p.name] = true
            else personnel[p] = true
          })
        } else {
          if (person === Object(person)) personnel[person.name] = true
          else personnel[person] = true
        }
      }
    })
  // console.log(personnel);
  let list = []
  Object.keys(personnel).forEach((p) => {
    let tertiary = null
    let aaNumber = null
    let ip402 = null
    if (qualList && qualList[p]) {
      if (qualList[p].tertiary) tertiary = qualList[p].tertiary
      if (qualList[p].aaNumber) aaNumber = qualList[p].aaNumber
      if (qualList[p].ip402) ip402 = qualList[p].ip402
    }
    let staffMap = {
      name: p,
      tertiary,
      aaNumber,
      ip402
    }
    //console.log(staffMap);
    list.push(staffMap)
  })
  if (list.length === 0) return [{ name: 'Not specified', tertiary: null, aaNumber: null, ip402: null }]
  //console.log(list);
  return list
}

export const writePersonnelQualFull = (personnel) => {
  //console.log(personnel);
  return personnel.map((p) => {
    if (!p.tertiary && !p.aaNumber && !p.ip402) return p.name
    let quals = []
    if (p.tertiary) quals.push(p.tertiary)
    if (p.ip402) quals.push('BOHS IP402')
    if (p.aaNumber) quals.push(`Asbestos Assessor No. ${p.aaNumber}`)
    return `${p.name} (${quals.join(', ')})`
  })
}

export const writeVersionJson = (job, samples, version, staffList, me, batch) => {
  // let aaNumbers = getAANumbers(staffList);
  let staffQualList = getStaffQuals(staffList)
  let sampleList = []
  let cocStats = getStats(samples, job)
  console.log(cocStats)

  samples &&
    Object.values(samples).forEach((sample) => {
      if (sample.verified && sample.cocUid === job.uid) {
        let sampleMap = {}
        if (sample.disabled || sample.onHold) return
        sampleMap['no'] = sample.sampleNumber
        sampleMap['description'] = writeReportDescription(sample)
        sampleMap['category'] = getSampleCategory(sample)
        sampleMap['weightReceived'] = writeMeasurement(sample.weightReceived, 1, null, 'g')
        sampleMap['result'] = writeResult(sample.result, sample.noAsbestosResultReason)
        sampleMap['checks'] = writeChecks(sample)
        sampleMap['footnote'] = sample.footnote ? sample.footnote : false
        sampleMap['conditionings'] = writeConditionings(sample)

        if (sample.waSoilAnalysis !== undefined) {
          sampleMap['simpleDescription'] = writeSimpleDescription(sample)
          sampleMap['simpleResult'] = writeSimpleResult(sample.result, sample.noAsbestosResultReason)
          sampleMap['formDescription'] = sample.waSoilAnalysis.formDescription ? sample.waSoilAnalysis.formDescription : 'N/A'
          sampleMap['weightSubsample'] = writeMeasurement(sample.weightSubsample, 1, null, 'g')
          sampleMap['weightDry'] = writeMeasurement(sample.weightDry, 1, null, 'g')
          sampleMap['weightAshed'] = writeMeasurement(sample.weightAshed, 1, null, 'g')
          sampleMap['moisture'] = writeSampleMoisture(sample) ? `${writeSampleMoisture(sample)}%` : 'N/A'
          sampleMap['weightAshedGt7'] = writeMeasurement(sample.waSoilAnalysis.fractiongt7WeightAshed, 1, null, 'g')
          sampleMap['weightAshedTo7'] = writeMeasurement(sample.waSoilAnalysis.fractionto7WeightAshed, 1, null, 'g')
          sampleMap['weightAshedLt2'] = writeMeasurement(sample.waSoilAnalysis.fractionlt2WeightAshed, 1, null, 'g')
          sampleMap['weightAshedLt2Subsample'] = writeMeasurement(sample.waSoilAnalysis.fractionlt2WeightAshedSubsample, 1, null, 'g')

          let waTotals = getWATotalDetails(sample, job.acmInSoilLimit ? parseFloat(job.acmInSoilLimit) : 0.01)
          sampleMap['concentrationACM'] = waTotals.concentration.acm ? `${waTotals.concentration.acm}%` : 'N/A'
          sampleMap['concentrationFAAF'] = waTotals.concentration.faaf ? `${waTotals.concentration.faaf}%` : 'N/A'
          sampleMap['concentrationFA'] = waTotals.concentration.fa ? `${waTotals.concentration.fa}%` : 'N/A'
          sampleMap['concentrationAF'] = waTotals.concentration.af ? `${waTotals.concentration.af}%` : 'N/A'
          sampleMap['weightACM'] = waTotals.weight.acm ? `${waTotals.weight.acm}g` : 'N/A'
          sampleMap['weightFA'] = waTotals.weight.fa ? `${waTotals.weight.fa}g` : 'N/A'
          sampleMap['weightAF'] = waTotals.weight.af ? `${waTotals.weight.af}g` : 'N/A'
        }

        sampleList.push(sampleMap)

        // LOG SAMPLE
        batch.update(asbestosSamplesRef.doc(sample.uid), {
          issueVersion: version ? version : 1,
          issueDate: new Date(),
          issuedBy: { uid: me.uid, name: me.name }
        })
        logSample(job, sample, cocStats, version)
      }
    })
  let samplesFiltered = Object.values(samples).filter((s) => s.cocUid === job.uid && !s.onHold && s.verified)
  let report = {
    jobNumber: job.jobNumber,
    client: `${job.client} ${job.clientOrderNumber && Object.keys(job.clientOrderNumber).length > 0 ? job.clientOrderNumber : ''}`,
    address: job.address,
    sampleDate: writeDates(samplesFiltered, 'sampleDate'),
    receivedDate: writeDates(samplesFiltered, 'receivedDate'),
    analysisDate: writeDates(samplesFiltered, 'analysisDate'),
    contactName: job.contact && job.contact.name ? job.contact.name : '',
    contactEmail: job.contact && job.contact.email ? job.contact.email : '',
    coverLetterAddress: getDefaultLetterAddress(job),
    personnel: writePersonnelQualFull(getPersonnel(samplesFiltered, 'sampledBy', staffQualList, true)),
    waAnalysis: job.waAnalysis ? job.waAnalysis : false,
    // assessors: job.personnel.sort().map(staff => {
    //   return aaNumbers[staff];
    // }),
    analysts: getPersonnel(samplesFiltered, 'analyst', null, true).map((e) => e.name),
    version: version ? version : 1,
    samples: sampleList
  }
  console.log(report)
  return report
}

export const issueTestCertificate = async (job, samples, version, changes, staffList, me, newVersion) => {
  // first check all samples have been checked
  // if not version 1, prompt for reason for new version
  let batch = firestore.batch()
  let json = await writeVersionJson(job, samples, version, staffList, me, batch)
  let versionHistory = job.versionHistory ? job.versionHistory : {}
  let log = {
    type: 'Issue',
    log: newVersion ? `Version ${version} issued.` : `Version ${version} re-issued.`,
    chainOfCustody: job.uid
  }
  addLog('asbestosLab', log, me, batch)
  if (!newVersion && versionHistory[version]) {
    let updates = versionHistory[version].updates ? versionHistory[version].updates : {}
    let updateNumber = versionHistory[version].updateNumber ? versionHistory[version].updateNumber : 0
    updateNumber++
    updates[updateNumber.toString()] = {
      issuedBy: versionHistory[version].issuedBy,
      issueDate: versionHistory[version].issueDate,
      data: versionHistory[version].data
    }
    versionHistory[version] = {
      ...versionHistory[version],
      updates,
      updateNumber,
      issuedBy: { uid: me.uid, name: me.name },
      issueDate: new Date(),
      data: json
    }
  } else {
    versionHistory[version] = {
      issuedBy: { uid: me.uid, name: me.name },
      issueDate: new Date(),
      changes: changes ? changes : 'Not specified',
      data: json
    }
  }
  //console.log(versionHistory);
  let update = {
    currentVersion: version,
    versionHistory: versionHistory,
    versionUpToDate: true,
    lastModified: new Date()
  }
  console.log(update)
  // //console.log(job);
  batch.update(cocsRef.doc(job.uid), update)
  batch.commit()
}

export const printLabReport = (job, version, me, showModal) => {
  let report = job.versionHistory[version].data
  let log = {
    type: 'Document',
    log: `Test Certificate (version ${version}) downloaded.`,
    chainOfCustody: job.uid
  }
  addLog('asbestosLab', log, me)
  if (report.version && report.version > 1) {
    let versionHistory = []
    ;[...Array(report.version).keys()].forEach((i) => {
      let formatDate = dateOf(job.versionHistory[i + 1].issueDate)
      versionHistory.push({
        version: i + 1,
        issueDate: moment(formatDate).format('D MMMM YYYY'),
        changes: job.versionHistory[i + 1].changes
      })
    })
    report = { ...report, versionHistory: versionHistory }
  }
  //console.log(report);
  showModal({
    modalType: DOWNLOAD_LAB_CERTIFICATE,
    modalProps: {
      report: report,
      defaultFileType: 'doc',
      defaultCertificateType: job.waAnalysis ? 'wa' : 'bulk'
    }
  })
  // let url =
  //   "http://api.k2.co.nz/v1/doc/scripts/asbestos/issue/labreport_singlepage.php?report=" +
  //   JSON.stringify(report);
  // //console.log(url);
  // // this.setState({ url: url });
  // window.open(url);
  // fetch('http://api.k2.co.nz/v1/doc/scripts/asbestos/issue/labreport_singlepage.php?report=' + JSON.stringify(report));
}
