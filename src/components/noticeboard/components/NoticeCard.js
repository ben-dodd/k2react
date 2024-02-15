<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";

import CommentListItem from "./CommentListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import Linkify from "react-linkify";
import Grow from "@material-ui/core/Grow";

import PinIcon from "@material-ui/icons/Star";
import ReadIcon from "@material-ui/icons/CheckBox";
import DiscardIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CommentIcon from "@material-ui/icons/AddComment";
import WhosReadIcon from "@material-ui/icons/HowToReg";

import GeneralIcon from "@material-ui/icons/Note";
import HealthIcon from "@material-ui/icons/LocalHospital";
import JobLeadsIcon from "@material-ui/icons/Call";
import ClientIcon from "@material-ui/icons/RecordVoiceOver";
import ReportIcon from "@material-ui/icons/ImportContacts";
import moment from "moment";
import {
  fetchNotices,
  removeNoticeReads,
  readNotice,
} from "../../../actions/local";
import { showModal } from "../../../actions/modal";

import { NOTICES, COMMENT, WHOS_READ } from "../../../constants/modal-types";
import { auth, usersRef, noticesRef } from "../../../config/firebase";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'

import CommentListItem from './CommentListItem'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'
import Linkify from 'react-linkify'
import Grow from '@material-ui/core/Grow'

import PinIcon from '@material-ui/icons/Star'
import ReadIcon from '@material-ui/icons/CheckBox'
import DiscardIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CommentIcon from '@material-ui/icons/AddComment'
import WhosReadIcon from '@material-ui/icons/HowToReg'

import GeneralIcon from '@material-ui/icons/Note'
import HealthIcon from '@material-ui/icons/LocalHospital'
import JobLeadsIcon from '@material-ui/icons/Call'
import ClientIcon from '@material-ui/icons/RecordVoiceOver'
import ReportIcon from '@material-ui/icons/ImportContacts'
import moment from 'moment'
import { fetchNotices, removeNoticeReads, readNotice } from '../../../actions/local'
import { showModal } from '../../../actions/modal'

import { NOTICES, COMMENT, WHOS_READ } from '../../../constants/modal-types'
import { auth, usersRef, noticesRef } from '../../../config/firebase'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    staff: state.local.staff,
    me: state.local.me,
<<<<<<< HEAD
    noticeReads: state.local.noticeReads,
  };
};
=======
    noticeReads: state.local.noticeReads
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (modal) => dispatch(showModal(modal)),
<<<<<<< HEAD
    fetchNotices: (update) => dispatch(fetchNotices(update)),
  };
};

const generalIcon = <GeneralIcon style={{ color: "6fa1b6", fontSize: 40 }} />;
const healthIcon = <HealthIcon style={{ color: "red", fontSize: 40 }} />;
const clientIcon = <ClientIcon style={{ color: "#6fa1b6", fontSize: 40 }} />;
const reportIcon = <ReportIcon style={{ color: "#6fa1b6", fontSize: 40 }} />;
const jobLeadsIcon = (
  <JobLeadsIcon style={{ color: "#6fa1b6", fontSize: 40 }} />
);
const asbestosIcon = (
  <Avatar style={{ backgroundColor: "#7d6d26", color: "white" }}>A</Avatar>
);
const methIcon = (
  <Avatar style={{ backgroundColor: "#ff0065", color: "white" }}>M</Avatar>
);
const occIcon = (
  <Avatar style={{ backgroundColor: "#a2539c", color: "white" }}>O</Avatar>
);
const bioIcon = (
  <Avatar style={{ backgroundColor: "#87cc14", color: "white" }}>B</Avatar>
);
const noiseIcon = (
  <Avatar style={{ backgroundColor: "#995446", color: "white" }}>N</Avatar>
);
const stackIcon = (
  <Avatar style={{ backgroundColor: "#e33714", color: "white" }}>S</Avatar>
);
=======
    fetchNotices: (update) => dispatch(fetchNotices(update))
  }
}

