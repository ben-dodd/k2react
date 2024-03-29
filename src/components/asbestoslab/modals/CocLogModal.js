<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import { COC_LOG } from "../../../constants/modal-types";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Add from '@material-ui/icons/Add';
import { hideModal, } from "../../../actions/modal";
import { fetchLogs, clearLog, } from "../../../actions/local";
import {  dateOf, } from '../../../actions/helpers';
import moment from "moment";

const mapStateToProps = state => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    logs: state.local.logs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLogs: (uid, limit) => dispatch(fetchLogs("asbestosLab", "chainOfCustody", uid, limit)),
    clearLog: () => dispatch(clearLog()),
    hideModal: () => dispatch(hideModal()),
  };
};

class CocLogModal extends React.Component {
  state = {
    limit: 20,
  }

  increaseLimit = () => {
    this.props.fetchLogs(this.props.modalProps.uid, this.state.limit + 20);
    this.setState({
      limit: this.state.limit + 20,
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import { COC_LOG } from '../../../constants/modal-types'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Add from '@material-ui/icons/Add'
import { hideModal } from '../../../actions/modal'
import { fetchLogs, clearLog } from '../../../actions/local'
import { dateOf } from '../../../actions/helpers'
import moment from 'moment'

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    logs: state.local.logs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogs: (uid, limit) => dispatch(fetchLogs('asbestosLab', 'chainOfCustody', uid, limit)),
    clearLog: () => dispatch(clearLog()),
    hideModal: () => dispatch(hideModal())
  }
}

class CocLogModal extends React.Component {
  state = {
    limit: 20
  }

  increaseLimit = () => {
    this.props.fetchLogs(this.props.modalProps.uid, this.state.limit + 20)
    this.setState({
      limit: this.state.limit + 20
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    })
  }

  render() {
<<<<<<< HEAD
    const { classes, modalProps, modalType, logs } = this.props;
    return (modalType === COC_LOG &&
      <Dialog
        open={modalType === COC_LOG}
        onClose={this.props.hideModal}
        maxWidth="lg"
        fullWidth={true}
        onEnter={() => this.props.fetchLogs(modalProps.uid, this.state.limit)}
        onExit={this.props.clearLog}
      >
        <DialogTitle>Change Log for {modalProps.jobNumber}</DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Grid container style={{ fontWeight: "bold" }}>
                <Grid item xs={2}>
                  Date
                </Grid>
                <Grid item xs={1}>
                  Category
                </Grid>
                <Grid item xs={7}>
                  Change
                </Grid>
                <Grid item xs={2}>
                  User
                </Grid>
              </Grid>
              {logs &&
                logs.map(log => {
                  return (
                    <Grid
                      key={log.uid}
                      container
                      style={{ marginTop: 12 }}
                    >
                      <Grid item xs={2}>
                        {moment(dateOf(log.date)).format('D MMM YYYY, h:mma')}
                      </Grid>
                      <Grid item xs={1}>
                        {log.type}
                      </Grid>
                      <Grid item xs={7}>
                        {log.log}
                      </Grid>
                      <Grid item xs={2}>
                        {log.userName}
                      </Grid>
                    </Grid>
                  );
                })}
                <Button
                  className={classes.buttonViewMore}
                  onClick={this.increaseLimit}>
                  <Add className={classes.marginRightSmall} /> View More Logs
                </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              this.props.hideModal();
            }}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CocLogModal)
);
=======
    const { classes, modalProps, modalType, logs } = this.props
    return (
      modalType === COC_LOG && (
        <Dialog
          open={modalType === COC_LOG}
          onClose={this.props.hideModal}
          maxWidth='lg'
          fullWidth={true}
          onEnter={() => this.props.fetchLogs(modalProps.uid, this.state.limit)}
          onExit={this.props.clearLog}
        >
          <DialogTitle>Change Log for {modalProps.jobNumber}</DialogTitle>
          <DialogContent>
            <Grid container direction='column'>
              <Grid item>
                <Grid container style={{ fontWeight: 'bold' }}>
                  <Grid item xs={2}>
                    Date
                  </Grid>
                  <Grid item xs={1}>
                    Category
                  </Grid>
                  <Grid item xs={7}>
                    Change
                  </Grid>
                  <Grid item xs={2}>
                    User
                  </Grid>
                </Grid>
                {logs &&
                  logs.map((log) => {
                    return (
                      <Grid key={log.uid} container style={{ marginTop: 12 }}>
                        <Grid item xs={2}>
                          {moment(dateOf(log.date)).format('D MMM YYYY, h:mma')}
                        </Grid>
                        <Grid item xs={1}>
                          {log.type}
                        </Grid>
                        <Grid item xs={7}>
                          {log.log}
                        </Grid>
                        <Grid item xs={2}>
                          {log.userName}
                        </Grid>
                      </Grid>
                    )
                  })}
                <Button className={classes.buttonViewMore} onClick={this.increaseLimit}>
                  <Add className={classes.marginRightSmall} /> View More Logs
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.props.hideModal()
              }}
              color='primary'
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CocLogModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
