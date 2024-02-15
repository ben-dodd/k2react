<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";

import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import Edit from "@material-ui/icons/Edit";
import Image from "@material-ui/icons/Image";
import Delete from "@material-ui/icons/Delete";

import AttrModal from "../modals/AttrModal";
import { USER_ATTR } from "../../../constants/modal-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { showModal } from "../../../actions/modal";
import { getUserAttrs } from "../../../actions/local";
import Popup from "reactjs-popup";
import { usersRef, storage } from "../../../config/firebase";
import moment from "moment";

const mapDispatchToProps = dispatch => {
  return {
    showModal: modal => dispatch(showModal(modal)),
    getUserAttrs: userPath => dispatch(getUserAttrs(userPath))
  };
};

const mapStateToProps = state => {
  return {
    qualificationtypes: state.const.qualificationtypes
  };
};

function deleteAttr(uid, user, file) {
  //console.log("UID: " + uid);
  //console.log("User: " + user);
  //console.log("File: " + file);
  if (file) storage.ref(file).delete();
  usersRef
    .doc(user)
    .collection("attr")
    .doc(uid)
    .delete()
    .then(() => {});
}

function AttrList(props) {
  const { classes, attr } = props;
  let cameracolor = "lightgrey";
  if (attr.fileUrl) cameracolor = "green";

  let qual = props.qualificationtypes[attr.type];

  let expirycolor = "black";
  let today = new Date();
  if (attr.expiry) {
    let expiry = new Date(attr.expiry);
    if (expiry <= today) expirycolor = "red";
  }
  return (
    <ListItem dense className={classes.hoverItem} key={attr.type + attr.date}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
=======
import React from 'react'
import { connect } from 'react-redux'

import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'

import Edit from '@material-ui/icons/Edit'
import Image from '@material-ui/icons/Image'
import Delete from '@material-ui/icons/Delete'

import AttrModal from '../modals/AttrModal'
import { USER_ATTR } from '../../../constants/modal-types'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { showModal } from '../../../actions/modal'
import { getUserAttrs } from '../../../actions/local'
import Popup from 'reactjs-popup'
import { usersRef, storage } from '../../../config/firebase'
import moment from 'moment'

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (modal) => dispatch(showModal(modal)),
    getUserAttrs: (userPath) => dispatch(getUserAttrs(userPath))
  }
}

const mapStateToProps = (state) => {
  return {
    qualificationtypes: state.const.qualificationtypes
  }
}

function deleteAttr(uid, user, file) {
  if (file) storage.ref(file).delete()
  usersRef
    .doc(user)
    .collection('attr')
    .doc(uid)
    .delete()
    .then(() => {})
}

