<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
// import store from '../../store';
import { ASBESTOS_CLEARANCE } from "../../../constants/modal-types";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import SuggestionField from "../../../widgets/SuggestionField";
import Select from "react-select";
import { DatePicker } from "@material-ui/pickers";

import { resetModal } from "../../../actions/modal";
import { dateOf, personnelConvert } from "../../../actions/helpers";

import "../../../config/geosuggest.css";
=======
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
// import store from '../../store';
import { ASBESTOS_CLEARANCE } from '../../../constants/modal-types'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import SuggestionField from '../../../widgets/SuggestionField'
import Select from 'react-select'
import { DatePicker } from '@material-ui/pickers'

import { resetModal } from '../../../actions/modal'
import { dateOf, personnelConvert } from '../../../actions/helpers'

import '../../../config/geosuggest.css'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    doc: state.modal.modalProps.doc,
    staff: state.local.staff,
    userRefName: state.local.userRefName,
<<<<<<< HEAD
    siteJobs: state.jobs.siteJobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetModal: () => dispatch(resetModal()),
  };
};

class ClearanceModal extends React.Component {
  state = {
    date: null,
  };

  loadProps = () => {
    this.setState({
      ...this.props.doc,
    });
  };

  render() {
    const { modalProps, doc, classes } = this.props;
    const names = [{ name: "3rd Party", uid: "3rd Party" }].concat(
      Object.values(this.props.staff).sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );
=======
    siteJobs: state.jobs.siteJobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetModal: () => dispatch(resetModal())
  }
}

class ClearanceModal extends React.Component {
  state = {
    date: null
  }

  loadProps = () => {
    this.setState({
      ...this.props.doc
    })
  }

