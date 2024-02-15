//
// HELPER FUNCTIONS
//

//
// WA ANALYSIS/SAMPLE DETAILS
//

const fractionNames = ['gt7', 'to7', 'lt2']
const layerNum = 3

const highlightGreenStyle = {
  color: 'green',
  marginBottom: 12,
  backgroundColor: '#eee'
}
const highlightRedStyle = {
  color: 'red',
  marginBottom: 12,
  backgroundColor: '#eee'
}

export const analyticalCriteraOK = (sample) => {
  let color = 'black'
  let text = ''
  let compulsory = false
  if (
    sample.analyticalCriteria !== undefined &&
    sample.analyticalCriteria.dispersion === true &&
    sample.analyticalCriteria.morphology === true
  )
    compulsory = true
  let optionalScore = 0
  if (sample.analyticalCriteria !== undefined) {
    if (sample.analyticalCriteria.pleochroism) optionalScore += sample.analyticalCriteria.pleochroism
    if (sample.analyticalCriteria.orientation) optionalScore += sample.analyticalCriteria.orientation
    if (sample.analyticalCriteria.extinction) optionalScore += sample.analyticalCriteria.extinction
  }
  if (sample.analyticalCriteria === undefined) {
    text = 'Analytical criteria not set.'
  } else if (compulsory) {
    if (parseInt(optionalScore) < 2) {
      text = 'Fibres must display at least 2 of the following optical properties: Pleochroism, Orientation and Extinction'
      color = 'red'
    } else {
      text = 'Fibres display properties consistent with positive identification'
      color = 'green'
    }
  } else {
    text = 'Fibres must have positive dispersion staining and morphology identification'
    color = 'red'
  }
  return <div style={color === 'red' ? highlightRedStyle : highlightGreenStyle}>{text}</div>
}

export const sortSamples = (samples) => {
  let sampleMap = {}
  samples.forEach((sample) => {
    if (sampleMap[sample.jobnumber]) {
      sampleMap[sample.jobnumber].push(sample)
    } else {
      sampleMap[sample.jobnumber] = [sample]
    }
  })
  return sampleMap
}

