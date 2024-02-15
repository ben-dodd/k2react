// Air Sample Functions

export const getAverageFlowRate = (sample) => {
  if (sample.initialFlowRate && sample.finalFlowRate) {
    let averageFlowRate = (parseFloat(sample.initialFlowRate) + parseFloat(sample.finalFlowRate)) / 2,
      //Less than 0.4 L/min may preclude countable fibres from being collected from the airborne dust cloud
      sampleRateLow = averageFlowRate < 400,
      //greater than 8 L/min may result in interference from excessively large particles and may also cause leakage problems for most available filter holders
      sampleRateHigh = averageFlowRate > 8000,
      //If the difference is greater than 10 per cent from the initial flowrate, the sample must be rejected, unless a valid method of estimating total volume can be applied. [Guidance Notes p.21]
      differenceInFlowRates = (Math.abs(sample.initialFlowRate - sample.finalFlowRate) / averageFlowRate) * 100,
      differenceTooHigh = differenceInFlowRates > 10,
      status = sampleRateLow || sampleRateHigh || differenceTooHigh ? 'Error' : 'OK'
    return {
      averageFlowRate,
      differenceInFlowRates,
      sampleRateLow,
      sampleRateHigh,
      differenceTooHigh,
      status
    }
  } else {
    return {
      averageFlowRate: null,
      differenceInFlowRates: null,
      sampleRateLow: null,
      sampleRateHigh: null,
      differenceTooHigh: null,
      status: 'No Data'
    }
  }
}

export const getSampleRunTime = (sample) => {
  console.log(sample)
  if (sample.totalRunTime) return sample.totalRunTime
  else if (sample.startTime && sample.endTime) {
    return moment(sample.endTime).diff(sample.startTime, 'minutes')
  } else return null
}

