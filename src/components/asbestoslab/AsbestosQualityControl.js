import { withStyles } from '@material-ui/core/styles'
import { fetchCocs, setAnalysisMode, setAnalyst } from 'actions/asbestosLab'
import { styles } from 'config/styles'
import React from 'react'
import { connect } from 'react-redux'

//Modals
import { showModal } from 'actions/modal'


const mapStateToProps = (state) => {
  return {
    search: state.local.search,
    me: state.local.me,
    staff: state.local.staff,
    cocs: state.asbestosLab.cocs,
    bulkAnalysts: state.asbestosLab.bulkAnalysts,
    airAnalysts: state.asbestosLab.airAnalysts,
    analyst: state.asbestosLab.analyst,
    analysisMode: state.asbestosLab.analysisMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCocs: () => dispatch(fetchCocs()),
    showModal: (modal) => dispatch(showModal(modal)),
    setAnalyst: (analyst) => dispatch(setAnalyst(analyst)),
    setAnalysisMode: (analysisMode) => dispatch(setAnalysisMode(analysisMode))
  }
}

class AsbestosQualityControl extends React.Component {
  state = {
    //
  }

  UNSAFE_componentWillMount = () => {
    //
  }

  render() {
    const { cocs, classes } = this.props

    return (
      <div style={{ marginTop: 80 }}>
        <div className={classes.paleLarge}>Under Development</div>
      </div>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AsbestosQualityControl))