export const writeDescription = (sample) => {
  var str = ''
  if (sample.sampleType === 'air') {
    str = `${sample.specificLocation || 'No description'} (Air Sample)`
  } else {
    if (sample.genericLocation) str = sample.genericLocation
    if (sample.specificLocation) {
      if (str === '') {
        str = sample.specificLocation
      } else {
        str = str + ', ' + sample.specificLocation
      }
    }
    if (str !== '') str = str + ': '
    if (sample.description && sample.material) {
      if (sample.description.toLowerCase().includes(sample.material.toLowerCase())) str = str + sample.description
      else str = str + sample.description + ', ' + sample.material
    } else if (sample.description) {
      str = str + sample.description
    } else if (sample.material) {
      str = str + sample.material
    } else {
      str = str + 'No description'
    }
    if (str.length > 1) str = str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
}

export const writeSimpleDescription = (sample) => {
  var str = ''
  if (sample.genericLocation) str = sample.genericLocation
  if (sample.specificLocation) {
    if (str === '') {
      str = sample.specificLocation
    } else {
      str = str + ', ' + sample.specificLocation
    }
  }
  if (sample.description && str !== '') str = str + ': '
  if (sample.description) str = str + sample.description
  if (str.length > 1) str = str.charAt(0).toUpperCase() + str.slice(1)
  // console.log(str);
  return str
}

export const writeReportDescription = (sample) => {
  let report = sample.report ? sample.report : { soilDescription: true, layers: true, dimensions: true, weight: true }
  let lines = []
  // Generic information
  // LOCATION (e.g.
  // Lounge
  // 1st Floor, Dining Room
  // 2nd Floor
  // )
  let genericLocation =
    sample.genericLocation && sample.genericLocation.length > 0
      ? sample.genericLocation.charAt(0).toUpperCase() + sample.genericLocation.slice(1)
      : ''
  let specificLocation =
    sample.specificLocation && sample.specificLocation.length > 0
      ? sample.specificLocation.charAt(0).toUpperCase() + sample.specificLocation.slice(1)
      : ''
  let location =
    genericLocation.length > 0 && specificLocation.length > 0
      ? genericLocation + ', ' + specificLocation
      : genericLocation + specificLocation

  // e.g. Dark grey vinyl sheet flooring (vinyl with paper backing)
  // e.g. Soffits (cement sheet)
  // e.g. Cement sheet
  // e.g. Soffits
  let description =
    sample.description && sample.description.length > 0 ? sample.description.charAt(0).toUpperCase() + sample.description.slice(1) : ''
  let material = sample.material && sample.material.length > 0 ? sample.material : ''
  let fullDesc =
    description.length > 0 && material.length > 0
      ? description + ' (' + material + ')'
      : (description + material).charAt(0).toUpperCase() + (description + material).slice(1)

  if ((location + fullDesc).length > 0)
    lines.push(location.length > 0 && fullDesc.length > 0 ? location + ': ' + fullDesc : location + fullDesc)

  // ~ at start means make italic, * means make bold
  let soilDetails = writeSoilDetails(sample.soilDetails)
  if (soilDetails !== 'No details.') lines.push('~' + soilDetails)
  if (report['layers'] === true && sample.layers !== undefined) {
    let layerNum = 3
    if (sample.layerNum) layerNum = sample.layerNum
    let layArray = []
    ;[...Array(layerNum).keys()].forEach((num) => {
      if (sample.layers[`layer${num + 1}`] !== undefined) {
        let lay = sample.layers[`layer${num + 1}`]
        if (lay.description !== undefined) {
          let layStr = 'L' + (num + 1).toString() + ': ' + lay.description.charAt(0).toUpperCase() + lay.description.slice(1)
          if (getBasicResult(lay) === 'positive') layStr = layStr + '†'
          layArray.push(layStr)
        }
      }
    })
    if (layArray.length > 0) lines.push(layArray.join(' / '))
    //console.log(layArray);
  }
  let dimensions = ''
  if (report['dimensions'] === true) {
    let dim = []
    if (sample.dimensions) {
      if (sample.dimensions.length) dim.push(sample.dimensions.length)
      if (sample.dimensions.width) dim.push(sample.dimensions.width)
      if (sample.dimensions.depth) dim.push(sample.dimensions.depth)
    }
    if (dim.length > 0) dimensions = dim.join(' x ') + ' mm'
  }
  // if (report['weight'] === true) {
  //   if (dimensions.length > 0) dimensions = dimensions + ', ';
  //   // if (sample.weightAnalysed) dimensions = dimensions + sample.weightAnalysed + "g"
  //   if (sample.weightReceived) dimensions = dimensions + sample.weightReceived + "g"
  // }
  if (dimensions.length > 0) lines.push(dimensions)
  return lines.join('@~')
}

export const getSampleCategory = (sample) => {
  if (sample.category) return sample.category
  // Could add in some logic here to try find the category against a dictionary of material -> category
  return 'Other'
}

export const writeCocDescription = (sample) => {
  // let returnStr = '';
  // let genericLocation = sample.genericLocation && sample.genericLocation.length > 0 ? sample.genericLocation.charAt(0).toUpperCase() + sample.genericLocation.slice(1) : '';
  // let specificLocation = sample.specificLocation && sample.specificLocation.length > 0 ? sample.specificLocation.charAt(0).toUpperCase() + sample.specificLocation.slice(1) : '';
  // let location = genericLocation.length > 0 && specificLocation.length > 0 ? genericLocation + ", " + specificLocation : genericLocation + specificLocation;
  //
  // let description = sample.description && sample.description.length > 0 ? sample.description.charAt(0).toUpperCase() + sample.description.slice(1) : '';
  //
  // if ((location + description).length > 0) returnStr = (location.length > 0 && description.length > 0) ? location + ': ' + description : location + description;

  var str = ''
  if (sample.genericLocation) str = sample.genericLocation
  if (sample.specificLocation) {
    if (str === '') {
      str = sample.specificLocation
    } else {
      str = str + ', ' + sample.specificLocation
    }
  }
  if (str !== '') str = str + ': '
  if (sample.description && sample.material) {
    if (sample.description.toLowerCase().includes(sample.material.toLowerCase())) str = str + sample.description
    else str = str + sample.description + ', ' + sample.material
  } else if (sample.description) {
    str = str + sample.description
  } else if (sample.material) {
    str = str + sample.material
  } else {
    str = str + 'No description'
  }

  if (sample.onHold) return str + '@~*ON HOLD'
  else return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getResultColor = (state, type, yesColor) => {
  if (state && state[type] === true) return yesColor
  return 'Off'
}

export const getSampleColors = (sample) => {
  if (!sample || !sample.result) {
    return {
      confirm: '',
      ch: 'Off',
      am: 'Off',
      cr: 'Off',
      umf: 'Off',
      no: 'Off',
      org: 'Off',
      smf: 'Off'
    }
  } else {
    let res = sample.result
    let confirm = getAllConfirmResult(sample)
    let confirmColor = 'Green'
    if (confirm === 'no') {
      confirmColor = 'Red'
    } else if (confirm === 'asbestosTypesWrong') {
      confirmColor = 'Orange'
    } else if (confirm === 'none') {
      confirmColor = ''
    }
    let returnMap = {
      // cameraColor: sample.imagePathRemote ? styles.greenIcon : styles.greyIcon,
      // receivedColor: sample.receivedByLab ? styles.greenIcon : styles.greyIcon,
      // analysisColor: sample.analysisStarted ? styles.greenIcon : styles.greyIcon,
      // verifiedColor: sample.verified ? styles.greenIcon : styles.greyIcon,
      // waColor: sample.waAnalysisComplete ? styles.greenIcon : styles.greyIcon,
      confirm: confirmColor ? confirmColor : '',
      ch: getResultColor(res, 'ch', 'Bad'),
      am: getResultColor(res, 'am', 'Bad'),
      cr: getResultColor(res, 'cr', 'Bad'),
      umf: getResultColor(res, 'umf', 'Bad'),
      no: getResultColor(res, 'no', 'Ok'),
      org: getResultColor(res, 'org', 'Benign'),
      smf: getResultColor(res, 'smf', 'Benign')
    }
    return returnMap
  }
}

export const getConfirmColor = (sample) => {
  let res = sample.result
  let confirm = getAllConfirmResult(sample)
  let confirmColor = 'Green'
  if (confirm === 'no') {
    confirmColor = 'Red'
  } else if (confirm === 'asbestosTypesWrong') {
    confirmColor = 'Orange'
  } else if (confirm === 'none') {
    confirmColor = ''
  }
  //console.log(confirmColor);
  return confirmColor
}

export const getWATotalDetails = (sample, acmLimit) => {
  // Declare vars
  let totals = {
    forms: {},
    result: {
      total: {},
      acm: {},
      fa: {},
      af: {},
      faaf: {}
    },
    weight: {
      total: 0,
      acm: 0,
      fa: 0,
      af: 0,
      faaf: 0
    },
    fractions: {
      total: {},
      acm: {},
      fa: {},
      af: {},
      faaf: {}
    },
    concentration: {
      total: 0,
      acm: 0,
      fa: 0,
      af: 0,
      faaf: 0,
      acmFloat: 0
    },
    allHaveTypes: true,
    allHaveForms: true,
    waOverLimit: false,
    bold: {}
  }

  if (sample && sample.waSoilAnalysis) {
    // If <2mm is subsampled, multiply asbestos weights
    let multiplier = null
    if (sample.waSoilAnalysis.fractionlt2WeightAshedSubsample)
      multiplier =
        parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshed) / parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshedSubsample)

    // Loop through each fraction in the job (gt7, to7, lt2)
    fractionNames.forEach((fraction) => {
      // Loop through each subsample in the fraction
      ;[...Array(sample.waLayerNum[fraction] ? sample.waLayerNum[fraction] : 3).keys()].forEach((num) => {
        let subsample = sample.waSoilAnalysis[`subfraction${fraction}-${num + 1}`]
        if (subsample) {
          // Check if subsample has concentration and weight set
          if (subsample.concentration && subsample.weight) {
            // Check subsample has the form and types of asbestos declared
            if (!subsample.form) totals.allHaveForms = false
            if (!subsample.result) totals.allHaveTypes = false

            let weight = 0
            if (subsample.weight) weight = parseFloat(subsample.weight)
            // If subsample has a tare weight, subtract this from the weight
            if (subsample.weight && subsample.tareWeight) weight = weight - parseFloat(subsample.tareWeight)

            // If tare weight is greater than gross weight, set weight to zero
            if (weight < 0) weight = 0

            // Multiply the weight by the estimated concentration of asbestos in subsample
            weight = (weight * parseFloat(subsample.concentration)) / 100

            // Multiply weight if using <2mm subsample. This presumes the portion of the <2mm fraction that was analysed is representative of the whole <2mm fraction.
            if (fraction === 'lt2' && multiplier) weight = weight * multiplier

            // Add weight to totals
            totals.weight.total = totals.weight.total + weight
            if (subsample.form === 'acm') totals.weight.acm = totals.weight.acm + weight
            else if (subsample.form === 'fa') totals.weight.fa = totals.weight.fa + weight
            else if (subsample.form === 'af') totals.weight.af = totals.weight.af + weight
          }
          if (subsample.form) {
            // Add forms to the list
            totals.forms[subsample.form] = true
            totals.fractions.total[fraction] = true
            totals.fractions[subsample.form][fraction] = true
            if (subsample.form === 'fa' || subsample.form === 'af') totals.fractions.faaf[fraction] = true
          }
          if (subsample.result) {
            // Add result to the list to check against the reported result
            totals.result.total = mergeAsbestosResult(totals.result.total, subsample.result)
            if (subsample.form === 'acm') totals.result.acm = mergeAsbestosResult(totals.result.acm, subsample.result)
            else if (subsample.form === 'fa') totals.result.fa = mergeAsbestosResult(totals.result.fa, subsample.result)
            else if (subsample.form === 'af') totals.result.af = mergeAsbestosResult(totals.result.af, subsample.result)
          }
        }
      })
    })

    // Combine AF FA
    totals.result.faaf = mergeAsbestosResult(totals.result.af, totals.result.fa)
    totals.weight.faaf = totals.weight.fa + totals.weight.af

    // Check if sample is not detected, above limit or below limit
    if (totals.result.total.no) {
      totals.soilConcentrationResult = 'Not Detected'
    } else if (
      parseFloat((totals.weight.faaf / sample.weightDry) * 100) < 0.001 &&
      parseFloat((totals.weight.acm / sample.weightDry) * 100) < acmLimit
    ) {
      totals.soilConcentrationResult = 'Below Limit'
    }

    // Calculate concentrations from weights (detection limit for concentrations is <0.001%)
    if (sample.weightDry) {
      totals.concentration.acmFloat = parseFloat((totals.weight.acm / sample.weightDry) * 100)
      // Check if concentration is over the limit (acmLimit varies depending on the land use set for the job)
      if (
        parseFloat((totals.weight.faaf / sample.weightDry) * 100) >= 0.001 ||
        parseFloat((totals.weight.fa / sample.weightDry) * 100) >= 0.001 ||
        parseFloat((totals.weight.af / sample.weightDry) * 100) >= 0.001 ||
        totals.concentration.acmFloat >= acmLimit
      )
        totals.waOverLimit = true
      totals.concentration.total =
        parseFloat((totals.weight.total / sample.weightDry) * 100) < 0.001
          ? '<0.001'
          : parseFloat((totals.weight.total / sample.weightDry) * 100).toFixed(3)
      totals.concentration.acm =
        totals.concentration.acmFloat < 0.001 ? '<0.001' : parseFloat((totals.weight.acm / sample.weightDry) * 100).toFixed(3)
      totals.concentration.faaf =
        parseFloat((totals.weight.faaf / sample.weightDry) * 100) < 0.001
          ? '<0.001'
          : parseFloat((totals.weight.faaf / sample.weightDry) * 100).toFixed(3)
      totals.concentration.fa =
        parseFloat((totals.weight.fa / sample.weightDry) * 100) < 0.001
          ? '<0.001'
          : parseFloat((totals.weight.fa / sample.weightDry) * 100).toFixed(3)
      totals.concentration.af =
        parseFloat((totals.weight.af / sample.weightDry) * 100) < 0.001
          ? '<0.001'
          : parseFloat((totals.weight.af / sample.weightDry) * 100).toFixed(3)
    }

    // Round numbers, set detection limits for weight (detection limit for weights is <0.00001g)
    totals.weight.total = totals.weight.total < 0.00001 ? '<0.00001' : totals.weight.total.toFixed(5)
    totals.weight.acm = totals.weight.acm < 0.00001 ? '<0.00001' : totals.weight.acm.toFixed(5)
    totals.weight.faaf = totals.weight.faaf < 0.00001 ? '<0.00001' : totals.weight.faaf.toFixed(5)
    totals.weight.fa = totals.weight.fa < 0.00001 ? '<0.00001' : totals.weight.fa.toFixed(5)
    totals.weight.af = totals.weight.af < 0.00001 ? '<0.00001' : totals.weight.af.toFixed(5)
  }
  return totals
}

