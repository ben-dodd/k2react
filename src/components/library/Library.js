import React from 'react';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { onSearchChange, onCatChange, fetchDocuments } from '../../actions/local';
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
>>>>>>> 947a2ba95b689774eab952b8a181ffa246ab3010
import store from '../../store';
import DocList from './DocList';

const mapStateToProps = state => {
  return {
    docs: state.local.documents,
    modal: state.modal.modalType,
    categories: state.const.documentcategories,
    category: state.local.category,
    search: state.local.search,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDocuments: () => dispatch(fetchDocuments())
  }
}


class Library extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      listselect: null,

    }

  }

  componentWillMount(){
    this.props.fetchDocuments();
    store.dispatch(onSearchChange(null));
    store.dispatch(onCatChange(null));
  }

  handleToggle = (uid) => {
    this.setState({
      listselect: uid,
    })
  }

  switch = (category) => {
    this.props.category === category ?
      store.dispatch(onCatChange(null))
      :
      store.dispatch(onCatChange(category));
    store.dispatch(onSearchChange(null));
    this.setState({
      modPath: null,
    });
  }

  render() {
    return (
      <div style = {{ marginTop: 80 }}>
        <Grid container spacing={8}>
          { this.props.categories.map(cat => {
            return (
              <Grid item key={cat.key}>
                <Button variant="outlined" color={this.props.category === cat.key ? "secondary" : "primary"} onClick={() => this.switch(cat.key)}>
                  {cat.desc}
                </Button>
              </Grid>
            );
          })}
        </Grid>
        <List style={{paddingTop: 30}}>
        { this.props.docs.filter(doc => {
            if (this.props.search) {
              if (doc.tags) {
                return [...doc.tags, doc.title].find(tag => tag.toLowerCase().includes(this.props.search.toLowerCase()));
              } else {
                return doc.title.toLowerCase().includes(this.props.search.toLowerCase());
              }
            } else if (this.props.category) {
              return doc.category === this.props.category;
            } else {
              return true;
            }
          }).map(doc => {
            return(
              <div key={doc.uid}>
                <DocList doc={doc} handleToggle={() => this.handleToggle(doc.uid)} selected={this.state.listselect === doc.uid} />
              </div>
            )
          })}
        </List>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
