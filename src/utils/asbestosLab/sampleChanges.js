//
// SAMPLE PROGRESS CHANGES
//

export const holdSample = (sample, job, me) => {
  //console.log('Sample on hold');
  let log = {
    type: 'Analysis',
    log: sample.onHold
      ? `Sample ${sample.sampleNumber} (${writeDescription(sample)}) analysis taken off hold.`
      : `Sample ${sample.sampleNumber} (${writeDescription(sample)}) analysis put on hold.`,
    sample: sample.uid,
    chainOfCustody: job.uid
  }
  addLog('asbestosLab', log, me)
  cocsRef.doc(sample.cocUid).update({ versionUpToDate: false, mostRecentIssueSent: false })
  asbestosSamplesRef.doc(sample.uid).update({ onHold: sample.onHold ? false : true })
}

export const receiveSample = (batch, sample, job, samples, sessionID, me, startDate, noLog) => {
  //console.log('Receiving sample');
  //console.log(sample);
  if (sample.receivedByLab && sample.verified) {
    removeResult(batch, sample, sessionID, me)
    if (sample.analysisStarted) startAnalysis(batch, sample, job, samples, sessionID, me, startDate, true)
    verifySample(batch, sample, job, samples, sessionID, me, true)
  } else if (sample.receivedByLab && sample.result) {
    removeResult(batch, sample, sessionID, me)
    if (sample.analysisStarted) startAnalysis(batch, sample, job, samples, sessionID, me, startDate, true)
  } else if (sample.receivedByLab && sample.analysisStarted) {
    startAnalysis(batch, sample, job, samples, sessionID, me, startDate, true)
  }
  if (!noLog) {
    let log = {
      type: 'Received',
      log: !sample.receivedByLab
        ? `Sample ${sample.sampleNumber} (${writeDescription(sample)}) received by lab.`
        : `Sample ${sample.sampleNumber} (${writeDescription(sample)}) unchecked as being received.`,
      sample: sample.uid,
      chainOfCustody: job.uid
    }
    addLog('asbestosLab', log, me, batch)
  }
  if (!sample.receivedByLab) {
    batch.update(asbestosSamplesRef.doc(sample.uid), {
      receivedByLab: true,
      receivedBy: { uid: me.uid, name: me.name },
      receivedDate: startDate ? startDate : new Date()
    })
  } else {
    batch.update(asbestosSamplesRef.doc(sample.uid), {
      receivedByLab: false,
      receivedBy: firebase.firestore.FieldValue.delete(),
      receivedDate: firebase.firestore.FieldValue.delete()
    })
  }
}

export const receiveSamples = (samples) => {
  let issues = []
  let uid = ''
  // Check for issues
  samples.forEach((sample) => {
    if (!sample.now) {
      uid = sample.uid + 'NotReceived'
      if (sample.receivedByLab && sample.verified) {
        issues[uid] = {
          type: 'confirm',
          description: `The result has already been verified. Removing from the lab will remove the analysis result and verification.`,
          yes: 'Confirm Removal from Lab',
          no: 'Do Not Remove',
          sample,
          uid
        }
      } else if (sample.receivedByLab && sample.result) {
        issues[uid] = {
          type: 'confirm',
          description: `The result has already been logged. Removing from the lab will remove the analysis result.`,
          yes: 'Confirm Removal from Lab',
          no: 'Do Not Remove',
          sample,
          uid
        }
      } else if (sample.original === sample.now) {
        issues[uid] = {
          type: 'check',
          description: `Sample has not been checked as received. Double check this is correct and leave a comment on why it has been missed.`,
          yes: 'This is correct',
          no: 'This needs fixing',
          sample,
          uid
        }
      } else {
        issues[uid] = {
          type: 'check',
          description: `Sample has been unchecked as received. Double check this is correct and leave a comment on why it has been removed.`,
          yes: 'Confirm Removal from Lab',
          no: 'Do Not Remove',
          sample,
          uid
        }
      }
    }
  })
  return issues
}