export const getAllConfirmResult = (sample) => {
  if (!sample.confirm) return 'none'
  if (!sample.result) return 'none'

  let results = []

  {
    ;[...Array(sample.confirm.totalNum ? sample.confirm.totalNum : 1).keys()].map((num) => {
      if (sample.confirm[num + 1] && sample.confirm[num + 1].deleted !== true) {
        results.push(compareAsbestosResult(sample.confirm[num + 1], sample))
      }
    })
  }

  let perfectMatches = 0
  let differentNonAsbestos = 0
  let differentAsbestos = 0
  let falseResults = 0
  results.forEach((result) => {
    if (result === 'yes') perfectMatches += 1
    if (result === 'differentAsbestos') differentAsbestos += 1
    if (result === 'differentNonAsbestos') differentNonAsbestos += 1
    if (result === 'no') falseResults += 1
  })
  if (falseResults > 0) return 'no'
  if (differentAsbestos > 0) return 'asbestosTypesWrong'
  if (differentNonAsbestos > 0) return 'nonAsbestosTypesWrong'
  if (perfectMatches > 0) return 'yes'
  return 'none'
}

export const compareAsbestosResult = (confirm, result) => {
  let basicConfirm = getBasicResult(confirm)
  let basicResult = getBasicResult(result)
  if (basicConfirm === 'none' || basicResult === 'none') return 'none'
  if (basicConfirm !== basicResult) return 'no'
  let differentAsbestos = false
  if (basicResult === 'positive') {
    ;['ch', 'am', 'cr', 'umf'].forEach((type) => {
      if (
        (result.result[type] === true && confirm.result[type] !== true) ||
        (confirm.result[type] === true && result.result[type] !== true)
      )
        differentAsbestos = true
    })
  }
  if (differentAsbestos) return 'differentAsbestos'
  let differentNonAsbestos = false
  ;['org', 'smf'].forEach((type) => {
    if ((result.result[type] === true && confirm.result[type] !== true) || (confirm.result[type] === true && result.result[type] !== true))
      differentNonAsbestos = true
  })
  if (differentNonAsbestos) return 'differentNonAsbestos'
  return 'yes'
}

