<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
// import store from '../../store';
import { SITE_VISIT } from "../../../constants/modal-types";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { DatePicker } from "@material-ui/pickers";
import Select from "react-select";
import { hideModal, resetModal } from "../../../actions/modal";
import { dateOf, personnelConvert } from "../../../actions/helpers";

import "../../../config/geosuggest.css";
=======
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
// import store from '../../store';
import { SITE_VISIT } from '../../../constants/modal-types'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import { DatePicker } from '@material-ui/pickers'
import Select from 'react-select'
import { hideModal, resetModal } from '../../../actions/modal'
import { dateOf, personnelConvert } from '../../../actions/helpers'

import '../../../config/geosuggest.css'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    staff: state.local.staff,
    doc: state.modal.modalProps.doc,
    userRefName: state.local.userRefName,
    siteJobs: state.jobs.siteJobs,
<<<<<<< HEAD
    siteVisitTypeAsbestos: state.const.siteVisitTypeAsbestos,
  };
};
=======
    siteVisitTypeAsbestos: state.const.siteVisitTypeAsbestos
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    resetModal: () => dispatch(resetModal()),
<<<<<<< HEAD
    hideModal: () => dispatch(hideModal()),
  };
};

class SiteVisitModal extends React.Component {
  state = {
    date: null,
  };

  loadProps = () => {
    this.setState({
      ...this.props.doc,
    });
  };

  render() {
    const { modalProps, classes } = this.props;
    const names = [{ name: "3rd Party", uid: "3rd Party" }].concat(
      Object.values(this.props.staff).sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );
    console.log(this.state);
=======
    hideModal: () => dispatch(hideModal())
  }
}

class SiteVisitModal extends React.Component {
  state = {
    date: null
  }

  loadProps = () => {
    this.setState({
      ...this.props.doc
    })
  }

  render() {
    const { modalProps, classes } = this.props
    const names = [{ name: '3rd Party', uid: '3rd Party' }].concat(
      Object.values(this.props.staff).sort((a, b) => a.name.localeCompare(b.name))
    )
    console.log(this.state)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    return (
      <Dialog
        open={this.props.modalType === SITE_VISIT}
        onEnter={this.loadProps}
        onClose={this.props.resetModal}
        fullWidth={true}
<<<<<<< HEAD
        maxWidth={"xs"}
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New Site Visit"}
        </DialogTitle>
=======
        maxWidth={'xs'}
      >
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New Site Visit'}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent className={classes.minHeightDialog60}>
          <DatePicker
            className={classes.inputRoot}
            value={this.state.date ? dateOf(this.state.date) : null}
            autoOk
<<<<<<< HEAD
            format="ddd, D MMMM YYYY"
            label={"Date"}
            disableToolbar
            variant="inline"
            openTo="year"
            views={["year", "month", "date"]}
            onChange={(date) => this.setState({ date: dateOf(date) })}
          />
          <InputLabel className={classes.marginTopSmall}>
            Site Personnel
          </InputLabel>
=======
            format='ddd, D MMMM YYYY'
            label={'Date'}
            disableToolbar
            variant='inline'
            openTo='year'
            views={['year', 'month', 'date']}
            onChange={(date) => this.setState({ date: dateOf(date) })}
          />
          <InputLabel className={classes.marginTopSmall}>Site Personnel</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Select
            isMulti
            className={classes.selectTight}
            value={
              this.state.personnel
                ? this.state.personnel.map((e) => ({
                    value: e.uid,
<<<<<<< HEAD
                    label: e.name,
=======
                    label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }))
                : null
            }
            options={names.map((e) => ({
              value: e.uid,
<<<<<<< HEAD
              label: e.name,
            }))}
            onChange={(e) => this.setState({ personnel: personnelConvert(e) })}
          />
          {this.state.personnel &&
            this.state.personnel[0].uid === "3rd Party" && (
              <TextField
                label="3rd Party Company Name"
                defaultValue={
                  this.state.companyName ? this.state.companyName : null
                }
                onChange={(e) => this.setState({ companyName: e.target.value })}
              />
            )}
=======
              label: e.name
            }))}
            onChange={(e) => this.setState({ personnel: personnelConvert(e) })}
          />
          {this.state.personnel && this.state.personnel[0].uid === '3rd Party' && (
            <TextField
              label='3rd Party Company Name'
              defaultValue={this.state.companyName ? this.state.companyName : null}
              onChange={(e) => this.setState({ companyName: e.target.value })}
            />
          )}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <InputLabel>Site Visit Type</InputLabel>
          <Select
            className={classes.selectTight}
            value={
              this.state.type
                ? {
                    value: this.state.type,
<<<<<<< HEAD
                    label: this.props.siteVisitTypeAsbestos.filter(
                      (e) => e.value === this.state.type
                    )[0].label,
=======
                    label: this.props.siteVisitTypeAsbestos.filter((e) => e.value === this.state.type)[0].label
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }
                : null
            }
            options={this.props.siteVisitTypeAsbestos}
            onChange={(e) => this.setState({ type: e.value })}
          />