export const startAnalysis = (batch, sample, job, samples, sessionID, me, startDate, noLog) => {
  if (!sample.receivedByLab && !sample.analysisStarted) receiveSample(batch, sample, job, samples, sessionID, me, startDate, true)
  if (sample.verified) verifySample(batch, sample, job, samples, sessionID, me, true)
  if (!noLog) {
    let log = {
      type: 'Analysis',
      log: !sample.analysisStarted
        ? `Analysis begun on Sample ${sample.sampleNumber} (${writeDescription(sample)}).`
        : `Analysis stopped for Sample ${sample.sampleNumber} (${writeDescription(sample)}).`,
      sample: sample.uid,
      chainOfCustody: job.uid
    }
    addLog('asbestosLab', log, me, batch)
  }
  batch.update(cocsRef.doc(sample.cocUid), { versionUpToDate: false })
  if (!sample.analysisStarted) {
    batch.update(asbestosSamplesRef.doc(sample.uid), {
      analysisStarted: true,
      analysisStartedBy: { uid: me.uid, name: me.name },
      analysisStartDate: startDate ? startDate : new Date()
    })
  } else {
    batch.update(asbestosSamplesRef.doc(sample.uid), {
      analysisStarted: false,
      analysisStartedBy: firebase.firestore.FieldValue.delete(),
      analysisStartDate: firebase.firestore.FieldValue.delete()
    })
  }
}

export const startAnalyses = (samples) => {
  let issues = []
  // Check for issues
  let uid = ''
  samples.forEach((sample) => {
    //console.log(sample.now);
    //console.log(sample.original);
    if (!sample.now) {
      uid = sample.uid + 'NoAnalysisStart'
      if (sample.analysisStarted && sample.verified) {
        issues[uid] = {
          type: 'confirm',
          description: `The result has already been verified. Are you sure you want to remove the analysis start date? This will not remove the result or verification.`,
          yes: 'Confirm Removal of Analysis Start Date',
          no: 'Do not remove',
          sample,
          uid
        }
      } else if (sample.analysisStarted && sample.result) {
        issues[uid] = {
          type: 'confirm',
          description: `The result has already been logged. Are you sure you want to remove the analysis start date? This will not remove the result.`,
          yes: 'Confirm Removal of Analysis Start Date',
          no: 'Do not remove',
          sample,
          uid
        }
      } else if (sample.original === sample.now) {
        // issues[uid] = {
        //   type: 'check',
        //   description: `Analysis has not been checked as started. Double check this is correct and leave a comment on why it has been missed.`,
        //   yes: 'This is correct',
        //   no: 'This needs fixing',
        //   sample,
        //   uid,
        // };
      } else {
        issues[uid] = {
          type: 'check',
          description: `Analysis has been unchecked as started. Double check this is correct and leave a comment on why it has been removed.`,
          yes: 'Confirm Removal of Analysis Start Date',
          no: 'Do not remove',
          sample,
          uid
        }
      }
    }
  })
  return issues
}

export const changeActionDetails = (job, samples, field, update, me) => {
  let batch = firestore.batch()
  let change = field === 'analysisStarted' ? 'Analysis Start' : 'Received'
  samples &&
    Object.values(samples).forEach((sample) => {
      if (update.date || update.user) {
        let u = {}
        let dateField = field === 'analysisStarted' ? 'analysisStartDate' : 'receivedDate'
        let userField = field === 'analysisStarted' ? 'analysisStartedBy' : 'receivedBy'
        if (update.date) u[dateField] = dateOf(update.date)
        if (update.user) u[userField] = update.user
        batch.update(asbestosSamplesRef.doc(sample.uid), u)
        let log = {
          type: 'Edit',
          log: `${change} details changed.`,
          sample: sample.uid
        }
        addLog('asbestosLab', log, me, batch)
      }
    })
  let log = {
    type: 'Edit',
    log: `All sample ${change} details changed.`,
    chainOfCustody: job.uid
  }
  addLog('asbestosLab', log, me, batch)
  batch.commit()
}

export const undoIssues = (job, samples, me) => {
  let batch = firestore.batch()
  samples &&
    Object.values(samples).forEach((sample) => {
      let update = {
        issueDate: firebase.firestore.FieldValue.delete(),
        issuedBy: firebase.firestore.FieldValue.delete(),
        issueVersion: firebase.firestore.FieldValue.delete()
      }
      batch.update(asbestosSamplesRef.doc(sample.uid), update)
    })
  let cocUpdate = {
    lastModified: new Date(),
    currentVersion: firebase.firestore.FieldValue.delete(),
    versionHistory: firebase.firestore.FieldValue.delete(),
    versionUpToDate: false
  }
  batch.update(cocsRef.doc(job.uid), cocUpdate)
  let log = {
    type: 'Issue',
    log: `Lab Certificate issues reversed.`,
    chainOfCustody: job.uid
  }
  addLog('asbestosLab', log, me, batch)
  batch.commit()
}

const fractionMap = {
  gt7: '>7mm',
  to7: '2-7mm',
  lt2: '<2mm'
}