export const mergeAsbestosResult = (original, add) => {
  let merge = original ? original : {}
  ;['ch', 'am', 'cr', 'umf', 'org', 'smf', 'no'].forEach((type) => {
    if (add[type]) merge[type] = true
  })
  if (merge['no'] && (merge['ch'] || merge['am'] || merge['cr'] || merge['umf'])) merge['no'] = false
  return merge
}

export const writeChecks = (sample) => {
  let checks = []
  if (sample.confirm) {
    Object.values(sample.confirm).forEach((confirm) => {
      if (!confirm.deleted) {
        let match = compareAsbestosResult(confirm, sample)
        if (match === 'yes' || match === 'differentNonAsbestos') {
          checks.push(confirm.analyst)
        }
      }
    })
  }
  return checks
}

export const writeConditionings = (sample) => {
  let conditioningMap = {
    dcm: 'Sample prepared in solvent',
    flame: 'Sample conditioned with flame',
    furnace: 'Sample conditioned at ~400­°C',
    lowHeat: 'Sample conditioned at ~105°C',
    mortarAndPestle: 'Sample prepared using mortar and pestle',
    sieved: 'Sample prepared using sieving'
  }
  let conditionings = []
  if (sample.sampleConditioning) {
    Object.keys(sample.sampleConditioning).forEach((prep) => {
      if (sample.sampleConditioning[prep]) {
        conditionings.push(conditioningMap[prep])
      }
    })
  }
  return conditionings
}