<<<<<<< HEAD
          {this.state.personnel &&
          this.state.personnel[0].uid === "3rd Party" ? (
            <TextField
              className={classes.inputRoot}
              label="Reference/Job Number"
              defaultValue={
                this.state.referenceNumber ? this.state.referenceNumber : null
              }
              onChange={(e) =>
                this.setState({ referenceNumber: e.target.value })
              }
=======
          {this.state.personnel && this.state.personnel[0].uid === '3rd Party' ? (
            <TextField
              className={classes.inputRoot}
              label='Reference/Job Number'
              defaultValue={this.state.referenceNumber ? this.state.referenceNumber : null}
              onChange={(e) => this.setState({ referenceNumber: e.target.value })}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            />
          ) : (
            <div>
              <InputLabel>Job Number</InputLabel>
              <Select
<<<<<<< HEAD
                placeholder={"Add Job Numbers from Home Screen"}
=======
                placeholder={'Add Job Numbers from Home Screen'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                className={classes.selectTight}
                value={
                  this.state.referenceNumber
                    ? {
                        value: this.state.referenceNumber,
<<<<<<< HEAD
                        label: this.state.referenceNumber,
=======
                        label: this.state.referenceNumber
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }
                    : null
                }
                options={
                  this.props.siteJobs &&
                  this.props.siteJobs[modalProps.siteUid] &&
<<<<<<< HEAD
                  Object.values(this.props.siteJobs[modalProps.siteUid]).map(
                    (e) => ({
                      value: e.jobNumber,
                      label: `${e.jobNumber}: ${e.jobDescription}`,
                    })
                  )
=======
                  Object.values(this.props.siteJobs[modalProps.siteUid]).map((e) => ({
                    value: e.jobNumber,
                    label: `${e.jobNumber}: ${e.jobDescription}`
                  }))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }
                onChange={(e) => this.setState({ referenceNumber: e.value })}
              />
            </div>
          )}
          <TextField
<<<<<<< HEAD
            label="Notes"
=======
            label='Notes'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            className={classes.inputRoot}
            defaultValue={this.state.notes ? this.state.notes : null}
            multiline
            rows={5}
            onChange={(e) => this.setState({ notes: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
<<<<<<< HEAD
          <Button onClick={this.props.resetModal} color="secondary">
=======
          <Button onClick={this.props.resetModal} color='secondary'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            Cancel
          </Button>
          <Button
            onClick={() => {
<<<<<<< HEAD
              modalProps.callBack(this.state);
              this.props.resetModal();
            }}
            color="primary"
=======
              modalProps.callBack(this.state)
              this.props.resetModal()
            }}
            color='primary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SiteVisitModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SiteVisitModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
