<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";
import { connect } from "react-redux";
import {
  fetchCocs,
  setAnalyst,
  setAnalysisMode
} from "../../actions/asbestosLab";

//Modals
import { COC } from "../../constants/modal-types";
import { showModal } from "../../actions/modal";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";

const mapStateToProps = state => {
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'
import { connect } from 'react-redux'
import { fetchCocs, setAnalyst, setAnalysisMode } from '../../actions/asbestosLab'

//Modals
import { COC } from '../../constants/modal-types'
import { showModal } from '../../actions/modal'

import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    search: state.local.search,
    me: state.local.me,
    staff: state.local.staff,
    cocs: state.asbestosLab.cocs,
    bulkAnalysts: state.asbestosLab.bulkAnalysts,
    airAnalysts: state.asbestosLab.airAnalysts,
    analyst: state.asbestosLab.analyst,
    analysisMode: state.asbestosLab.analysisMode
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCocs: () => dispatch(fetchCocs()),
    showModal: modal => dispatch(showModal(modal)),
    setAnalyst: analyst => dispatch(setAnalyst(analyst)),
    setAnalysisMode: analysisMode => dispatch(setAnalysisMode(analysisMode))
  };
};
=======
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
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class AsbestosStats extends React.Component {
  state = {
    analyst: false
<<<<<<< HEAD
  };

  UNSAFE_componentWillMount = () => {
    //
  };

  render() {
    const { cocs, classes } = this.props;
=======
  }

  UNSAFE_componentWillMount = () => {
    //
  }

  render() {
    const { cocs, classes } = this.props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return (
      <div style={{ marginTop: 80 }}>
        <div className={classes.paleLarge}>Under Development</div>
      </div>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AsbestosStats)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AsbestosStats))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
