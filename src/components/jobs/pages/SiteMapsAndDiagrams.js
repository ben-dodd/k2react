<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";

//Modals
import { showModal } from "../../../actions/modal";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { SketchField } from "react-sketch";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import MoveIcon from "@material-ui/icons/OpenWith";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'

//Modals
import { showModal } from '../../../actions/modal'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import { SketchField } from 'react-sketch'
import UndoIcon from '@material-ui/icons/Undo'
import RedoIcon from '@material-ui/icons/Redo'
import MoveIcon from '@material-ui/icons/OpenWith'
import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import {
  fetchWFMJobs,
  fetchWFMLeads,
  fetchWFMClients,
  fetchCurrentJobState,
  saveCurrentJobState,
  clearWfmJob,
  saveWFMItems,
  saveGeocodes,
  fetchGeocodes,
  updateGeocodes,
  saveStats,
<<<<<<< HEAD
  collateJobsList,
} from "../../../actions/jobs";

import { filterMap, filterMapReset } from "../../../actions/display";
=======
  collateJobsList
} from '../../../actions/jobs'

import { filterMap, filterMapReset } from '../../../actions/display'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    wfmJobs: state.jobs.wfmJobs,
    wfmJob: state.jobs.wfmJob,
    wfmLeads: state.jobs.wfmLeads,
    wfmClients: state.jobs.wfmClients,
    currentJobState: state.jobs.currentJobState,
    geocodes: state.jobs.geocodes,
    wfmItems: state.jobs.wfmItems,
    wfmStats: state.jobs.wfmStats,
    jobList: state.jobs.jobList,
    search: state.local.search,
    jobs: state.jobs.jobs,
    me: state.local.me,
    filter: state.display.filterMap,
    otherOptions: state.const.otherOptions,
<<<<<<< HEAD
    modalType: state.modal.modalType,
  };
};
=======
    modalType: state.modal.modalType
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWFMJobs: () => dispatch(fetchWFMJobs()),
    fetchWFMLeads: () => dispatch(fetchWFMLeads()),
    fetchWFMClients: () => dispatch(fetchWFMClients()),
<<<<<<< HEAD
    fetchCurrentJobState: (ignoreCompleted) =>
      dispatch(fetchCurrentJobState(ignoreCompleted)),
=======
    fetchCurrentJobState: (ignoreCompleted) => dispatch(fetchCurrentJobState(ignoreCompleted)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    clearWfmJob: () => dispatch(clearWfmJob()),
    saveCurrentJobState: (state) => dispatch(saveCurrentJobState(state)),
    saveGeocodes: (g) => dispatch(saveGeocodes(g)),
    fetchGeocodes: () => dispatch(fetchGeocodes()),
    updateGeocodes: (g) => dispatch(updateGeocodes(g)),
    saveWFMItems: (items) => dispatch(saveWFMItems(items)),
    saveStats: (stats) => dispatch(saveStats(stats)),
    filterMap: (filter) => dispatch(filterMap(filter)),
    filterMapReset: () => dispatch(filterMapReset()),
    showModal: (modal) => dispatch(showModal(modal)),
<<<<<<< HEAD
    collateJobsList: (
      wfmJobs,
      wfmLeads,
      currentJobState,
      wfmClients,
      geocodes
    ) =>
      dispatch(
        collateJobsList(
          wfmJobs,
          wfmLeads,
          currentJobState,
          wfmClients,
          geocodes
        )
      ),
  };
};

class SiteMapsAndDiagrams extends React.Component {
  state = {
    lineColor: "black",
    tool: "pencil",
    drawings: [],
    text: "",
    canUndo: false,
    canRedo: false,
  };

  _toolSwitch = (tool) => {
    this.setState({
      tool: tool,
    });
  };

  _save = () => {
    let drawings = this.state.drawings;
    drawings.push(this._sketch.toDataURL());
    this.setState({ drawings: drawings });
  };
=======
    collateJobsList: (wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes) =>
      dispatch(collateJobsList(wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes))
  }
}

class SiteMapsAndDiagrams extends React.Component {
  state = {
    lineColor: 'black',
    tool: 'pencil',
    drawings: [],
    text: '',
    canUndo: false,
    canRedo: false
  }

  _toolSwitch = (tool) => {
    this.setState({
      tool: tool
    })
  }