const generalIcon = <GeneralIcon style={{ color: '6fa1b6', fontSize: 40 }} />
const healthIcon = <HealthIcon style={{ color: 'red', fontSize: 40 }} />
const clientIcon = <ClientIcon style={{ color: '#6fa1b6', fontSize: 40 }} />
const reportIcon = <ReportIcon style={{ color: '#6fa1b6', fontSize: 40 }} />
const jobLeadsIcon = <JobLeadsIcon style={{ color: '#6fa1b6', fontSize: 40 }} />
const asbestosIcon = <Avatar style={{ backgroundColor: '#7d6d26', color: 'white' }}>A</Avatar>
const methIcon = <Avatar style={{ backgroundColor: '#ff0065', color: 'white' }}>M</Avatar>
const occIcon = <Avatar style={{ backgroundColor: '#a2539c', color: 'white' }}>O</Avatar>
const bioIcon = <Avatar style={{ backgroundColor: '#87cc14', color: 'white' }}>B</Avatar>
const noiseIcon = <Avatar style={{ backgroundColor: '#995446', color: 'white' }}>N</Avatar>
const stackIcon = <Avatar style={{ backgroundColor: '#e33714', color: 'white' }}>S</Avatar>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class NoticeCard extends React.Component {
  // static whyDidYouRender = true;

  shouldComponentUpdate(nextProps) {
    if (
      this.props.notice == nextProps.notice &&
      this.props.me.favnotices &&
<<<<<<< HEAD
      this.props.me.favnotices.includes(this.props.notice.uid) ==
        nextProps.me.favnotices.includes(nextProps.notice.uid) &&
      this.props.noticeReads &&
      nextProps.noticeReads &&
      this.props.noticeReads.includes(this.props.notice.uid) ==
        nextProps.noticeReads.includes(nextProps.notice.uid)
    )
      return false;
    return true;
=======
      this.props.me.favnotices.includes(this.props.notice.uid) == nextProps.me.favnotices.includes(nextProps.notice.uid) &&
      this.props.noticeReads &&
      nextProps.noticeReads &&
      this.props.noticeReads.includes(this.props.notice.uid) == nextProps.noticeReads.includes(nextProps.notice.uid)
    )
      return false
    return true
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  render() {
    // console.log('Noticecard Re-rendering ' + this.props.notice.categorydesc);
<<<<<<< HEAD
    const { classes, notice, staff, me, noticeReads } = this.props;

    let avatar = generalIcon;
    if (notice.category === "has") avatar = healthIcon;
    else if (notice.category === "client") avatar = clientIcon;
    else if (notice.category === "reports") avatar = reportIcon;
    else if (notice.category === "leads") avatar = jobLeadsIcon;
    else if (notice.category === "jqfasb") avatar = asbestosIcon;
    else if (notice.category === "jqfmeth") avatar = methIcon;
    else if (notice.category === "occjqf") avatar = occIcon;
    else if (notice.category === "jqfbio") avatar = bioIcon;
    else if (notice.category === "jqfnoise") avatar = noiseIcon;
    else if (notice.category === "jqfstack") avatar = stackIcon;

    const fav =
      this.props.me.favnotices && this.props.me.favnotices.includes(notice.uid);
    const read = noticeReads && noticeReads.includes(notice.uid);
    const edit =
      me.uid === notice.authorUid ||
      me.auth["Admin"] ||
      me.name === notice.author;

    console.log("RE-RENDER");
    return (
      <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
=======
    const { classes, notice, staff, me, noticeReads } = this.props

    let avatar = generalIcon
    if (notice.category === 'has') avatar = healthIcon
    else if (notice.category === 'client') avatar = clientIcon
    else if (notice.category === 'reports') avatar = reportIcon
    else if (notice.category === 'leads') avatar = jobLeadsIcon
    else if (notice.category === 'jqfasb') avatar = asbestosIcon
    else if (notice.category === 'jqfmeth') avatar = methIcon
    else if (notice.category === 'occjqf') avatar = occIcon
    else if (notice.category === 'jqfbio') avatar = bioIcon
    else if (notice.category === 'jqfnoise') avatar = noiseIcon
    else if (notice.category === 'jqfstack') avatar = stackIcon

    const fav = this.props.me.favnotices && this.props.me.favnotices.includes(notice.uid)
    const read = noticeReads && noticeReads.includes(notice.uid)
    const edit = me.uid === notice.authorUid || me.auth['Admin'] || me.name === notice.author

    console.log('RE-RENDER')
    return (
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <Card className={classes.noticeCard}>
          <CardContent>
            <div className={classes.cardHeaderNotice}>
              <div className={classes.flexRow}>
                {avatar}
                <div className={classes.spacerMedium} />
                <div>
<<<<<<< HEAD
                  <Typography className={classes.title} color="textSecondary">
                    {notice.categorydesc}
                  </Typography>
                  <Typography color="textPrimary">
                    Submitted by{" "}
                    <span className={classes.bold}>{notice.author}</span>
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    {moment(notice.date).format("ddd, D MMM YYYY")}
=======
                  <Typography className={classes.title} color='textSecondary'>
                    {notice.categorydesc}
                  </Typography>
                  <Typography color='textPrimary'>
                    Submitted by <span className={classes.bold}>{notice.author}</span>
                  </Typography>
                  <Typography className={classes.subtitle} color='textSecondary'>
                    {moment(notice.date).format('ddd, D MMM YYYY')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </Typography>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className={classes.details} color="textSecondary">
              {notice.category === "has" ? (
=======
            <div className={classes.details} color='textSecondary'>
              {notice.category === 'has' ? (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <div>
                  {notice.incidentno && (
                    <div>
                      <b>Incident No.: </b>
                      {notice.incidentno}
                    </div>
                  )}
                  {notice.job && (
                    <div>
                      <b>Job: </b>
                      {notice.job}
                    </div>
                  )}
                  {notice.incidentstaff && (
                    <div>
                      <b>Staff Involved: </b>
                      {notice.incidentstaff}
                    </div>
                  )}
                  {notice.incidentdesc && (
                    <div>
                      <b>Incident Desc.: </b>
                      {notice.incidentdesc}
                    </div>
                  )}
                  {notice.text && (
                    <div>
                      <b>Learnings: </b>
                      {notice.text}
                    </div>
                  )}
                </div>
              ) : (
                <Linkify>
                  <div className={classes.underline}>{notice.job}</div>
                  {notice.text}
                </Linkify>
              )}
            </div>
            <br />
            {notice.comments && Object.values(notice.comments).length > 0 && (
              <div>
                <hr />
                <div>
                  {Object.values(notice.comments).map((comment) => (
                    <CommentListItem
                      key={comment.text}
                      comment={comment}
                      edit={
                        notice.authorUid === auth.currentUser.uid ||
                        comment.author.uid === auth.currentUser.uid ||
                        notice.author === me.name ||
<<<<<<< HEAD
                        me.auth["Admin"]
=======
                        me.auth['Admin']
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }
                      onEditComment={() => this.onEditComment(comment)}
                      onDeleteComment={() => this.onDeleteComment(comment)}
                    />
                  ))}
                </div>
                <hr />
              </div>
            )}
          </CardContent>
          <div className={classes.flexColumn}>
            <CardActions className={classes.flexRowLeftAlignEllipsis}>
<<<<<<< HEAD
              <Tooltip title={"Pin Notice"}>
                <IconButton aira-label="Pin notice" onClick={this.onFavNotice}>
                  <PinIcon color={fav ? "secondary" : "action"} />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Mark As Read"}>
                <IconButton
                  aira-label="Mark as read"
                  onClick={this.onReadNotice}
                >
                  <ReadIcon color={read ? "secondary" : "action"} />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Add Comment"}>
                <IconButton
                  aira-label="Add comment"
                  onClick={this.onAddComment}
                >
                  <CommentIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Check who has read"}>
                <IconButton
                  aira-label="Check who has read"
                  onClick={this.onCheckRead}
                >
=======
              <Tooltip title={'Pin Notice'}>
                <IconButton aira-label='Pin notice' onClick={this.onFavNotice}>
                  <PinIcon color={fav ? 'secondary' : 'action'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Mark As Read'}>
                <IconButton aira-label='Mark as read' onClick={this.onReadNotice}>
                  <ReadIcon color={read ? 'secondary' : 'action'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Add Comment'}>
                <IconButton aira-label='Add comment' onClick={this.onAddComment}>
                  <CommentIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Check who has read'}>
                <IconButton aira-label='Check who has read' onClick={this.onCheckRead}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  <WhosReadIcon />
                </IconButton>
              </Tooltip>
              {edit && (
                <span>
<<<<<<< HEAD
                  <Tooltip title={"Edit Notice"}>
                    <IconButton
                      aira-label="Edit notice"
                      onClick={this.onEditNotice}
                    >
                      <EditIcon color="action" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={"Delete Notice"}>
                    <IconButton
                      aira-label="Discard notice"
                      onClick={this.onDeleteNotice}
                    >
                      <DiscardIcon color="action" />
=======
                  <Tooltip title={'Edit Notice'}>
                    <IconButton aira-label='Edit notice' onClick={this.onEditNotice}>
                      <EditIcon color='action' />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={'Delete Notice'}>
                    <IconButton aira-label='Discard notice' onClick={this.onDeleteNotice}>
                      <DiscardIcon color='action' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    </IconButton>
                  </Tooltip>
                </span>
              )}
            </CardActions>
          </div>
        </Card>
      </Grow>
<<<<<<< HEAD
    );
  }

  onReadNotice = () => {
    readNotice(this.props.notice, this.props.me, this.props.noticeReads);
  };

  onFavNotice = () => {
    const { notice } = this.props;
    let newArray = [];
    if (this.props.me.favnotices === undefined) {
      newArray = [notice.uid];
    } else {
      let notices = [...this.props.me.favnotices];
      if (notices.includes(notice.uid)) {
        newArray = notices.filter((item) => item !== notice.uid);
      } else {
        notices.push(notice.uid);
        newArray = notices;
      }
    }

    usersRef.doc(auth.currentUser.uid).update({ favnotices: newArray });
  };

  onDeleteNotice = () => {
    const { notice } = this.props;
    if (window.confirm("Are you sure you wish to delete this notice?")) {
      removeNoticeReads(notice, this.props.noticeReads);
      noticesRef.doc(notice.uid).delete();
      this.props.fetchNotices(true);
    }
  };
=======
    )
  }

  onReadNotice = () => {
    readNotice(this.props.notice, this.props.me, this.props.noticeReads)
  }

  onFavNotice = () => {
    const { notice } = this.props
    let newArray = []
    if (this.props.me.favnotices === undefined) {
      newArray = [notice.uid]
    } else {
      let notices = [...this.props.me.favnotices]
      if (notices.includes(notice.uid)) {
        newArray = notices.filter((item) => item !== notice.uid)
      } else {
        notices.push(notice.uid)
        newArray = notices
      }
    }

    usersRef.doc(auth.currentUser.uid).update({ favnotices: newArray })
  }

  onDeleteNotice = () => {
    const { notice } = this.props
    if (window.confirm('Are you sure you wish to delete this notice?')) {
      removeNoticeReads(notice, this.props.noticeReads)
      noticesRef.doc(notice.uid).delete()
      this.props.fetchNotices(true)
    }
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  onEditNotice = () => {
    this.props.showModal({
      modalType: NOTICES,
      modalProps: {
<<<<<<< HEAD
        title: "Edit Notice",
        doc: this.props.notice,
      },
    });
  };

  onAddComment = () => {
    const { notice } = this.props;
    this.props.showModal({
      modalType: COMMENT,
      modalProps: {
        title: "Add Comment",
=======
        title: 'Edit Notice',
        doc: this.props.notice
      }
    })
  }

  onAddComment = () => {
    const { notice } = this.props
    this.props.showModal({
      modalType: COMMENT,
      modalProps: {
        title: 'Add Comment',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        doc: {
          comment: {
            text: null,
            author: {
              uid: auth.currentUser.uid,
<<<<<<< HEAD
              name: this.props.me.name,
            },
            date: Date(),
          },
          notice: notice,
        },
      },
    });
  };

  onEditComment = (comment) => {
    const { notice } = this.props;
    this.props.showModal({
      modalType: COMMENT,
      modalProps: {
        title: "Edit Comment",
        doc: {
          comment,
          notice,
        },
      },
    });
  };

  onDeleteComment = (comment) => {
    const { notice } = this.props;
    let comments = notice.comments;
    delete notice.comments[comment.uid];

    noticesRef.doc(notice.uid).update({ comments: comments });
    this.props.fetchNotices(true);
  };

  onCheckRead = () => {
    const { notice } = this.props;
=======
              name: this.props.me.name
            },
            date: Date()
          },
          notice: notice
        }
      }
    })
  }

  onEditComment = (comment) => {
    const { notice } = this.props
    this.props.showModal({
      modalType: COMMENT,
      modalProps: {
        title: 'Edit Comment',
        doc: {
          comment,
          notice
        }
      }
    })
  }

  onDeleteComment = (comment) => {
    const { notice } = this.props
    let comments = notice.comments
    delete notice.comments[comment.uid]

    noticesRef.doc(notice.uid).update({ comments: comments })
    this.props.fetchNotices(true)
  }

  onCheckRead = () => {
    const { notice } = this.props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    //console.log(notice);
    this.props.showModal({
      modalType: WHOS_READ,
      modalProps: {
<<<<<<< HEAD
        doc: notice,
      },
    });
  };
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(NoticeCard)
);
=======
        doc: notice
      }
    })
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NoticeCard))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
