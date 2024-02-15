<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Linkify from "react-linkify";

import DiscardIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import classNames from "classnames";

function CommentListItem(props) {
  const { classes, comment } = props;
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Linkify from 'react-linkify'

import DiscardIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import moment from 'moment'
import classNames from 'classnames'

function CommentListItem(props) {
  const { classes, comment } = props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  return (
    <div className={classNames(classes.noticeComments, classes.hoverItem)}>
      <div className={classes.marginRightSmall}>
        <div className={classes.bold}>{comment.author.name}</div>
<<<<<<< HEAD
        <div>{moment(comment.date).format("ddd, D MMM YYYY")}</div>
=======
        <div>{moment(comment.date).format('ddd, D MMM YYYY')}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <div>
          <Linkify>{comment.text}</Linkify>
        </div>
      </div>
      <div>
        {props.edit && (
          <div className={classes.flexRow}>
<<<<<<< HEAD
            <Tooltip title={"Edit Comment"}>
              <IconButton
                aira-label="Edit comment"
                onClick={props.onEditComment}
              >
                <EditIcon color="action" />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Delete Comment"}>
              <IconButton
                aira-label="Delete comment"
                onClick={props.onDeleteComment}
              >
                <DiscardIcon color="action" />
=======
            <Tooltip title={'Edit Comment'}>
              <IconButton aira-label='Edit comment' onClick={props.onEditComment}>
                <EditIcon color='action' />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Delete Comment'}>
              <IconButton aira-label='Delete comment' onClick={props.onDeleteComment}>
                <DiscardIcon color='action' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
<<<<<<< HEAD
  );
}

export default withStyles(styles)(CommentListItem);
=======
  )
}

export default withStyles(styles)(CommentListItem)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