export const getBasicResult = (sample) => {
  let result = 'none'
  if (sample.result && (sample.result['ch'] || sample.result['am'] || sample.result['cr'] || sample.result['umf'])) result = 'positive'
  if (sample.result && sample.result['no']) result = 'negative'
  return result
}

export const getSampleStatusCode = (sample) => {
  let status = 'inTransit'
  if (sample.verified) status = 'verified'
  else if (writeShorthandResult(sample.result) !== 'NO RESULT') status = 'analysisRecorded'
  else if (sample.analysisStarted) status = 'analysisStarted'
  else if (sample.receivedByLab) status = 'received'
  return status
}

export const traceAnalysisRequired = (sample) => {
  let text = 'Trace Analysis Required'
  if (sample.classification === 'homo' && sample.asbestosEvident === true) text = 'No Trace Analysis Required'
  return <div className={styles.highlightBoxBlack}>{text}</div>
}

export const writeResult = (result, noAsbestosResultReason, short) => {
  let detected = []
  if (result === undefined) {
    if (noAsbestosResultReason) {
      let reasonMap = {
        notAnalysed: 'Not analysed',
        sampleSizeTooSmall: 'Sample size too small',
        sampleNotReceived: 'Sample not received by lab',
        other: 'Not analysed'
      }
      return reasonMap[noAsbestosResultReason]
    }
    return 'Not analysed'
  }
  Object.keys(result).forEach((type) => {
    if (result[type]) detected.push(type)
  })
  if (detected.length < 1) return 'Not analysed'
  let others = ''
  let otherArray = []
  if (result['org']) otherArray.push('organic fibres')
  if (result['smf']) otherArray.push('synthetic mineral fibres')
  if (otherArray.length > 0) others = `${otherArray.join(' and ')} detected`
  if (others !== '') others = `@~${others.charAt(0).toUpperCase()}${others.slice(1)}`
  if (result['no']) return 'No asbestos detected' + others
  let asbestos = []
  if (result['ch']) asbestos.push('chrysotile')
  if (result['am']) asbestos.push('amosite')
  if (result['cr']) asbestos.push('crocidolite')
  if (asbestos.length > 0) {
    asbestos[asbestos.length - 1] = asbestos[asbestos.length - 1] + ' asbestos'
  }
  let str = ''
  if (asbestos.length === 1) {
    str = asbestos[0]
  } else if (asbestos.length > 1) {
    var last_element = asbestos.pop()
    str = asbestos.join(', ') + ' and ' + last_element
  }
  detected.forEach((detect) => {
    if (detect === 'umf') {
      if (asbestos.length > 0) {
        str = str + ' and unidentified mineral fibres (UMF)'
      } else {
        str = 'unidentified mineral fibres (UMF)'
      }
    }
  })

  if (short) return str.charAt(0).toUpperCase() + str.slice(1)
  else return str.charAt(0).toUpperCase() + str.slice(1) + ' detected' + others
}

