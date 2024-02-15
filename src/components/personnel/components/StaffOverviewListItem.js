<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";

const mapStateToProps = state => {
  return {
    me: state.local.me
  };
};

function displayTimeAtK2(user) {
  if (user.startdate) {
    var timeAtK2 = new Date() - new Date(user.startdate);
=======
import React from 'react'
import { connect } from 'react-redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    me: state.local.me
  }
}

function displayTimeAtK2(user) {
  if (user.startdate) {
    var timeAtK2 = new Date() - new Date(user.startdate)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    var divideBy = {
      d: 86400000,
      m: 2629800000,
      y: 31557600000
<<<<<<< HEAD
    };
    var years = Math.floor(timeAtK2 / divideBy["y"]);
    timeAtK2 = timeAtK2 % divideBy["y"];
    var months = Math.floor(timeAtK2 / divideBy["m"]);
    timeAtK2 = timeAtK2 % divideBy["m"];
    var days = Math.floor(timeAtK2 / divideBy["d"]);
    let y = " years ";
    let m = " months and ";
    let d = " days";
    if (years === 1) y = " year ";
    if (months === 1) m = " month and ";
    if (days === 1) d = " day";
    return years + y + months + m + days + d;
  } else {
    return "No start date set";
=======
    }
    var years = Math.floor(timeAtK2 / divideBy['y'])
    timeAtK2 = timeAtK2 % divideBy['y']
    var months = Math.floor(timeAtK2 / divideBy['m'])
    timeAtK2 = timeAtK2 % divideBy['m']
    var days = Math.floor(timeAtK2 / divideBy['d'])
    let y = ' years '
    let m = ' months and '
    let d = ' days'
    if (years === 1) y = ' year '
    if (months === 1) m = ' month and '
    if (days === 1) d = ' day'
    return years + y + months + m + days + d
  } else {
    return 'No start date set'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }
}

function StaffCard(props) {
<<<<<<< HEAD
  const { staff } = props;
  const path = staff.uid ? "/staff/details/" + staff.uid : "/mydetails";
=======
  const { staff } = props
  const path = staff.uid ? '/staff/details/' + staff.uid : '/mydetails'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  return (
    <Grid container>
      <Grid item xs={6}>
<<<<<<< HEAD
        {props.me.auth && props.me.auth["Admin"] && (
          <Link to={path} style={{ textDecoration: "none" }}>
            <Button style={{ marginBottom: 20 }} variant="outlined">
=======
        {props.me.auth && props.me.auth['Admin'] && (
          <Link to={path} style={{ textDecoration: 'none' }}>
            <Button style={{ marginBottom: 20 }} variant='outlined'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              Edit User
            </Button>
            <br />
          </Link>
        )}
        <i>{staff.jobdescription}</i>
        <br />
<<<<<<< HEAD
        Office:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.office ? staff.office : "Office not set."}
        </span>
        <br />
        Phone:{" "}
        <span style={{ fontWeight: 100, textDecoration: "none" }}>
          {staff.workphone ? (
            <a href={"tel:" + staff.workphone}>{staff.workphone}</a>
          ) : (
            "No work phone set."
          )}
        </span>
        <br />
        Email:{" "}
        <span style={{ fontWeight: 100, textDecoration: "none" }}>
          {staff.email ? (
            <a href={"mailto:" + staff.email}>{staff.email}</a>
          ) : (
            "No email set."
          )}
        </span>
        <br />
        Gmail:{" "}
        <span style={{ fontWeight: 100, textDecoration: "none" }}>
          {staff.gmail ? (
            <a href={"mailto:" + staff.gmail}>{staff.gmail}</a>
          ) : (
            "No Gmail set."
          )}
        </span>
        <br />
        Personal Phone:{" "}
        <span style={{ fontWeight: 100, textDecoration: "none" }}>
          {staff.personalphone ? (
            <a href={"tel:" + staff.personalphone}>{staff.personalphone}</a>
          ) : (
            "Personal phone not set."
          )}
        </span>
        <br />
        <hr />
        Tertiary:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.tertiary ? staff.tertiary : "No"}
        </span>
        <br />
        IP402:{" "}
        <span style={{ fontWeight: 100 }}>{staff.ip402 ? "Yes" : "No"}</span>
        <br />
        Asbestos Assessor:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.aanumber ? staff.aanumber : "No"}
        </span>
        <br />
        NZQA Unit Standards:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.nzqa && staff.nzqa.length > 0 ? staff.nzqa.join(", ") : "None"}
        </span>
        <br />
        NZQA Training:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.nzqatraining ? staff.nzqatraining : "None"}
        </span>
        <br />
        First Aid:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.firstaid ? staff.firstaid : "No"}
        </span>
        <br />
        Mask Fit Tested:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.maskfit ? staff.maskfit : "No"}
        </span>
        <br />
        <hr />
        Start Date at K2:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.startdate ? moment(staff.startdate).format('D MMMM YYYY') : (
            "Start date not set."
          )}
        </span>
        <br />
        Time at K2:{" "}
        <span style={{ fontWeight: 100 }}>{displayTimeAtK2(staff)}</span>
        <br />
        <hr />
        Asbestos Air Analyst:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.auth && staff.auth["Asbestos Air Analysis"] ? "Yes" : "No"}
        </span>
        <br />
        Asbestos Bulk Analyst:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.auth && staff.auth["Asbestos Bulk Analysis"] ? "Yes" : "No"}
        </span>
        <br />
        Asbestos Checker:{" "}
        <span style={{ fontWeight: 100 }}>
          {staff.auth && staff.auth["Analysis Checker"] ? "Yes" : "No"}
        </span>
