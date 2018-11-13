import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { formStyles } from '../../config/styles';
import { List, ListItem, TextField, Typography, InputLabel,
  Select, FormControl, Input, Divider, Grid, CircularProgress, Card,
  CardHeader, Checkbox, FormControlLabel,
  CardContent, IconButton } from '@material-ui/core';
import { auth, usersRef } from '../../config/firebase';
import { CloudUpload, Warning, Add, ExpandLess, ExpandMore, Edit, Delete, AddPhotoAlternate } from '@material-ui/icons';
import UserAttrModal from '../modals/UserAttrModal';
import AttrList from '../widgets/AttrList';
import { USERATTR } from '../../constants/modal-types';
import { showModal } from '../../actions/modal';
import _ from 'lodash';

const mapStateToProps = state => {
  return {
    staff: state.local.staff,
    offices: state.const.offices,
    jobdescriptions: state.const.jobdescriptions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: modal => dispatch(showModal(modal)),
  };
};

class UserDetails extends React.Component {
  constructor(props){
    super(props);
    var userPath = auth.currentUser.uid;
    if (props.match.params.user) userPath = props.match.params.user;
    this.state = {
      userPath: userPath,
      user: props.staff[userPath],
      isLoading: false,
    }
    this.onEditUser = _.debounce(this.onEditUser, 1000);
  }

  onEditUser = (target, select) => {
    let change = {}
    change[target.id] = target.value;
    if (select) {
      this.setState({
        user: {
          ...this.state.user,
          ...change,
        },
      });
    }
    usersRef.doc(this.state.userPath).update(change);
  }

  displayTimeAtK2 = () => {
    if (this.state.user.startdate) {
      var timeAtK2 = new Date() - new Date(this.state.user.startdate);
      var divideBy = {
        d: 86400000,
        m: 2629800000,
        y: 31557600000,
      };
      var years = Math.floor(timeAtK2/divideBy['y']);
      timeAtK2 = timeAtK2 % divideBy['y'];
      var months = Math.floor(timeAtK2/divideBy['m']);
      timeAtK2 = timeAtK2 % divideBy['m'];
      var days = Math.floor(timeAtK2/divideBy['d']);
      return (years + ' years, ' + months + ' months and ' + days + ' days');
    } else {
      return ('No start date set')
    }
  }