export const writeSimpleResult = (result, noAsbestosResultReason) => {
  let detected = []
  if (result === undefined) {
    if (noAsbestosResultReason) {
      let reasonMap = {
        notAnalysed: 'Not Analysed',
        sampleSizeTooSmall: 'Sample Size Too Small',
        sampleNotReceived: 'Sample Not Received By Lab',
        other: 'Not Analysed'
      }
      return reasonMap[noAsbestosResultReason]
    }
    return 'Not Analysed'
  }
  Object.keys(result).forEach((type) => {
    if (result[type]) detected.push(type)
  })
  if (detected.length < 1) return 'Not Analysed'
  if (result['no']) return 'NO'
  let asbestos = []
  if (result['ch']) asbestos.push('CH')
  if (result['am']) asbestos.push('AM')
  if (result['cr']) asbestos.push('CR')
  if (result['umf']) asbestos.push('UMF')
  return asbestos.join(' ')
}

export const writeShorthandResult = (result) => {
  let detected = []
  if (result === undefined) return 'NO RESULT'
  Object.keys(result).forEach((type) => {
    if (result[type]) detected.push(type)
  })
  if (detected.length < 1) return 'NO RESULT'
  let str = ''
  if (detected[0] === 'no') str = 'NO '
  else {
    if (result['ch']) str = 'CH '
    if (result['am']) str += 'AM '
    if (result['cr']) str += 'CR '
    if (result['umf']) str += 'UMF '
  }
  let other = ''
  if (result['org']) other = 'ORG '
  if (result['smf']) other += 'SMF '
  str = str.slice(0, -1)
  if (other !== '') str = str + ' (' + other.slice(0, -1) + ')'
  return str
}