=======
        Office: <span style={{ fontWeight: 100 }}>{staff.office ? staff.office : 'Office not set.'}</span>
        <br />
        Phone:{' '}
        <span style={{ fontWeight: 100, textDecoration: 'none' }}>
          {staff.workphone ? <a href={'tel:' + staff.workphone}>{staff.workphone}</a> : 'No work phone set.'}
        </span>
        <br />
        Email:{' '}
        <span style={{ fontWeight: 100, textDecoration: 'none' }}>
          {staff.email ? <a href={'mailto:' + staff.email}>{staff.email}</a> : 'No email set.'}
        </span>
        <br />
        Gmail:{' '}
        <span style={{ fontWeight: 100, textDecoration: 'none' }}>
          {staff.gmail ? <a href={'mailto:' + staff.gmail}>{staff.gmail}</a> : 'No Gmail set.'}
        </span>
        <br />
        Personal Phone:{' '}
        <span style={{ fontWeight: 100, textDecoration: 'none' }}>
          {staff.personalphone ? <a href={'tel:' + staff.personalphone}>{staff.personalphone}</a> : 'Personal phone not set.'}
        </span>
        <br />
        <hr />
        Tertiary: <span style={{ fontWeight: 100 }}>{staff.tertiary ? staff.tertiary : 'No'}</span>
        <br />
        IP402: <span style={{ fontWeight: 100 }}>{staff.ip402 ? 'Yes' : 'No'}</span>
        <br />
        Asbestos Assessor: <span style={{ fontWeight: 100 }}>{staff.aanumber ? staff.aanumber : 'No'}</span>
        <br />
        NZQA Unit Standards: <span style={{ fontWeight: 100 }}>{staff.nzqa && staff.nzqa.length > 0 ? staff.nzqa.join(', ') : 'None'}</span>
        <br />
        NZQA Training: <span style={{ fontWeight: 100 }}>{staff.nzqatraining ? staff.nzqatraining : 'None'}</span>
        <br />
        First Aid: <span style={{ fontWeight: 100 }}>{staff.firstaid ? staff.firstaid : 'No'}</span>
        <br />
        Mask Fit Tested: <span style={{ fontWeight: 100 }}>{staff.maskfit ? staff.maskfit : 'No'}</span>
        <br />
        <hr />
        Start Date at K2:{' '}
        <span style={{ fontWeight: 100 }}>{staff.startdate ? moment(staff.startdate).format('D MMMM YYYY') : 'Start date not set.'}</span>
        <br />
        Time at K2: <span style={{ fontWeight: 100 }}>{displayTimeAtK2(staff)}</span>
        <br />
        <hr />
        Asbestos Air Analyst: <span style={{ fontWeight: 100 }}>{staff.auth && staff.auth['Asbestos Air Analysis'] ? 'Yes' : 'No'}</span>
        <br />
        Asbestos Bulk Analyst: <span style={{ fontWeight: 100 }}>{staff.auth && staff.auth['Asbestos Bulk Analysis'] ? 'Yes' : 'No'}</span>
        <br />
        Asbestos Checker: <span style={{ fontWeight: 100 }}>{staff.auth && staff.auth['Analysis Checker'] ? 'Yes' : 'No'}</span>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <br />
      </Grid>
      <Grid item xs={6}>
        {staff.events ? (
          <List subheader={<ListSubheader>Upcoming Events</ListSubheader>}>
            {staff.events.length < 1 ? (
              <div
                style={{
                  marginLeft: 24,
                  fontWeight: 100,
                  fontSize: 12,
<<<<<<< HEAD
                  color: "#aaa"
=======
                  color: '#aaa'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              >
                No events to display.
              </div>
            ) : (
              <div>
<<<<<<< HEAD
                {staff.events.map(event => {
=======
                {staff.events.map((event) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  return (
                    <ListItem
                      button
                      onClick={() => {
<<<<<<< HEAD
                        window.open(event.htmlLink);
=======
                        window.open(event.htmlLink)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                      key={event.id}
                    >
                      <ListItemText
                        primary={event.summary}
                        secondary={
                          event.start.date ? (
<<<<<<< HEAD
                            <span>
                              {moment(Date.parse(event.start.date)).format('D MMMM')}{" "}
                              (all day)
                            </span>
                          ) : (
                            <span>{moment(Date.parse(event.start.dateTime)).format('D MMMM, h:mma')}{" "}</span>
=======
                            <span>{moment(Date.parse(event.start.date)).format('D MMMM')} (all day)</span>
                          ) : (
                            <span>{moment(Date.parse(event.start.dateTime)).format('D MMMM, h:mma')} </span>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          )
                        }
                      />
                      <br />
                    </ListItem>
<<<<<<< HEAD
                  );
=======
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}
              </div>
            )}
          </List>
        ) : (
          <div
            style={{
<<<<<<< HEAD
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 100,
              fontSize: 12,
              color: "#aaa"
=======
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 100,
              fontSize: 12,
              color: '#aaa'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          >
            {staff.gmail ? (
              <span>
<<<<<<< HEAD
                The user has not shared their Google Calendar with you. You can
                request access by entering their Gmail address into the "Add a
                friend's calendar" field on your Google Calendar sidebar.
=======
                The user has not shared their Google Calendar with you. You can request access by entering their Gmail address into the "Add
                a friend's calendar" field on your Google Calendar sidebar.
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </span>
            ) : (
              <span>The user has not set their Google Calendar account.</span>
            )}
          </div>
        )}
      </Grid>
    </Grid>
<<<<<<< HEAD
  );
}

export default connect(mapStateToProps)(StaffCard);
=======
  )
}

export default connect(mapStateToProps)(StaffCard)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