function AttrList(props) {
  const { classes, attr } = props
  let cameracolor = 'lightgrey'
  if (attr.fileUrl) cameracolor = 'green'

  let qual = props.qualificationtypes[attr.type]

  let expirycolor = 'black'
  let today = new Date()
  if (attr.expiry) {
    let expiry = new Date(attr.expiry)
    if (expiry <= today) expirycolor = 'red'
  }
  return (
    <ListItem dense className={classes.hoverItem} key={attr.type + attr.date}>
      <Grid container direction='row' justify='flex-start' alignItems='center'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <Grid item xs={2}>
          {attr.fileUrl ? (
            <Popup
              trigger={
<<<<<<< HEAD
                <span><Image
                  style={{ fontSize: 24, color: cameracolor, margin: 10 }}
                /></span>
              }
              position="right bottom"
              on="hover"
              disabled={attr.fileUrl == null}
            >
              <img alt="" src={attr.fileUrl} width={200} />
=======
                <span>
                  <Image style={{ fontSize: 24, color: cameracolor, margin: 10 }} />
                </span>
              }
              position='right bottom'
              on='hover'
              disabled={attr.fileUrl == null}
            >
              <img alt='' src={attr.fileUrl} width={200} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </Popup>
          ) : (
            <Image style={{ fontSize: 24, color: cameracolor, margin: 10 }} />
          )}
          <IconButton
            onClick={() => {
              props.showModal({
                modalType: USER_ATTR,
                modalProps: {
                  doc: attr,
                  userPath: props.userPath,
<<<<<<< HEAD
                  title: "Edit Item",
                  staffName: props.staffName
                }
              });
=======
                  title: 'Edit Item',
                  staffName: props.staffName
                }
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          >
            <Edit />
          </IconButton>
          <AttrModal />
        </Grid>
        <Grid item xs={8}>
<<<<<<< HEAD
          <div className={classes.subHeading}>
            {qual.name}
          </div>
=======
          <div className={classes.subHeading}>{qual.name}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          {qual.id && attr.id && (
            <div>
              <span className={classes.headingInline}>ID Number:</span> {attr.id}
            </div>
          )}
          {qual.number && attr.number && (
            <div>
<<<<<<< HEAD
              <span className={classes.headingInline}>Licence Number:</span>{" "}
              {attr.number}
=======
              <span className={classes.headingInline}>Licence Number:</span> {attr.number}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </div>
          )}
          {qual.title && attr.title && (
            <div>
              <i>{attr.title}</i>
            </div>
          )}
          <div>
            {qual.full && attr.full && (
              <span>
                <i>{attr.full}</i>
              </span>
            )}
            {qual.abbrev && attr.abbrev && <span> ({attr.abbrev})</span>}
          </div>
          {qual.class && attr.class && (
            <div>
<<<<<<< HEAD
              <span className={classes.headingInline}>Class(es):</span>{" "}
              {attr.class.join(", ")}
=======
              <span className={classes.headingInline}>Class(es):</span> {attr.class.join(', ')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </div>
          )}
          {qual.unit && attr.unit && (
            <div>
<<<<<<< HEAD
              <span className={classes.headingInline}>Unit Standard(s):</span>{" "}
              {attr.unit.join(", ")}
=======
              <span className={classes.headingInline}>Unit Standard(s):</span> {attr.unit.join(', ')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </div>
          )}
          {qual.course && attr.course && (
            <div>
<<<<<<< HEAD
              <span className={classes.headingInline}>Course(s):</span>{" "}
              {attr.course.join(", ")}
=======
              <span className={classes.headingInline}>Course(s):</span> {attr.course.join(', ')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </div>
          )}
          {attr.date && (
            <div>
<<<<<<< HEAD
              <span className={classes.headingInline}>Issue Date:</span>{" "}
              {moment(attr.date).format('D MMMM YYYY')}{" "}
=======
              <span className={classes.headingInline}>Issue Date:</span> {moment(attr.date).format('D MMMM YYYY')}{' '}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </div>
          )}
          {qual.expiry && attr.expiry && (
            <div>
<<<<<<< HEAD
              <span className={classes.headingInline}>Expiry Date:</span>{" "}
              <span style={{ color: expirycolor }}>
                {moment(attr.expiry).format('D MMMM YYYY')}
              </span>
=======
              <span className={classes.headingInline}>Expiry Date:</span>{' '}
              <span style={{ color: expirycolor }}>{moment(attr.expiry).format('D MMMM YYYY')}</span>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </div>
          )}
          {qual.issuer && attr.issuer && (
            <div>
              <span className={classes.headingInline}>Issued By:</span> {attr.issuer}
            </div>
          )}
          {qual.notes && attr.notes && (
            <div>
              <span className={classes.headingInline}>Notes:</span> {attr.notes}
            </div>
          )}
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={() => {
<<<<<<< HEAD
              if (
                window.confirm("Are you sure you wish to delete this item?")
              ) {
                deleteAttr(attr.uid, props.userPath, attr.fileRef);
                props.getUserAttrs(props.userPath);
=======
              if (window.confirm('Are you sure you wish to delete this item?')) {
                deleteAttr(attr.uid, props.userPath, attr.fileRef)
                props.getUserAttrs(props.userPath)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }
            }}
          >
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
<<<<<<< HEAD
  );
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AttrList)
);
=======
  )
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AttrList))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