export const writeSoilDetails = (details) => {
  let dictionary = {
    subFractionType: {
      cobbles: 'cobbly ',
      gravel: 'gravelly ',
      sand: 'sandy ',
      clay: 'clayey ',
      silt: 'silty ',
      topsoil: 'organic soily ',
      'organic clay': 'organic clayey ',
      'organic silt': 'organic silty ',
      'organic sand': 'organic sandy ',
      peat: 'peaty '
    },
    fractionQualifier: {
      fine: 'fine',
      medium: 'medium',
      coarse: 'coarse',
      finetocoarse: 'fine to coarse',
      finetomedium: 'fine to medium',
      mediumtocoarse: 'medium to coarse',
      firm: 'firm',
      spongy: 'spongy',
      plastic: 'plastic',
      fibrous: 'fibrous',
      amorphous: 'amorphous'
    },
    plasticity: {
      'low plasticity': 'slightly plastic',
      'medium plasticity': 'moderately plastic',
      'high plasticity': 'highly plastic'
    }
  }
  let finalStr = ''
  let sections = []
  if (details && details.majorFractionType) {
    // SOIL NAME
    let str = ''
    let minorFractions = []
    if (details.subFractionType && details.subFractionType !== '') {
      str = dictionary.subFractionType[details.subFractionType]
    }
    if (
      (details.majorFractionType === 'sand' ||
        details.majorFractionType === 'gravel' ||
        details.majorFractionType === 'organic sand' ||
        details.majorFractionType === 'peat') &&
      details.majorFractionQualifier
    ) {
      str = str + dictionary.fractionQualifier[details.majorFractionQualifier] + ' '
    }
    str = str + details.majorFractionType.toUpperCase() + ' '
    if (details.someFractionTypes) {
      let fractionArray = []
      Object.keys(details.someFractionTypes).forEach((key) => {
        if (details.someFractionTypes[key] === true) fractionArray.push(key)
      })
      if (fractionArray.length > 0) minorFractions.push('some ' + andList(fractionArray))
    }
    if (details.minorFractionTypes) {
      let fractionArray = []
      Object.keys(details.minorFractionTypes).forEach((key) => {
        if (details.minorFractionTypes[key] === true) fractionArray.push(key)
      })
      if (fractionArray.length > 0) minorFractions.push('minor ' + andList(fractionArray))
    }
    if (details.traceFractionTypes) {
      let fractionArray = []
      Object.keys(details.traceFractionTypes).forEach((key) => {
        if (details.traceFractionTypes[key] === true) fractionArray.push(key)
      })
      if (fractionArray.length > 0) minorFractions.push('trace of ' + andList(fractionArray))
    }
    if (minorFractions.length > 0) str += 'with ' + andList(minorFractions)
    sections.push(str)
    str = ''

    // VISUAL CHARACTERISTICS
    let section = []
    if (details.color && details.color !== '') {
      let color = ''
      if (details.colorShade && details.colorShade !== '') color += details.colorShade + ' '
      if (details.colorQualifier && details.colorQualifier !== '') color += details.colorQualifier + ' '
      color += details.color
      if (
        details.type !== 'coarse' &&
        details.colorPattern &&
        details.colorPattern !== '' &&
        details.colorSecondary &&
        details.colorSecondary !== ''
      ) {
        color += ', ' + details.colorPattern + ' ' + details.colorSecondary
      }
      section.push(color)
    }
    if (details.structure && details.structure !== '') {
      section.push(details.structure)
    }
    if (section.length > 0) {
      sections.push(section.join(', '))
    }

    finalStr = sections.map((x) => x.trim()).join('; ') + '. '

    // SOIL MASS QUALIFICATIONS
    section = []
    sections = []
    if (details.type !== 'coarse' && details.strength && details.strength !== '') sections.push(details.strength)
    if (details.type === 'coarse' && details.density && details.density !== '') sections.push(details.density)
    if (details.moisture && details.moisture !== '') sections.push(details.moisture)
    if (details.grading && details.grading !== '') sections.push(details.grading)
    if (details.bedding && details.bedding !== '') sections.push(details.bedding)
    if (details.majorFractionType === 'clay' && details.plasticity && details.plasticity !== '') sections.push(details.plasticity)
    if (
      details.type === 'fine' &&
      details.strength &&
      details.sensitivityStrength &&
      details.strength !== '' &&
      details.sensitivityStrength !== ''
    ) {
      sections.push(getSoilSensitivity(details).toLowerCase())
    }

    // SOIL FRACTION QUALIFICATIONS
    // Add major fraction
    if (details.majorFractionType && details.majorFractionType !== '') {
      let temp = details.majorFractionType
      if (
        (details.majorFractionType === 'sand' ||
          details.majorFractionType === 'gravel' ||
          details.majorFractionType === 'organic sand' ||
          details.majorFractionType === 'peat') &&
        details.majorFractionQualifier &&
        details.majorFractionQualifier !== ''
      )
        temp += ', ' + dictionary.fractionQualifier[details.majorFractionQualifier]
      if (details.type !== 'fine' && details.particleShape && details.particleShape !== '') temp += ', ' + details.particleShape
      if (details.type !== 'fine' && details.particleShapeSecondary && details.particleShapeSecondary !== '')
        temp += ', ' + details.particleShapeSecondary
      if (details.majorFractionType === 'clay' && details.plasticity && details.plasticity !== '')
        temp += ', ' + dictionary.plasticity[details.plasticity]
      sections.push(temp)
    }
    // Add subordinate fraction
    if (details.subFractionType && details.subFractionType !== '') {
      let temp = details.subFractionType
      if (
        (details.subFractionType === 'sand' ||
          details.subFractionType === 'gravel' ||
          details.subFractionType === 'organic sand' ||
          details.subFractionType === 'peat') &&
        details.subFractionQualifier &&
        details.subFractionQualifier !== ''
      )
        temp += ', ' + dictionary.fractionQualifier[details.subFractionQualifier]
      if (details.subFractionType === 'clay' && details.plasticity && details.plasticity !== '')
        temp += ', ' + dictionary.plasticity[details.plasticity]
      sections.push(temp)
    }
    // Add minor fraction
    let fractionArray = []
    Object.keys(details.someFractionTypes).forEach((key) => {
      if (details.someFractionTypes[key] === true) fractionArray.push(key)
    })
    Object.keys(details.minorFractionTypes).forEach((key) => {
      if (details.minorFractionTypes[key] === true) fractionArray.push(key)
    })
    Object.keys(details.traceFractionTypes).forEach((key) => {
      if (details.traceFractionTypes[key] === true) fractionArray.push(key)
    })

    if (fractionArray.length > 0) sections.push(andList(fractionArray))

    if (details.additionalStructures && details.additionalStructures !== '') sections.push(details.additionalStructures.toLowerCase())
    if (sections.length > 0) {
      let temp = sections.join('; ')
      finalStr += temp.charAt(0).toUpperCase() + temp.slice(1)
    }

    if (details.geological && details.geological !== '') finalStr += ' (' + details.geological.toUpperCase() + ')'
    finalStr += '.'
  } else {
    finalStr = 'No details.'
  }
  return finalStr
}