  render() {
    const { modalProps, doc, classes } = this.props
    const names = [{ name: '3rd Party', uid: '3rd Party' }].concat(
      Object.values(this.props.staff).sort((a, b) => a.name.localeCompare(b.name))
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    return (
      <Dialog
        open={this.props.modalType === ASBESTOS_CLEARANCE}
        onEnter={this.loadProps}
        onClose={this.props.resetModal}
        fullWidth={true}
<<<<<<< HEAD
        maxWidth={"xs"}
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New Asbestos Removal"}
        </DialogTitle>
=======
        maxWidth={'xs'}
      >
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New Asbestos Removal'}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent className={classes.minHeightDialog60}>
          <InputLabel>Asbestos Removalist</InputLabel>
          <SuggestionField
            that={this}
<<<<<<< HEAD
            suggestions="asbestosRemovalists"
            defaultValue={doc.asbestosRemovalist || ""}
            onModify={(value) => {
              let asbestosRemovalistLicence =
                this.state.asbestosRemovalistLicence || null;
              if (
                this.props.asbestosRemovalists &&
                this.props.asbestosRemovalists.filter((e) => e.label === value)
                  .length > 0
              )
                asbestosRemovalistLicence = this.props.asbestosRemovalists.filter(
                  (e) => e.label === value
                )[0].value;
              this.setState({
                asbestosRemovalist: value,
                asbestosRemovalistLicence,
              });
            }}
          />
          <TextField
            label="Asbestos Removalist Licence Number"
            value={this.state.asbestosRemovalistLicence || ""}
            onChange={(e) =>
              this.setState({ asbestosRemovalistLicence: e.target.value })
            }
=======
            suggestions='asbestosRemovalists'
            defaultValue={doc.asbestosRemovalist || ''}
            onModify={(value) => {
              let asbestosRemovalistLicence = this.state.asbestosRemovalistLicence || null
              if (this.props.asbestosRemovalists && this.props.asbestosRemovalists.filter((e) => e.label === value).length > 0)
                asbestosRemovalistLicence = this.props.asbestosRemovalists.filter((e) => e.label === value)[0].value
              this.setState({
                asbestosRemovalist: value,
                asbestosRemovalistLicence
              })
            }}
          />
          <TextField
            label='Asbestos Removalist Licence Number'
            value={this.state.asbestosRemovalistLicence || ''}
            onChange={(e) => this.setState({ asbestosRemovalistLicence: e.target.value })}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          />
          <div>
            <DatePicker
              className={classes.inputRoot}
<<<<<<< HEAD
              value={
                this.state.removalDate ? dateOf(this.state.removalDate) : null
              }
              autoOk
              disableToolbar
              variant="inline"
              format="ddd, D MMMM YYYY"
              label={"Removal Completion Date"}
              views={["year", "month", "date"]}
              openTo="year"
=======
              value={this.state.removalDate ? dateOf(this.state.removalDate) : null}
              autoOk
              disableToolbar
              variant='inline'
              format='ddd, D MMMM YYYY'
              label={'Removal Completion Date'}
              views={['year', 'month', 'date']}
              openTo='year'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              onChange={(date) => this.setState({ removalDate: dateOf(date) })}
            />
          </div>
          <TextField
            className={classes.inputRoot}
<<<<<<< HEAD
            label="Description of Removal"
            multiline
            rows={3}
            defaultValue={this.state.description || ""}
=======
            label='Description of Removal'
            multiline
            rows={3}
            defaultValue={this.state.description || ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <div>
            <DatePicker
              className={classes.inputRoot}
<<<<<<< HEAD
              value={
                this.state.clearanceDate
                  ? dateOf(this.state.clearanceDate)
                  : null
              }
              autoOk
              disableToolbar
              variant="inline"
              format="ddd, D MMMM YYYY"
              label={"Clearance Inspection Date"}
              views={["year", "month", "date"]}
              openTo="year"
              onChange={(date) =>
                this.setState({ clearanceDate: dateOf(date) })
              }
            />
          </div>
          <InputLabel className={classes.marginTopSmall}>
            Asbestos Assessor
          </InputLabel>
=======
              value={this.state.clearanceDate ? dateOf(this.state.clearanceDate) : null}
              autoOk
              disableToolbar
              variant='inline'
              format='ddd, D MMMM YYYY'
              label={'Clearance Inspection Date'}
              views={['year', 'month', 'date']}
              openTo='year'
              onChange={(date) => this.setState({ clearanceDate: dateOf(date) })}
            />
          </div>
          <InputLabel className={classes.marginTopSmall}>Asbestos Assessor</InputLabel>
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
                className={classes.inputRoot}
                label="Assessor Number"
                defaultValue={this.state.asbestosAssessorLicence || ""}
                onChange={(e) =>
                  this.setState({ asbestosAssessorLicence: e.target.value })
                }
              />
            )}
          {this.state.personnel &&
          this.state.personnel[0].uid === "3rd Party" ? (
            <TextField
              className={classes.inputRoot}
              label="Reference/Job Number"
              defaultValue={this.state.referenceNumber || null}
              onChange={(e) =>
                this.setState({ referenceNumber: e.target.value })
              }
=======
              label: e.name
            }))}
            onChange={(e) => this.setState({ personnel: personnelConvert(e) })}
          />
          {this.state.personnel && this.state.personnel[0].uid === '3rd Party' && (
            <TextField
              className={classes.inputRoot}
              label='Assessor Number'
              defaultValue={this.state.asbestosAssessorLicence || ''}
              onChange={(e) => this.setState({ asbestosAssessorLicence: e.target.value })}
            />
          )}
          {this.state.personnel && this.state.personnel[0].uid === '3rd Party' ? (
            <TextField
              className={classes.inputRoot}
              label='Reference/Job Number'
              defaultValue={this.state.referenceNumber || null}
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
          <div>
            <DatePicker
              className={classes.inputRoot}
              value={this.state.issueDate ? dateOf(this.state.issueDate) : null}
              autoOk
              disableToolbar
<<<<<<< HEAD
              variant="inline"
              format="ddd, D MMMM YYYY"
              label={"Certificate Issue Date"}
              views={["year", "month", "date"]}
              openTo="year"
=======
              variant='inline'
              format='ddd, D MMMM YYYY'
              label={'Certificate Issue Date'}
              views={['year', 'month', 'date']}
              openTo='year'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              onChange={(date) => this.setState({ issueDate: dateOf(date) })}
            />
          </div>
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
  connect(mapStateToProps, mapDispatchToProps)(ClearanceModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ClearanceModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
