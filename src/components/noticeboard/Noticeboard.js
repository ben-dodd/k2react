import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { connect } from "react-redux";

import NoticeCard from "./components/NoticeCard";
import NoticeModal from "./modals/NoticeModal";
import CommentModal from "./modals/CommentModal";
import WhosReadModal from "./modals/WhosReadModal";

// import IncidentModal from "../incidents/modals/IncidentModal";
import { NOTICES, INCIDENT, COMMENT, WHOS_READ } from "../../constants/modal-types";
import { onCatChange, onSearchChange } from "../../actions/local";
import { auth, usersRef, noticesRef } from "../../config/firebase";
import store from "../../store";
import moment from "moment";
import {
  onFavNotice,
  onReadNotice,
  onDeleteNotice,
  fetchNotices,
} from "../../actions/local";
import { showModal } from "../../actions/modal";

const mapStateToProps = state => {
  return {
    staff: state.local.staff,
    me: state.local.me,
    notices: state.local.notices,
    categories: state.const.noticeCategories,
    search: state.local.search,
    category: state.local.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: search => dispatch(onSearchChange(search)),
    onCatChange: cat => dispatch(onCatChange(cat)),
    showModal: modal => dispatch(showModal(modal)),
    fetchNotices: (update) => dispatch(fetchNotices(update)),
  };
};

class Noticeboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideRead: false
    };
  }

  componentWillMount() {
    this.props.fetchNotices();
  }

  switch = category => {
    this.props.category === category
      ? this.props.onCatChange(null)
      : this.props.onCatChange(category);
    this.props.onSearchChange(null);
    this.setState({
      modPath: null
    });
  };

  select = uid => {
    this.setState({
      modPath: uid
    });
  };

  onReadNotice = notice => {
    let newArray = [];
    if (notice.staff === undefined) {
      newArray = [auth.currentUser.uid];
    } else {
      let staff = [...notice.staff];
      if (staff.includes(auth.currentUser.uid)) {
        newArray = staff.filter(item => item !== auth.currentUser.uid);
      } else {
        staff.push(auth.currentUser.uid);
        newArray = staff;
      }
    }
    noticesRef.doc(notice.uid).set(
      {
        staff: newArray,
      },
      { merge: true }
    );
    this.props.fetchNotices(true);
  }

  onFavNotice = uid => {
    let newArray = [];
    if (this.props.me.favnotices === undefined) {
      newArray = [uid];
    } else {
      let notices = [...this.props.me.favnotices];
      if (notices.includes(uid)) {
        newArray = notices.filter(item => item !== uid);
      } else {
        notices.push(uid);
        newArray = notices;
      }
    }
    usersRef.doc(auth.currentUser.uid).set(
        {
          favnotices: newArray
        },
        { merge: true }
      );
  }

  onDeleteNotice = (notice) => {
    if (window.confirm("Are you sure you wish to delete this notice?")) {
      noticesRef.doc(notice.uid).delete();
      this.props.fetchNotices(true);
    }
  }

  onEditNotice = note => {
    this.props.showModal({
      modalType: NOTICES,
      modalProps: {
        title: "Edit Notice",
        doc: note,
      }
    });
  }

  onAddComment = (notice) => {
    this.props.showModal({
      modalType: COMMENT,
      modalProps: {
        title: "Add Comment",
        doc: {
          comment: {
            text: null,
            author: {
              uid: auth.currentUser.uid,
              name: this.props.me.name,
            },
            date: Date(),
          },
          notice: notice,
        }
      }
    })
  }

  onEditComment = (comment, notice) => {
    this.props.showModal({
      modalType: COMMENT,
      modalProps: {
        title: "Edit Comment",
        doc: {
          comment,
          notice,
        }
      }
    });
  }

  onDeleteComment = (comment, notice) => {
    let comments = notice.comments;
    delete notice.comments[comment.uid];

    noticesRef.doc(notice.uid).update({ comments: comments });
    this.props.fetchNotices(true);
  }

  onCheckRead = (notice) => {
    //console.log(notice);
    this.props.showModal({
      modalType: WHOS_READ,
      modalProps: {
        doc: notice,
      }
    });
  }

  render() {
    return (
      <div style={{ marginTop: 80 }}>
        <NoticeModal />
        <CommentModal />
        <WhosReadModal />
        <Button
          variant="outlined"
          style={{ marginBottom: 16, marginRight: 8, }}
          onClick={() => {
            this.props.showModal({
              modalType: NOTICES,
              modalProps: {
                title: "Add New Notice",
                doc: {
                  message: '',
                  category: 'gen',
                  categorydesc: 'General',
                  author: this.props.me.name,
                  authorUid: auth.currentUser.uid,
                  auth: '',
                  date: moment().format('YYYY-MM-DD'),
                  staff: []
                }
              }
            });
          }}
          >
          Add New Notice
        </Button>
        {/*<Button
          variant="outlined"
          style={{ marginBottom: 16 }}
          onClick={() => {
            this.props.showModal({
              modalType: INCIDENT,
              modalProps: {
                title: "Submit New Incident Report",
                doc: {
                  message: '',
                  category: 'incident',
                  categorydesc: 'General',
                  author: this.props.me.name,
                  auth: '',
                  date: moment().format('YYYY-MM-DD'),
                  staff: [auth.currentUser.uid]
                }
              }
            });
          }}
          >
          Submit Incident Report
        </Button>*/}
        <FormControlLabel
          style={{ marginLeft: 1, }}
          control={
            <Checkbox
              checked={this.props.me && this.props.me.settings && this.props.me.settings.showReadNotices !== undefined ? this.props.me.settings.showReadNotices : true}
              onChange={(event) => { usersRef.doc(auth.currentUser.uid).update({ settings: {
                ...this.props.me.settings,
                showReadNotices: event.target.checked,
              }})}}
              value='hideRead'
              color='secondary'
            />
          }
          label="Show Read Notices"
        />
        <Grid container spacing={1}>
          {[
            {
              key: "fav",
              desc: "Favourites",
            },
            ...this.props.categories].map(cat => {
            return (
              <Grid item key={cat.key}>
                <Button
                  variant="outlined"
                  color={
                    this.props.category === cat.key ? "secondary" : "primary"
                  }
                  onClick={() => this.switch(cat.key)}
                >
                  {cat.desc}
                </Button>
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={2} style={{ paddingTop: 30 }}>
          {this.props.notices
            .filter(notice => {
              if (
                this.props.me.favnotices &&
                this.props.me.favnotices.includes(notice.uid) &&
                (this.props.category === "fav" || this.props.category === "" || this.props.category === null)
              ) {
                return true;
              }
              if (this.props.me.settings && this.props.me.settings.showReadNotices !== undefined && !this.props.me.settings.showReadNotices && notice.staff && notice.staff.includes(auth.currentUser.uid)) return false;
              if (
                notice.auth !== undefined &&
                this.props.me.auth &&
                this.props.me.auth[notice.auth] === false
              ) {
                return false;
              }
              if (
                this.props.me.deletednotices &&
                this.props.me.deletednotices.includes(notice.uid)
              ) {
                return false;
              }
              if (this.props.category === "imp" && notice.important) return true;
              if (this.props.search) {
                let search = [
                    notice.categorydesc,
                    notice.text,
                    notice.author,
                  ];
                if (notice.category === 'has') search = [
                  notice.categorydesc,
                  notice.incidentdesc,
                  notice.incidentno,
                  notice.incidentstaff,
                  notice.job,
                  notice.text,
                  notice.author,
                ];
                let searchterm = this.props.search.toLowerCase().split(" ");
                let res = true;
                searchterm.forEach(term => {
                  if (
                    search.find(
                      tag => tag && tag.toLowerCase().includes(term)
                    ) === undefined
                  )
                    res = false;
                });
                return res;
              } else if (this.props.category) {
                return notice.category === this.props.category;
              } else {
                return true;
              }
            })
            .map(notice => {
              return (
                <Grid item sm={12} md={6} lg={4} xl={3} key={notice.uid}>
                  <NoticeCard
                    notice={notice}
                    me={this.props.me}
                    staff={this.props.staff}
                    fav={this.props.me.favnotices && this.props.me.favnotices.includes(notice.uid)}
                    read={notice.staff && notice.staff.includes(auth.currentUser.uid)}
                    edit={auth.currentUser.uid === notice.authorUid || this.props.me.auth['Admin'] || this.props.me.name === notice.author}
                    // edit={notice.author === this.props.me.name || this.props.me.auth['Admin']}
                    onFavNotice={() => this.onFavNotice(notice.uid)}
                    onReadNotice={() => this.onReadNotice(notice)}
                    onEditNotice={() => this.onEditNotice(notice)}
                    onDeleteNotice={() => this.onDeleteNotice(notice)}
                    onAddComment={() => this.onAddComment(notice)}
                    onEditComment={this.onEditComment}
                    onDeleteComment={this.onDeleteComment}
                    onCheckRead={() => this.onCheckRead(notice)}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Noticeboard);
