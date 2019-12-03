import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import store from "../../../store";
import { WFM_TIME } from "../../../constants/modal-types";
import { cocsRef, auth } from "../../../config/firebase";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { hideModal, } from "../../../actions/modal";
import { setLastTimeSaved, } from "../../../actions/jobs";
import Select from 'react-select';

import { personnelConvert, andList, } from "../../../actions/helpers";
import { asbestosSamplesRef } from "../../../config/firebase";
import moment from 'moment';

import {
  DatePicker, TimePicker,
} from "@material-ui/pickers";

const mapStateToProps = state => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    me: state.local.me,
    staff: state.local.staff,
    wfmJobs: state.jobs.wfmJobs,
    lastTimeSaved: state.jobs.lastTimeSaved,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
    setLastTimeSaved: (time) => dispatch(setLastTimeSaved(time)),
  };
};

const stateInit = {
  staff: [],
  jobs: [],
  task: null,
  note: '',
  startTime: null,
  endTime: null,
};

const taskIDs = [
  {
    label: 'Travel',
    value: process.env.REACT_APP_WFM_TASK_TRAVEL
  },
  {
    label: 'Site Work',
    value: process.env.REACT_APP_WFM_TASK_SITEWORK
  },
  {
    label: 'Analysis',
    value: process.env.REACT_APP_WFM_TASK_ANALYSIS
  },
  {
    label: 'Report Writing',
    value: process.env.REACT_APP_WFM_TASK_REPORT
  },
  {
    label: 'Report Checking',
    value: process.env.REACT_APP_WFM_TASK_REVIEW
  },
  {
    label: 'Report KTPing',
    value: process.env.REACT_APP_WFM_TASK_KTP
  },
];

class WfmTimeModal extends React.Component {
  state = stateInit;

  loadProps = () => {
    let job = this.props.modalProps && this.props.modalProps.job ? this.props.modalProps.job : null;
    this.setState({
      staff: [{
        value: this.props.me.wfm_id,
        label: this.props.me.name,
      }],
      jobs: job ? [{
        value: job.wfmID,
        label: `${job.jobNumber} ${job.client}`,
      }] : [],
      date: new Date(),
      startTime: this.props.lastTimeSaved ? this.props.lastTimeSaved : null,
      endTime: new Date(),
    });
  }

  clearProps = () => {
    if (this.state.endTime) this.props.setLastTimeSaved(this.state.endTime);
    this.setState(stateInit);
  }

  addWfmTime = () => {
    // Prepare job for API
    console.log(this.state);
    let task = this.state.task,
      day = moment(this.state.date).format('YYYYMMDD'),
      startTime = moment(this.state.startTime).format('HH:MM'),
      endTime = moment(this.state.endTime).format('HH:MM'),
      note = this.state.note;

    this.state.jobs.forEach(job => {
      let noteAddendum = '';
      if (this.state.jobs.length > 1) {
        let sharedJobList = [];
        this.state.jobs.forEach(sharedJob => {
          if (sharedJob !== job) sharedJobList.push(sharedJob.label);
        });
        noteAddendum = `Time shared with ${andList(sharedJobList)} (Time has already been divided up by MyK2)`;
        if (note !== '') note = `${note}\n\n${noteAddendum}`;
          else note = noteAddendum;
      }
      this.state.staff.forEach(staff => {
        let data = {
          jobID: job.value,
          taskID: task,
          staffID: staff.value,
          date: day,
          startTime: startTime,
          endTime: endTime,
          note: note,
        }
        console.log(data);
        let path = `${process.env.REACT_APP_API_ROOT}wfm/add_time.php?apiKey=${
          process.env.REACT_APP_API_KEY}&data=${JSON.stringify(data)}`;
        //console.log(path);
        fetch(path);
      });
    })

    this.props.hideModal();
  }

  render() {
    const { classes, modalType } = this.props;
    const names = Object.values(this.props.staff).sort((a, b) => a.name.localeCompare(b.name)).map(e => ({ value: e.wfm_id, label: e.name }));
    const jobNumbers = Object.values(this.props.wfmJobs).sort((a, b) => a.jobNumber.localeCompare(b.jobNumber)).map(e => ({ value: e.wfmID, label: `${e.jobNumber} ${e.client}`}));
    console.log(jobNumbers);
    console.log(names);

    return (
      <div>
      {modalType === WFM_TIME &&
      <Dialog
        open={modalType === WFM_TIME}
        onClose={this.props.hideModal}
        maxWidth="sm"
        fullWidth={true}
        onEnter={this.loadProps}
        onExit={this.clearProps}
      >
        <DialogTitle>Add Time to WorkflowMax</DialogTitle>
        <DialogContent>
          <Select
            style={{width: '100%'}}
            isMulti
            className={classes.selectTight}
            value={this.state.jobs}
            options={jobNumbers}
            onChange={e =>
              this.setState({ jobs: e })
            }
          />

          <Select
            style={{width: '100%'}}
            isMulti
            className={classes.selectTight}
            value={this.state.staff}
            options={names}
            onChange={e =>
              this.setState({ staff: e })
            }
          />
          <Select
            style={{width: '100%'}}
            className={classes.selectTight}
            value={this.state.task}
            options={taskIDs}
            onChange={e =>
              this.setState({ task: e })
            }
          />

          <div className={classes.flexRowSpread}>
            <DatePicker
              style={{width: '100%'}}
              value={this.state.date}
              autoOk
              label="Day"
              openTo="date"
              onChange={date => {
                this.setState({ date, })
              }}
            />
            <TimePicker
              style={{width: '100%'}}
              value={this.state.startTime}
              autoOk
              label="From"
              openTo="date"
              onChange={startTime => {
                let endTime = this.state.endTime;
                if (endTime && endTime < startTime) {
                  let difference = 1;
                  // Keep the difference between the two dates the same if possible
                  if (this.state.startTime) difference = moment(endTime).diff(this.state.startTime, 'hours', true);
                  endTime = moment(startTime).add(difference, 'hour');
                }
                this.setState({ startTime, endTime, })
              }}
            />

            <TimePicker
              style={{width: '100%'}}
              value={this.state.endTime}
              autoOk
              label="To"
              openTo="date"
              onChange={endTime => {
                let startTime = this.state.startTime;
                if (startTime && startTime > endTime) {
                  let difference = -1;
                  // Keep the difference between the two dates the same if possible
                  if (this.state.endTime) difference = moment(startTime).diff(this.state.endTime, 'hours', true);
                  startTime = moment(endTime).add(difference, 'hour');
                }
                this.setState({ startTime, endTime, })
              }}
            />
          </div>

          <TextField
            style={{width: '100%'}}
            label={'Notes'}
            multiline
            rows={5}
            defaultValue={this.state.notes}
            onChange={e => {
              this.setState({
                notes: e.target.value,
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.hideModal()} color="secondary">
            Cancel
          </Button>
          <Button
            disabled={
              this.state.staff.length === 0 ||
              this.state.jobs.length === 0 ||
              this.state.task === null ||
              this.state.startTime === null
            }
            onClick={this.addWfmTime}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>}
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WfmTimeModal)
);