export const writeSampleDimensions = (sample, total) => {
  let dims = []
  ;['length', 'width', 'depth'].forEach((dim) => {
    // console.log(dim);
    if (sample.dimensions !== undefined && sample.dimensions[dim] !== undefined && sample.dimensions[dim] !== '')
      dims.push(parseFloat(sample.dimensions[dim]))
  })
  if (dims.length === 0) return null
  let app = ''
  if (dims.length === 3) {
    let volMM = dims[0] * dims[1] * dims[2]
    let volCM = volMM / 1000
    let volM = volMM / 1000000000
    if (volM > 0.1) app = volM.toPrecision(2) + 'm³'
    else if (volCM > 0.1) app = volCM.toPrecision(2) + 'cm³'
    else app = volMM.toPrecision(2) + 'mm³'
  } else if (dims.length === 2) {
    let areaMM = dims[0] * dims[1]
    let areaCM = areaMM / 100
    let areaM = areaMM / 1000000
    if (areaM > 1) app = areaM.toPrecision(2) + 'm²'
    else if (areaCM > 1) app = areaCM.toPrecision(2) + 'cm²'
    else app = areaMM.toPrecision(2) + 'mm²'
  } else if (dims.length === 1) {
    let lMM = dims[0]
    let lCM = lMM / 10
    let lM = lMM / 1000
    if (lM > 1) app = lM.toPrecision(2) + 'm'
    else if (lCM > 1) app = lCM.toPrecision(2) + 'cm'
    else app = lMM.toPrecision(2) + 'mm'
  }
  if (total) return app
  else return dims.map((dim) => `${dim}mm`).join(' x ') + ` (${app})`
}

export const collateArrayResults = (layers) => {
  let results = {}
  layers.forEach((layer) => {
    if (layer.result !== undefined && layer.result.deleted !== true) {
      Object.keys(layer.result).forEach((k) => {
        if (layer.result[k] === true) results[k] = true
      })
    }
  })
  if (results['no'] === true && (results['ch'] === true || results['am'] === true || results['cr'] === true || results['umf'] === true)) {
    results['no'] = false
  }
  return results
}

export const collateLayeredResults = (layers) => {
  let results = {}
  Object.keys(layers).forEach((key) => {
    if (layers[key].result !== undefined && layers[key].result.deleted !== true) {
      Object.keys(layers[key].result).forEach((k) => {
        if (layers[key].result[k] === true) results[k] = true
      })
    }
  })
  if (results['no'] === true && (results['ch'] === true || results['am'] === true || results['cr'] === true || results['umf'] === true)) {
    results['no'] = false
  }
  // console.log(results);
  return results
}

export const checkVerifyIssues = () => {
  let issues = []
  return issues
}
