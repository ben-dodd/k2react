import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import store from "../../../store";
import { COC_RECEIVE } from "../../../constants/modal-types";
import { asbestosSamplesRef, } from "../../../config/firebase";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ReceiveIcon from "@material-ui/icons/Inbox";
import { hideModal, handleModalChange } from "../../../actions/modal";
import { addLog } from "../../../actions/local";
import { writeDescription, receiveSample, } from "../../../actions/asbestosLab";
import _ from "lodash";
import moment from 'moment';

const mapStateToProps = state => {
  return {
    me: state.local.me,
    sessionID: state.asbestosLab.sessionID,
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    samples: state.asbestosLab.samples,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
    handleModalChange: _.debounce(
      target => dispatch(handleModalChange(target)),
      300
    )
  };
};

class AsbestosReceiveSamplesModal extends React.Component {
  state = {
    samples: {}
  };

  handleEnter = () => {
    let sampleMap = {};
    Object.values(this.props.samples[this.props.modalProps.job.uid]).filter(sample => sample.deleted === false).forEach(sample => {
      sampleMap[sample.sampleNumber] = {
        uid: sample.uid,
        number: sample.sampleNumber,
        description: writeDescription(sample),
        receivedOriginally: sample.receivedByLab,
        receivedNow: sample.receivedByLab,
      };
    });

    this.setState({
      samples: sampleMap,
    });
  };

  handleReceiveClick = sample => {
    let receivedDate = null;
    let receivedUser = null;
    let receivedNow = false;
    if (!sample.receivedNow) {
      receivedUser = {
        name: this.props.me.name,
        id: this.props.me.uid,
      };
      receivedDate = new Date();
      receivedNow = true;
    }
    this.setState({
      samples: {
        ...this.state.samples,
        [sample.number]: {
          ...this.state.samples[sample.number],
          receivedNow,
          receivedUser,
          receivedDate,
        }
      }
    })
  };

  handleReceiveAll = () => {
    Object.values(this.state.samples).forEach(sample => {
      if (!sample.receivedNow) this.handleReceiveClick(sample);
    });
  }

  submit = () => {
    let logDesc = '';
    let receivedArray = [];
    let unreceivedArray = [];
    let res = true;
    let close = true;
    Object.values(this.state.samples).forEach(sample => {
      if (sample.receivedOriginally !== sample.receivedNow) {
        res = receiveSample(this.props.samples[this.props.modalProps.job.uid][sample.number], this.props.modalProps.job, this.props.samples, this.props.sessionID, this.props.me, sample.receivedDate);
        if (!res) {
          this.setState({
            samples: {
              ...this.state.samples,
              [sample.number]: {
                ...this.state.samples[sample.number],
                receivedNow: sample.receivedOriginally,
                highlighted: true,
              },
            },
          })
          close = false;
        }
      }
    });
    return close;
  }

  render() {
    const { classes, modalProps, modalType, } = this.props;
    return (
      modalType === COC_RECEIVE ? <Dialog
        open={modalType === COC_RECEIVE}
        onClose={this.props.hideModal}
        maxWidth="sm"
        fullWidth={true}
        onEnter={this.handleEnter}
      >
        <DialogTitle>{modalProps.title ? modalProps.title : 'Receive Samples'}</DialogTitle>
        <DialogContent>
          <Button
            className={classes.buttonIconText}
            onClick={this.handleReceiveAll}
          >
            <ReceiveIcon className={classes.iconRegular} /> Receive All Samples
          </Button>
          {Object.values(this.state.samples).map(sample => (
            <div key={sample.number}>
              <div className={sample.highlighted ? classes.flexRowHoverHighlighted : classes.flexRowHover}>
                <div className={classes.flexRowLeftAlignEllipsis}>
                  <div className={classes.circleShaded}>
                    {sample.number}
                  </div>
                  <div>{sample.description}</div>
                </div>
                <div className={classes.flexRowRightAlign}>
                  <IconButton onClick={() => this.handleReceiveClick(sample)}>
                    <ReceiveIcon className={sample.receivedNow ? classes.iconRegularGreen : classes.iconRegular}/>
                  </IconButton>
                </div>
              </div>
            </div>
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.hideModal()} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              let close = this.submit();
              if (close) this.props.hideModal();
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog> : null
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AsbestosReceiveSamplesModal)
);
