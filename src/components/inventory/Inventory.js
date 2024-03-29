<<<<<<< HEAD
import React from "react";

import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { auth, methodsRef, docsRef } from "../../config/firebase";
import { ASSET } from "../../constants/modal-types";

import AssetListItem from "./components/AssetListItem";

import {
  onSearchChange,
  onCatChange,
  fetchAssets,
  fetchStaff,
  fetchMethods
} from "../../actions/local";
import { showModal } from "../../actions/modal";
import store from "../../store";

const mapStateToProps = state => {
=======
import React from 'react'

import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { auth, methodsRef, docsRef } from '../../config/firebase'
import { ASSET } from '../../constants/modal-types'

import AssetListItem from './components/AssetListItem'

import { onSearchChange, onCatChange, fetchAssets, fetchStaff, fetchMethods } from '../../actions/local'
import { showModal } from '../../actions/modal'
import store from '../../store'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    assets: state.local.assets,
    me: state.local.me,
    modal: state.modal.modalType,
    search: state.local.search,
    staff: state.local.staff,
    categories: state.const.assetCategories,
<<<<<<< HEAD
    category: state.local.category,
  };
};

const mapDispatchToProps = dispatch => {
=======
    category: state.local.category
  }
}

const mapDispatchToProps = (dispatch) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    fetchAssets: (update) => dispatch(fetchAssets(update)),
    fetchStaff: () => dispatch(fetchStaff()),
    fetchMethods: () => dispatch(fetchMethods()),
<<<<<<< HEAD
    showModal: modal => dispatch(showModal(modal))
  };
};

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listselect: null
    };
  }

  UNSAFE_componentWillMount() {
    this.props.fetchAssets();
    this.props.fetchStaff();
    store.dispatch(onSearchChange(null));
    store.dispatch(onCatChange(null));
  }

  handleToggle = uid => {
    this.setState({
      listselect: uid
    });
  };

  switch = category => {
    this.props.category === category
      ? store.dispatch(onCatChange(null))
      : store.dispatch(onCatChange(category));
    store.dispatch(onSearchChange(null));
    this.setState({
      modPath: null
    });
  };

  render() {
    const { assets } = this.props;
=======
    showModal: (modal) => dispatch(showModal(modal))
  }
}

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listselect: null
    }
  }

  UNSAFE_componentWillMount() {
    this.props.fetchAssets()
    this.props.fetchStaff()
    store.dispatch(onSearchChange(null))
    store.dispatch(onCatChange(null))
  }

  handleToggle = (uid) => {
    this.setState({
      listselect: uid
    })
  }

  switch = (category) => {
    this.props.category === category ? store.dispatch(onCatChange(null)) : store.dispatch(onCatChange(category))
    store.dispatch(onSearchChange(null))
    this.setState({
      modPath: null
    })
  }

  render() {
    const { assets } = this.props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return (
      <div style={{ marginTop: 80 }}>
        <Grid container spacing={1}>
          <Grid item>
            <Button
<<<<<<< HEAD
              variant="outlined"
              color="default"
              onClick={() => {
                let doc = {
                  docType: "PDF",
                  tags: [],
                };
                this.props.showModal({
                  modalType: ASSET,
                  modalProps: { title: "Add New Asset", doc: doc }
                });
=======
              variant='outlined'
              color='default'
              onClick={() => {
                let doc = {
                  docType: 'PDF',
                  tags: []
                }
                this.props.showModal({
                  modalType: ASSET,
                  modalProps: { title: 'Add New Asset', doc: doc }
                })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            >
              Add New Asset
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
<<<<<<< HEAD
          {this.props.categories && this.props.categories.map(cat => {
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
        <List style={{ paddingTop: 30 }}>
          {assets
            .filter(doc => {
              if (this.props.search) {
                let search = [];
                if (doc.tags) {
                  search = [
                    ...doc.tags.map(tag => (tag.text ? tag.text : tag)),
=======
          {this.props.categories &&
            this.props.categories.map((cat) => {
              return (
                <Grid item key={cat.key}>
                  <Button
                    variant='outlined'
                    color={this.props.category === cat.key ? 'secondary' : 'primary'}
                    onClick={() => this.switch(cat.key)}
                  >
                    {cat.desc}
                  </Button>
                </Grid>
              )
            })}
        </Grid>
        <List style={{ paddingTop: 30 }}>
          {assets
            .filter((doc) => {
              if (this.props.search) {
                let search = []
                if (doc.tags) {
                  search = [
                    ...doc.tags.map((tag) => (tag.text ? tag.text : tag)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    doc.name,
                    doc.model,
                    doc.manufacturer,
                    doc.assetTag,
<<<<<<< HEAD
                    doc.serial,
                  ];
                } else {
                  search = [
                    doc.name,
                    doc.model,
                    doc.manufacturer,
                    doc.assetTag,
                    doc.serial,
                  ];
                }
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
                return doc.category === this.props.category;
              } else {
                return true;
              }
            })
            .map(doc => {
=======
                    doc.serial
                  ]
                } else {
                  search = [doc.name, doc.model, doc.manufacturer, doc.assetTag, doc.serial]
                }
                let searchterm = this.props.search.toLowerCase().split(' ')
                let res = true
                searchterm.forEach((term) => {
                  if (search.find((tag) => tag && tag.toLowerCase().includes(term)) === undefined) res = false
                })
                return res
              } else if (this.props.category) {
                return doc.category === this.props.category
              } else {
                return true
              }
            })
            .map((doc) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              return (
                <div key={doc.docID}>
                  <AssetListItem doc={doc} />
                </div>
<<<<<<< HEAD
              );
            })}
        </List>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
=======
              )
            })}
        </List>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
