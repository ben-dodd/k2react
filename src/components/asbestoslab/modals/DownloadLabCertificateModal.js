<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import { DOWNLOAD_LAB_CERTIFICATE } from "../../../constants/modal-types";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { hideModal } from "../../../actions/modal";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import { DOWNLOAD_LAB_CERTIFICATE } from '../../../constants/modal-types'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import { hideModal } from '../../../actions/modal'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
<<<<<<< HEAD
    modalProps: state.modal.modalProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
  };
};

class DownloadLabCertificateModal extends React.Component {
  state = {
    fileType: this.props.modalProps.defaultFileType
      ? this.props.modalProps.defaultFileType
      : "doc",
    certificateType: this.props.modalProps.defaultCertificateType
      ? this.props.modalProps.defaultCertificateType
      : "bulk",
    template: "single",
  };

  render() {
    const { classes, modalProps, modalType } = this.props;
    return (
      modalType === DOWNLOAD_LAB_CERTIFICATE && (
        <Dialog
          open={modalType === DOWNLOAD_LAB_CERTIFICATE}
          onClose={this.props.hideModal}
        >
          <DialogTitle>Download Lab Certificate</DialogTitle>
          <DialogContent>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Certificate</FormLabel>
              <RadioGroup
                aria-label="Certificate"
                name="certificate"
                className={classes.group}
                value={this.state.certificateType}
                onChange={(event) => {
                  let template = this.state.template;
                  if (event.target.value === "wa") template = "single";
                  this.setState({
                    certificateType: event.target.value,
                    template,
                  });
                }}
              >
                <FormControlLabel
                  value="bulk"
                  control={<Radio />}
                  label="Bulk ID"
                />
                <FormControlLabel
                  value="wa"
                  control={<Radio disabled={!modalProps.report.waAnalysis} />}
                  label="WA Analysis"
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Template</FormLabel>
              <RadioGroup
                aria-label="Template"
                name="template"
=======
    modalProps: state.modal.modalProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal())
  }
}

class DownloadLabCertificateModal extends React.Component {
  state = {
    fileType: this.props.modalProps.defaultFileType ? this.props.modalProps.defaultFileType : 'doc',
    certificateType: this.props.modalProps.defaultCertificateType ? this.props.modalProps.defaultCertificateType : 'bulk',
    template: 'single'
  }

  render() {
    const { classes, modalProps, modalType } = this.props
    return (
      modalType === DOWNLOAD_LAB_CERTIFICATE && (
        <Dialog open={modalType === DOWNLOAD_LAB_CERTIFICATE} onClose={this.props.hideModal}>
          <DialogTitle>Download Lab Certificate</DialogTitle>
          <DialogContent>
            <FormControl component='fieldset' className={classes.formControl}>
              <FormLabel component='legend'>Certificate</FormLabel>
              <RadioGroup
                aria-label='Certificate'
                name='certificate'
                className={classes.group}
                value={this.state.certificateType}
                onChange={(event) => {
                  let template = this.state.template
                  if (event.target.value === 'wa') template = 'single'
                  this.setState({
                    certificateType: event.target.value,
                    template
                  })
                }}
              >
                <FormControlLabel value='bulk' control={<Radio />} label='Bulk ID' />
                <FormControlLabel value='wa' control={<Radio disabled={!modalProps.report.waAnalysis} />} label='WA Analysis' />
              </RadioGroup>
            </FormControl>
            <FormControl component='fieldset' className={classes.formControl}>
              <FormLabel component='legend'>Template</FormLabel>
              <RadioGroup
                aria-label='Template'
                name='template'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                className={classes.group}
                value={this.state.template}
                onChange={(event) =>
                  this.setState({
<<<<<<< HEAD
                    template: event.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single Page Appendable"
                />
                <FormControlLabel
                  value="cover"
                  control={
                    <Radio disabled={this.state.certificateType !== "bulk"} />
                  }
                  label="Lab Report with Cover Letter"
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">File Type</FormLabel>
              <RadioGroup
                aria-label="File Type"
                name="filetype"
                className={classes.group}
                // value={this.state.value}
                value={"doc"}
                onChange={(event) =>
                  this.setState({
                    fileType: event.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="pdf"
                  control={<Radio disabled />}
                  label="PDF"
                />
                <FormControlLabel
                  value="doc"
                  control={<Radio disabled />}
                  label="Word Document"
                />
=======
                    template: event.target.value
                  })
                }
              >
                <FormControlLabel value='single' control={<Radio />} label='Single Page Appendable' />
                <FormControlLabel
                  value='cover'
                  control={<Radio disabled={this.state.certificateType !== 'bulk'} />}
                  label='Lab Report with Cover Letter'
                />
              </RadioGroup>
            </FormControl>
            <FormControl component='fieldset' className={classes.formControl}>
              <FormLabel component='legend'>File Type</FormLabel>
              <RadioGroup
                aria-label='File Type'
                name='filetype'
                className={classes.group}
                // value={this.state.value}
                value={'doc'}
                onChange={(event) =>
                  this.setState({
                    fileType: event.target.value
                  })
                }
              >
                <FormControlLabel value='pdf' control={<Radio disabled />} label='PDF' />
                <FormControlLabel value='doc' control={<Radio disabled />} label='Word Document' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
<<<<<<< HEAD
            <Button onClick={() => this.props.hideModal()} color="secondary">
              Cancel
            </Button>
            <form
              method="post"
              target="_blank"
              action={
                "https://api.k2.co.nz/v1/doc/scripts/asbestos/issue/" +
                this.state.certificateType +
                "/doc.php?template=" +
                this.state.template +
                "&filetype=" +
                this.state.fileType
              }
            >
              <input
                type="hidden"
                name="data"
                value={JSON.stringify(modalProps.report)}
              />
              <Button type="submit">Download</Button>
=======
            <Button onClick={() => this.props.hideModal()} color='secondary'>
              Cancel
            </Button>
            <form
              method='post'
              target='_blank'
              action={
                'https://api.k2.co.nz/v1/doc/scripts/asbestos/issue/' +
                this.state.certificateType +
                '/doc.php?template=' +
                this.state.template +
                '&filetype=' +
                this.state.fileType
              }
            >
              <input type='hidden' name='data' value={JSON.stringify(modalProps.report)} />
              <Button type='submit'>Download</Button>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </form>
          </DialogActions>
        </Dialog>
      )
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DownloadLabCertificateModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DownloadLabCertificateModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