  _save = () => {
    let drawings = this.state.drawings
    drawings.push(this._sketch.toDataURL())
    this.setState({ drawings: drawings })
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  // _download = () => {
  //   console.save(this._sketch.toDataURL(), '')
  // }

  _undo = () => {
<<<<<<< HEAD
    this._sketch.undo();
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo(),
    });
  };

  _redo = () => {
    this._sketch.redo();
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo(),
    });
  };

  _clear = () => {
    if (window.confirm("Are you sure you wish to clear the image?")) {
      this._sketch.clear();
      this.setState({
        controlledValue: null,
        canUndo: this._sketch.canUndo(),
        canRedo: this._sketch.canRedo(),
      });
    }
  };

  _onSketchChange = () => {
    let prev = this.state.canUndo;
    let now = this._sketch.canUndo();
    if (prev !== now) {
      this.setState({ canUndo: now });
    }
  };

  _addText = () => {
    this.setState({ tool: "select" });
    this._sketch.addText(this.state.text);
  };

  render() {
    let { controlledValue } = this.state;
=======
    this._sketch.undo()
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo()
    })
  }

  _redo = () => {
    this._sketch.redo()
    this.setState({
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo()
    })
  }

  _clear = () => {
    if (window.confirm('Are you sure you wish to clear the image?')) {
      this._sketch.clear()
      this.setState({
        controlledValue: null,
        canUndo: this._sketch.canUndo(),
        canRedo: this._sketch.canRedo()
      })
    }
  }

  _onSketchChange = () => {
    let prev = this.state.canUndo
    let now = this._sketch.canUndo()
    if (prev !== now) {
      this.setState({ canUndo: now })
    }
  }

  _addText = () => {
    this.setState({ tool: 'select' })
    this._sketch.addText(this.state.text)
  }

  render() {
    let { controlledValue } = this.state
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return (
      <div>
        <InputLabel shrink>Diagram of incident</InputLabel>
        <Grid container spacing={8}>
          <Grid item>
<<<<<<< HEAD
            <IconButton aira-label="Undo" onClick={this._undo}>
              <UndoIcon
                disabled={!this.state.canUndo}
                color={this.state.canUndo ? "secondary" : "action"}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aira-label="Redo" onClick={this._redo}>
              <RedoIcon
                disabled={!this.state.canRedo}
                color={this.state.canRedo ? "secondary" : "action"}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aira-label="Move"
              onClick={() => this._toolSwitch("select")}
            >
              <MoveIcon
                color={this.state.tool === "select" ? "secondary" : "action"}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aira-label="Clear" onClick={this._clear}>
              <ClearIcon color={"secondary"} />
=======
            <IconButton aira-label='Undo' onClick={this._undo}>
              <UndoIcon disabled={!this.state.canUndo} color={this.state.canUndo ? 'secondary' : 'action'} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aira-label='Redo' onClick={this._redo}>
              <RedoIcon disabled={!this.state.canRedo} color={this.state.canRedo ? 'secondary' : 'action'} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aira-label='Move' onClick={() => this._toolSwitch('select')}>
              <MoveIcon color={this.state.tool === 'select' ? 'secondary' : 'action'} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aira-label='Clear' onClick={this._clear}>
              <ClearIcon color={'secondary'} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </IconButton>
          </Grid>
          <Grid item>
            <Button
<<<<<<< HEAD
              variant="outlined"
              color={this.state.tool === "pencil" ? "secondary" : "primary"}
              onClick={() => this._toolSwitch("pencil")}
=======
              variant='outlined'
              color={this.state.tool === 'pencil' ? 'secondary' : 'primary'}
              onClick={() => this._toolSwitch('pencil')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            >
              Pencil
            </Button>
          </Grid>
          <Grid item>
            <Button
<<<<<<< HEAD
              variant="outlined"
              color={this.state.tool === "line" ? "secondary" : "primary"}
              onClick={() => this._toolSwitch("line")}
=======
              variant='outlined'
              color={this.state.tool === 'line' ? 'secondary' : 'primary'}
              onClick={() => this._toolSwitch('line')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            >
              Line
            </Button>
          </Grid>
          <Grid item>
            <Button
<<<<<<< HEAD
              variant="outlined"
              color={this.state.tool === "circle" ? "secondary" : "primary"}
              onClick={() => this._toolSwitch("circle")}
=======
              variant='outlined'
              color={this.state.tool === 'circle' ? 'secondary' : 'primary'}
              onClick={() => this._toolSwitch('circle')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            >
              Circle
            </Button>
          </Grid>
          <Grid item>
            <Button
<<<<<<< HEAD
              variant="outlined"
              color={this.state.tool === "rectangle" ? "secondary" : "primary"}
              onClick={() => this._toolSwitch("rectangle")}
=======
              variant='outlined'
              color={this.state.tool === 'rectangle' ? 'secondary' : 'primary'}
              onClick={() => this._toolSwitch('rectangle')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            >
              Rectangle
            </Button>
          </Grid>
          <Grid item>
<<<<<<< HEAD
            <TextField
              label={"Add Text"}
              onChange={(e) => this.setState({ text: e.target.value })}
              value={this.state.text}
            />
          </Grid>
          <Grid item>
            <IconButton color="primary" onClick={this._addText}>
=======
            <TextField label={'Add Text'} onChange={(e) => this.setState({ text: e.target.value })} value={this.state.text} />
          </Grid>
          <Grid item>
            <IconButton color='primary' onClick={this._addText}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
        <SketchField
<<<<<<< HEAD
          name="sketch"
          ref={(c) => (this._sketch = c)}
          width="1024px"
          height="540px"
          tool={this.state.tool}
          lineColor={this.state.lineColor}
          lineWidth={3}
          defaultValue={{ background: "" }}
=======
          name='sketch'
          ref={(c) => (this._sketch = c)}
          width='1024px'
          height='540px'
          tool={this.state.tool}
          lineColor={this.state.lineColor}
          lineWidth={3}
          defaultValue={{ background: '' }}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          value={controlledValue}
          forceValue
          onChange={this._onSketchChange}
        />
      </div>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SiteMapsAndDiagrams)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SiteMapsAndDiagrams))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
