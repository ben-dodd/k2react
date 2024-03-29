<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
// import { Document, Page } from 'react-pdf';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";
import { DOCUMENT } from "../../constants/modal-types";

import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

import { auth, docsRef, usersRef } from "../../config/firebase";
import { showModal } from "../../actions/modal";
import { dateOf } from "../../actions/helpers";
import DocumentModal from "./modals/DocumentModal";
import moment from "moment";
=======
import React from 'react'
import { connect } from 'react-redux'
// import { Document, Page } from 'react-pdf';
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'
import { DOCUMENT } from '../../constants/modal-types'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'

import { auth, docsRef, usersRef } from '../../config/firebase'
import { showModal } from '../../actions/modal'
import { dateOf } from '../../actions/helpers'
import DocumentModal from './modals/DocumentModal'
import moment from 'moment'

const mapStateToProps = (state) => {
  return {
    me: state.local.me
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: modal => dispatch(showModal(modal))
  };
};

class DocumentViewer extends React.Component {
  constructor(props) {
    super(props);
=======
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (modal) => dispatch(showModal(modal))
  }
}

class DocumentViewer extends React.Component {
  constructor(props) {
    super(props)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    this.state = {
      doc: {},
      read: null,
      docID: null,
      isLoading: true,
      isReading: false,
      docAuth: false,
      activeStep: 0
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  UNSAFE_componentWillMount() {
    docsRef
      .doc(this.props.match.params.uid)
      .get()
<<<<<<< HEAD
      .then(doc => {
        if (
          this.props.me.auth[doc.data().auth] ||
          doc.data().auth === undefined
        ) {
          usersRef
            .doc(auth.currentUser.uid)
            .collection("readinglog")
            .doc(doc.id)
            .get()
            .then(log => {
=======
      .then((doc) => {
        if (this.props.me.auth[doc.data().auth] || doc.data().auth === undefined) {
          usersRef
            .doc(auth.currentUser.uid)
            .collection('readinglog')
            .doc(doc.id)
            .get()
            .then((log) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              this.setState({
                docID: doc.id,
                doc: doc.data(),
                isLoading: false,
                docAuth: true,
                read: log.exists && log.data().date.toDate()
<<<<<<< HEAD
              });
            });
        }
      });
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step
    });
  };

  openLink = url => {
    window.open(url, "_blank");
  };
=======
              })
            })
        }
      })
  }

  handleStep = (step) => () => {
    this.setState({
      activeStep: step
    })
  }

  openLink = (url) => {
    window.open(url, '_blank')
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  markAsRead = (uid) => {
    this.setState({
      isReading: true
<<<<<<< HEAD
    });
    usersRef
      .doc(auth.currentUser.uid)
      .collection("readinglog")
      .doc(uid)
      .get()
      .then(doc => {
=======
    })
    usersRef
      .doc(auth.currentUser.uid)
      .collection('readinglog')
      .doc(uid)
      .get()
      .then((doc) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        if (doc.exists) {
          // document exists, remove thereby marking as unread
          usersRef
            .doc(auth.currentUser.uid)
<<<<<<< HEAD
            .collection("readinglog")
=======
            .collection('readinglog')
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            .doc(uid)
            .delete()
            .then(() => {
              this.setState({
                read: null,
                isReading: false
<<<<<<< HEAD
              });
            });
        } else {
          var readDate = new Date();
          usersRef
            .doc(auth.currentUser.uid)
            .collection("readinglog")
=======
              })
            })
        } else {
          var readDate = new Date()
          usersRef
            .doc(auth.currentUser.uid)
            .collection('readinglog')
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            .doc(uid)
            .set({
              date: readDate
            })
            .then(() => {
              this.setState({
                read: readDate,
                isReading: false
<<<<<<< HEAD
              });
            });
        }
      });
  };

  getLinkName = docType => {
    switch (docType) {
      case "PDF":
        return "Open PDF";
      case "Image":
        return "Open Image";
      case "File":
        return "Download File";
      default:
        return "Open Link";
    }
  };

  render() {
    const { classes } = this.props;
    const { doc, activeStep } = this.state;
    const editor = this.props.me.auth["Document Editor"];
=======
              })
            })
        }
      })
  }

  getLinkName = (docType) => {
    switch (docType) {
      case 'PDF':
        return 'Open PDF'
      case 'Image':
        return 'Open Image'
      case 'File':
        return 'Download File'
      default:
        return 'Open Link'
    }
  }

  render() {
    const { classes } = this.props
    const { doc, activeStep } = this.state
    const editor = this.props.me.auth['Document Editor']
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return (
      <div style={{ marginTop: 80 }}>
        <DocumentModal />
        <Card className={classes.card}>
          <CardContent>
            {this.state.isLoading ? (
              <div>
                <CircularProgress />
              </div>
            ) : (
              <div>
                <Typography className={classes.subHeading}>{doc.title}</Typography>
                <Typography className={classes.note}>
                  <i>{doc.subtitle}</i>
                </Typography>
                <Typography className={classes.note}>{doc.code}</Typography>
                <Typography className={classes.note}>{doc.author}</Typography>
<<<<<<< HEAD
                <Typography className={classes.note}>
                  {doc.publisher}
                </Typography>
=======
                <Typography className={classes.note}>{doc.publisher}</Typography>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <Typography className={classes.note}>
                  <i>{doc.desc}</i>
                </Typography>
                {doc.source && (
                  <Typography className={classes.note}>
                    <b>Source: </b>
                    {doc.source}
                  </Typography>
                )}
                {doc.references && (
                  <Typography className={classes.note}>
                    <b>References: </b>
                    {doc.references}
                  </Typography>
                )}
                <Typography className={classes.note} style={{ marginTop: 12 }}>
                  <b>Date published: </b>
<<<<<<< HEAD
                  {doc.date ? moment(dateOf(doc.date)).format('D MMMM YYYY')
                   : <span>Unknown</span>}
                </Typography>
                <Typography className={classes.note}>
                  <b>Last updated: </b>
                  {doc.updateDate ? moment(dateOf(doc.updateDate)).format('D MMMM YYYY')
                   : <span>Unknown</span>}
                </Typography>
                <Typography className={classes.note}>
                  <b>Date read: </b>
                  {this.state.read ? moment(doc.date instanceof Date ? doc.date : this.state.read).format('D MMMM YYYY')
                   : <span>N/A</span>}
                </Typography>
                <Button
                  variant="outlined"
                  color={this.state.read ? "secondary" : "primary"}
=======
                  {doc.date ? moment(dateOf(doc.date)).format('D MMMM YYYY') : <span>Unknown</span>}
                </Typography>
                <Typography className={classes.note}>
                  <b>Last updated: </b>
                  {doc.updateDate ? moment(dateOf(doc.updateDate)).format('D MMMM YYYY') : <span>Unknown</span>}
                </Typography>
                <Typography className={classes.note}>
                  <b>Date read: </b>
                  {this.state.read ? moment(doc.date instanceof Date ? doc.date : this.state.read).format('D MMMM YYYY') : <span>N/A</span>}
                </Typography>
                <Button
                  variant='outlined'
                  color={this.state.read ? 'secondary' : 'primary'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  onClick={() => this.markAsRead(this.state.docID)}
                  style={{ marginTop: 16, height: 40, width: 160 }}
                >
                  {this.state.isReading ? (
<<<<<<< HEAD
                    <CircularProgress
                      size={24}
                      color={this.state.read ? "secondary" : "primary"}
                    />
                  ) : (
                    [this.state.read ? "Mark as Unread" : "Mark as Read"]
=======
                    <CircularProgress size={24} color={this.state.read ? 'secondary' : 'primary'} />
                  ) : (
                    [this.state.read ? 'Mark as Unread' : 'Mark as Read']
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  )}
                </Button>
                {doc.link && (
                  <Button
<<<<<<< HEAD
                    variant="outlined"
                    color={"primary"}
=======
                    variant='outlined'
                    color={'primary'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    onClick={() => this.openLink(doc.link)}
                    style={{
                      marginTop: 16,
                      marginLeft: 16,
                      height: 40,
                      width: 160
                    }}
                  >
                    {this.getLinkName(doc.docType)}
                  </Button>
                )}
                {editor && (
                  <Button
<<<<<<< HEAD
                    variant="outlined"
                    color={"primary"}
=======
                    variant='outlined'
                    color={'primary'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    style={{
                      marginTop: 16,
                      marginLeft: 16,
                      height: 40,
                      width: 160
                    }}
                    onClick={() =>
                      this.props.showModal({
                        modalType: DOCUMENT,
<<<<<<< HEAD
                        modalProps: { title: "Edit Document", doc: doc }
=======
                        modalProps: { title: 'Edit Document', doc: doc }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      })
                    }
                  >
                    Edit Document
                  </Button>
                )}
                <div
                  style={{
<<<<<<< HEAD
                    display: "flex",
                    justifyContent: "center",
                    width: "100%"
                  }}
                >
                  {doc.content && (
                    <div
                      style={{ color: "#444" }}
                      dangerouslySetInnerHTML={{ __html: doc.content }}
                    />
                  )}
                  {(doc.docType === "PDF" || doc.docType === "Image") && (
                    <div
                      style={{ color: "#444", width: "90%" }}
                      dangerouslySetInnerHTML={{
                        __html: `<p></p><iframe width="90%" height="1132" src="${
                          doc.fileUrl
                        }" frameBorder="0"></iframe><p></p>`
=======
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                  }}
                >
                  {doc.content && <div style={{ color: '#444' }} dangerouslySetInnerHTML={{ __html: doc.content }} />}
                  {(doc.docType === 'PDF' || doc.docType === 'Image') && (
                    <div
                      style={{ color: '#444', width: '90%' }}
                      dangerouslySetInnerHTML={{
                        __html: `<p></p><iframe width="90%" height="1132" src="${doc.fileUrl}" frameBorder="0"></iframe><p></p>`
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />
                  )}
                  {doc.steps && (
                    <div>
                      <Stepper nonLinear activeStep={activeStep}>
                        {Object.keys(doc.steps).map((step, index) => {
                          return (
                            <Step key={step}>
<<<<<<< HEAD
                              <StepButton
                                onClick={this.handleStep(parseInt(step))}
                              >
                                {doc.steps[step].title}
                              </StepButton>
                            </Step>
                          );
=======
                              <StepButton onClick={this.handleStep(parseInt(step))}>{doc.steps[step].title}</StepButton>
                            </Step>
                          )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        })}
                      </Stepper>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: doc.steps[this.state.activeStep].content
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }
}

<<<<<<< HEAD
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DocumentViewer)
);
=======
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DocumentViewer))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