export const getAirSampleData = (sample, fibreResultDefault) => {
  let calcs = {
    runTime: null,
    averageFlowRate: null,
    sampleVolume: null,
    differenceInFlowRates: null,
    sampleVolumeTooLow: false,
    sampleVolumeMuchTooLow: false,
    sampleRateLow: false,
    sampleRateHigh: false,
    differenceTooHigh: false,
    status: 'No Data',
    fibreCountAverage: null,
    fibreCounts: {},
    graticuleArea: null,
    overLoaded: false,
    marginsBad: false
  }

  if (sample.totalRunTime) calcs.runTime = sample.totalRunTime
  else if (sample.startTime && sample.endTime) {
    calcs.runTime = moment(sample.endTime).diff(sample.startTime, 'minutes')
  }

  if (sample.initialFlowRate && sample.finalFlowRate)
    calcs.averageFlowRate = (parseFloat(sample.initialFlowRate) + parseFloat(sample.finalFlowRate)) / 2

  // Catch sampling errors
  if (calcs.averageFlowRate) {
    //Less than 0.4 L/min may preclude countable fibres from being collected from the airborne dust cloud
    if (calcs.averageFlowRate < 400) calcs.sampleRateLow = true
    //greater than 8 L/min may result in interference from excessively large particles and may also cause leakage problems for most available filter holders
    else if (calcs.averageFlowRate > 8000) calcs.sampleRateHigh = true

    calcs.differenceInFlowRates = (Math.abs(sample.initialFlowRate - sample.finalFlowRate) / calcs.averageFlowRate) * 100

    //If the difference is greater than 10 per cent from the initial flowrate, the sample must be rejected, unless a valid method of estimating total volume can be applied. [Guidance Notes p.21]
    if (calcs.differenceInFlowRates > 10) calcs.differenceTooHigh = true
  }

  if (calcs.averageFlowRate && calcs.runTime) {
    calcs.sampleVolume = (calcs.averageFlowRate * calcs.runTime) / 1000
    if (calcs.sampleVolume < 100) calcs.sampleVolumeMuchTooLow = true
    if (calcs.sampleVolume < 360) calcs.sampleVolumeTooLow = true
  }

  if (sample.fibreResult || sample.fibreResult === 0 || (sample.fibreCounts && Object.keys(sample.fibreCounts).length > 0)) {
    // Fibre counts have been done. Get concentrations.
    // Each fibre count has the following information:
    //    (obj) analyst: {name, uid}
    //    (obj) microscope: {name, distance}
    //    (time) analysisTime
    //    (float) fibreCount
    //    (bool) overloaded
    //    (bool) marginsBad
    //    (string) notes

    let overloadedNumber = 0,
      marginsBadNumber = 0,
      microscopeDistanceTotal = 0,
      microscopeNumber = 0,
      fibreCountTotal = 0,
      filtersAnalysedNumber = 0,
      filtersTotalNumber = sample.fibreCounts ? Object.keys(sample.fibreCounts).length : 1,
      analysisDates = {},
      analysts = [],
      analystMap = {},
      effectiveFilterArea = 385,
      areasCounted = 100,
      actualConcentration = null,
      reportConcentration = null

    analysisDates = writeDates(sample.fibreCounts, 'analysisDate')

    sample.fibreCounts &&
      Object.values(sample.fibreCounts).forEach((f) => {
        if (f.overloaded) {
          // Analyst has stated filter is overloaded, do not count results
          overloadedNumber++
        } else if (f.marginsBad) {
          // Analyst has stated margins are bad, do not count results
          marginsBadNumber++
        } else {
          // Valid sample, add data to list
          analystMap[f.analyst] = true
          if (f.microscope && f.microscope.distance) {
            microscopeDistanceTotal += parseFloat(f.microscope.distance)
            microscopeNumber++
          }
          fibreCountTotal += parseFloat(f.fibreCount)
          filtersAnalysedNumber++
        }
      })

    analysts = Object.keys(analystMap)

    let microscopeDistanceAvg = microscopeNumber > 0 ? parseFloat(microscopeDistanceTotal / microscopeNumber) : null,
      fibreResult =
        sample.fibreResult || sample.fibreResult === 0
          ? parseFloat(sample.fibreResult)
          : filtersAnalysedNumber > 0
            ? parseFloat(fibreCountTotal / filtersAnalysedNumber)
            : fibreResultDefault
              ? fibreResultDefault
              : null
    console.log(fibreResult)
    // Microscope distance average is approximated if not present to cover historic air testing
    let graticuleArea = microscopeDistanceAvg
      ? Math.PI * Math.pow(microscopeDistanceAvg / 1000 / 2, 2)
      : Math.PI * Math.pow(100.2 / 1000 / 2, 2)
    // console.log(calcs);
    // console.log(fibreResult);
    if (
      graticuleArea &&
      (fibreResult || fibreResult === 0) &&
      calcs.averageFlowRate &&
      calcs.averageFlowRate !== 0 &&
      calcs.runTime !== 0
    ) {
      actualConcentration =
        (((effectiveFilterArea / graticuleArea) * fibreResult) / areasCounted) * (1 / calcs.averageFlowRate) * (1 / calcs.runTime)
      console.log(actualConcentration)
      if (actualConcentration || actualConcentration === 0) {
        if (fibreResult >= 10) {
          // less than 0.005: [<0.01]
          // 0.005 to less than 0.100 [to 2 decimal places and 1 significant figure]
          // 0.10 to 1.00 [to 1 decimal place and 1 significant figure]
          // greater than 1.00 [to 2 significant figures and 0 decimal places]
          if (actualConcentration < 0.005) reportConcentration = '<0.01'
          else if (actualConcentration < 0.1) reportConcentration = parseFloat(actualConcentration.toPrecision(1)).toFixed(2).toString()
          else if (actualConcentration <= 1.0) reportConcentration = parseFloat(actualConcentration.toPrecision(1)).toFixed(1).toString()
          else reportConcentration = parseFloat(actualConcentration.toPrecision(2)).toFixed(0).toString()
          console.log(reportConcentration)
        } else {
          // If the actual count is less than 10 fibres/100 graticule areas, then the count is not significantly above that of background.
          // The results should be calculated using the minimum practical lower limit of detection of 10 fibres/100 graticule areas and
          // reported as less than the calculated value expressed to one significant figure and no more than the second decimal place,
          // unless supported by valid technical considerations.
          let effectiveConcentration =
            (((effectiveFilterArea / graticuleArea) * 10) / areasCounted) * (1 / calcs.averageFlowRate) * (1 / calcs.runTime)
          console.log(effectiveConcentration)
          reportConcentration = `<${parseFloat(effectiveConcentration.toPrecision(1)).toFixed(2)}`
          console.log(reportConcentration)
        }
      }
    }

    calcs = {
      ...calcs,
      microscopeDistanceAvg,
      fibreResult,
      graticuleArea,
      actualConcentration,
      reportConcentration,
      overloadedNumber,
      marginsBadNumber,
      filtersAnalysedNumber,
      filtersTotalNumber,
      analysisDates,
      analysts
    }
  }

  console.log(calcs)

  return calcs
}