  render() {
    const { classes } = this.props;
    var { user } = this.state;

    return (
      <div style={{ marginTop: 80, }}>
        <UserAttrModal />
        <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={16}>
          <Grid item xl={5} lg={6} md={12}>
            <Card className={classes.card}>
              <CardHeader
                style={{ background: '#ff5733'}}
                title={
                  <Typography className={classes.cardHeaderType} color="textSecondary">
                    General Details
                  </Typography>
                }
              />
              <CardContent>
                <List>
                  { this.state.isLoading ?
                    <div>
                      <CircularProgress />
                    </div>
                  :
                    <div>
                      <ListItem>
                        <TextField
                          label="Preferred Name"
                          id="name"
                          className={classes.textField}
                          defaultValue={user.name}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <Typography className={classes.note}><b>Workflow Max ID:</b> {user.wfm_id}</Typography>
                      </ListItem>
                      <ListItem>
                        <FormControl className={classes.textField}>
                          <InputLabel>Job Description</InputLabel>
                          <Select
                            value={user.jobdescription}
                            onChange={e => this.onEditUser({id: 'jobdescription', value: e.target.value}, true)}
                            input={<Input name='jobdescription' id='jobdescription' />}
                          >
                            <option value='' />
                            { this.props.jobdescriptions.map((jobdescription) => {
                              return(
                                <option key={jobdescription} value={jobdescription}>{jobdescription}</option>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </ListItem>
                      <ListItem>
                        <FormControl className={classes.textField}>
                          <InputLabel>Office</InputLabel>
                          <Select
                            value={user.office}
                            onChange={e => this.onEditUser({id: 'office', value: e.target.value}, true)}
                            input={<Input name='office' id='office' />}
                          >
                            <option value='' />
                            { this.props.offices.map((office) => {
                              return(
                                <option key={office} value={office}>{office}</option>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Start Date At K2"
                          id="startdate"
                          type="date"
                          className={classes.textField}
                          defaultValue={user.startdate}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          disabled
                          label="Time At K2"
                          className={classes.textField}
                          value={this.displayTimeAtK2()}
                        />
                      </ListItem>
                      <ListItem>
                        <Typography className={classes.labels}>Contact Information</Typography>
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Work Phone"
                          id="workphone"
                          className={classes.textField}
                          type="tel"
                          defaultValue={user.workphone}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="K2 Email"
                          id="email"
                          type="email"
                          className={classes.textField}
                          defaultValue={user.email}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Gmail"
                          id="gmail"
                          type="email"
                          className={classes.textField}
                          defaultValue={user.gmail}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <Typography className={classes.labels}>Personal Contact Information</Typography>
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Personal Phone"
                          id="personalphone"
                          type="tel"
                          className={classes.textField}
                          defaultValue={user.personalphone}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Home Address"
                          id="address"
                          multiline
                          rowsMax="4"
                          className={classes.textField}
                          defaultValue={user.address}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                    </div>
                  }
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={5} lg={6} md={12}>
            <Card className={classes.card}>
              <CardHeader
                style={{ background: '#ff5733'}}
                title={
                  <Typography className={classes.cardHeaderType} color="textSecondary">
                    Qualifications, Training and Health & Safety
                  </Typography>
                }
                action={
                  <IconButton onClick={() => {this.props.showModal({ modalType: USERATTR, modalProps: { userPath: this.state.userPath } })}}>
                    <Add style={{ color: 'white', }} />
                  </IconButton>
                }
              />
              <CardContent>
                <List>
                  { this.state.isLoading || !user ?
                    <div>
                      <CircularProgress />
                    </div>
                  :
                    <div>
                      <UserAttrModal />
                      {
                        user.attrs && Object.keys(user.attrs).length > 0 ?
                        <div>
                          { Object.keys(user.attrs).map(key => {
                          return(
                            <AttrList key = { key} attr={user.attrs[key]} userPath={ this.state.userPath } />
                          );
                        }) }</div> :
                        <ListItem>
                          Click the plus (+) symbol to add your qualifications, training and health & safety records.
                        </ListItem>
                      }
                    </div>
                  }
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={5} lg={6} md={12}>
            <Card className={classes.card}>
              <CardHeader
                style={{ background: '#ff5733'}}
                title={
                  <Typography className={classes.cardHeaderType} color="textSecondary">
                    Emergency Contacts
                  </Typography>
                }
              />
              <CardContent>
                <List>
                  { this.state.isLoading || !user ?
                    <div>
                      <CircularProgress />
                    </div>
                  :
                    <div>
                      <ListItem>
                        <Typography className={classes.labels}>Primary Emergency Contact</Typography>
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Name"
                          id="emergencyprimaryname"
                          className={classes.textField}
                          value={user.emergencyprimaryname}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Relation"
                          id="emergencyprimaryrelation"
                          className={classes.textField}
                          value={user.emergencyprimaryrelation}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Home Phone"
                          id="emergencyprimaryhomephone"
                          className={classes.textField}
                          value={user.emergencyprimaryhomephone}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Work Phone"
                          id="emergencyprimaryworkphone"
                          className={classes.textField}
                          value={user.emergencyprimaryworkphone}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Mobile"
                          id="emergencyprimarymobile"
                          className={classes.textField}
                          value={user.emergencyprimarymobile}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Email"
                          id="emergencyprimaryemail"
                          className={classes.textField}
                          value={user.emergencyprimaryemail}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Home Address"
                          id="emergencyprimaryhomeaddress"
                          className={classes.textField}
                          value={user.emergencyprimaryhomeaddress}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <Typography className={classes.labels}>Secondary Emergency Contact</Typography>
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Name"
                          id="emergencysecondaryname"
                          className={classes.textField}
                          value={user.emergencysecondaryname}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Relation"
                          id="emergencysecondaryrelation"
                          className={classes.textField}
                          value={user.emergencysecondaryrelation}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Home Phone"
                          id="emergencysecondaryhomephone"
                          className={classes.textField}
                          value={user.emergencysecondaryhomephone}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Work Phone"
                          id="emergencysecondaryworkphone"
                          className={classes.textField}
                          value={user.emergencysecondaryworkphone}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Mobile"
                          id="emergencyprimarymobile"
                          className={classes.textField}
                          value={user.emergencysecondarymobile}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Email"
                          id="emergencyprimaryemail"
                          className={classes.textField}
                          value={user.emergencysecondaryemail}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          label="Home Address"
                          id="emergencyprimaryhomeaddress"
                          className={classes.textField}
                          value={user.emergencysecondaryhomeaddress}
                          onChange={e => this.onEditUser(e.target)}
                          InputLabelProps = {{ shrink: true }}
                        />
                      </ListItem>
                    </div>
                  }
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(formStyles)(connect(mapStateToProps, mapDispatchToProps)(UserDetails));