export const getAirConcentration = (sample, microscope) => {
  if (sample && microscope && microscope.distance) {
    let effectiveFilterArea = 385,
      areasCounted = 100,
      sampleData = getAirSampleData(sample),
      graticuleArea = Math.PI * Math.pow(microscope.distance / 1000 / 2, 2)

    sample.fibreResult = parseFloat(sample.specificLocation)

    console.log(sampleData)

    let actualConcentration = null,
      reportConcentration = null
    if (
      graticuleArea !== 0 &&
      sample.fibreResult !== 0 &&
      sampleData &&
      sampleData.averageFlowRate &&
      sampleData.averageFlowRate !== 0 &&
      sampleData.runTime !== 0
    ) {
      actualConcentration =
        (((effectiveFilterArea / graticuleArea) * sample.fibreResult) / areasCounted) *
        (1 / sampleData.averageFlowRate) *
        (1 / sampleData.runTime)
      if (actualConcentration) {
        if (sample.fibreResult >= 10) {
          // less than 0.005: [<0.01]
          // 0.005 to less than 0.100 [to 2 decimal places and 1 significant figure]
          // 0.10 to 1.00 [to 1 decimal place and 1 significant figure]
          // greater than 1.00 [to 2 significant figures and 0 decimal places]
          if (actualConcentration < 0.005) reportConcentration = '<0.01'
          else if (actualConcentration < 0.1) reportConcentration = actualConcentration.toPrecision(1).toFixed(2).toString()
          else if (actualConcentration <= 1.0) reportConcentration = actualConcentration.toPrecision(1).toFixed(1).toString()
          else reportConcentration = actualConcentration.toPrecision(2).toFixed(0).toString()
          console.log(reportConcentration)
        } else {
          // If the actual count is less than 10 fibres/100 graticule areas, then the count is not significantly above that of background.
          // The results should be calculated using the minimum practical lower limit of detection of 10 fibres/100 graticule areas and
          // reported as less than the calculated value expressed to one significant figure and no more than the second decimal place,
          // unless supported by valid technical considerations.
          let effectiveConcentration =
            (((effectiveFilterArea / graticuleArea) * 10) / areasCounted) * (1 / sampleData.averageFlowRate) * (1 / sampleData.runTime)
          console.log(effectiveConcentration)
          reportConcentration = `<${effectiveConcentration.toPrecision(1).toFixed(2)}`
          console.log(reportConcentration)
        }
      }
    }
    let data = {
      ...sampleData,
      effectiveFilterArea,
      areasCounted,
      graticuleArea,
      actualConcentration,
      reportConcentration
    }
    console.log(data)
    return data
  } else return null
}
