<<<<<<< HEAD
import React from "react";

import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { auth, methodsRef, docsRef } from "../../config/firebase";
import { METHOD, DOCUMENT } from "../../constants/modal-types";

import MethodModal from "./modals/MethodModal";
import UpdateMethodVersionModal from "./modals/UpdateMethodVersionModal";
import DocumentModal from "./modals/DocumentModal";

import DocumentListItem from "./components/DocumentListItem";

import {
  onSearchChange,
  onCatChange,
  fetchDocuments,
  fetchStaff,
  fetchMethods
} from "../../actions/local";
import { showModal } from "../../actions/modal";
import store from "../../store";
=======
import React from 'react'

import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { auth, methodsRef, docsRef } from '../../config/firebase'
import { METHOD, DOCUMENT } from '../../constants/modal-types'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import MethodModal from './modals/MethodModal'
import UpdateMethodVersionModal from './modals/UpdateMethodVersionModal'
import DocumentModal from './modals/DocumentModal'

import DocumentListItem from './components/DocumentListItem'

import { onSearchChange, onCatChange, fetchDocuments, fetchStaff, fetchMethods } from '../../actions/local'
import { showModal } from '../../actions/modal'
import store from '../../store'

const mapStateToProps = (state) => {
  return {
    docs: state.local.documents,
    me: state.local.me,
    methods: state.local.methods,
    modal: state.modal.modalType,
    categories: state.const.documentCategories,
    category: state.local.category,
    search: state.local.search,
    staff: state.local.staff
<<<<<<< HEAD
  };
};
=======
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDocuments: () => dispatch(fetchDocuments()),
    fetchStaff: () => dispatch(fetchStaff()),
    fetchMethods: () => dispatch(fetchMethods()),
<<<<<<< HEAD
    showModal: modal => dispatch(showModal(modal))
  };
};

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listselect: null
    };
  }

  UNSAFE_componentWillMount() {
    this.props.fetchDocuments();
    this.props.fetchMethods();
    this.props.fetchStaff();
    store.dispatch(onSearchChange(null));
    store.dispatch(onCatChange(null));
=======
    showModal: (modal) => dispatch(showModal(modal))
  }
}

class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listselect: null
    }
  }

  UNSAFE_componentWillMount() {
    this.props.fetchDocuments()
    this.props.fetchMethods()
    this.props.fetchStaff()
    store.dispatch(onSearchChange(null))
    store.dispatch(onCatChange(null))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  handleToggle = uid => {
    this.setState({
      listselect: uid
<<<<<<< HEAD
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
    const library = this.props.docs.concat(this.props.methods);
=======
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
    const library = this.props.docs.concat(this.props.methods)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    return (
      <div style={{ marginTop: 80 }}>
        <DocumentModal />
        <MethodModal />
        <UpdateMethodVersionModal />
        <Grid container spacing={1}>
          <Grid item>
<<<<<<< HEAD
            {this.props.me.auth["Method Editor"] && (
              <Button
                variant="outlined"
                color="default"
                onClick={() => {
                  let doc = {
                    changes: {
                      changes: "Document created.",
                      date: new Date(),
                      person: auth.currentUser.displayName,
                      version: "1.0"
=======
            {this.props.me.auth['Method Editor'] && (
              <Button
                variant='outlined'
                color='default'
                onClick={() => {
                  let doc = {
                    changes: {
                      changes: 'Document created.',
                      date: new Date(),
                      person: auth.currentUser.displayName,
                      version: '1.0'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    },
                    version: 1,
                    patch: 0,
                    steps: {},
<<<<<<< HEAD
                    category: "k2methods",
                    glossary: {}
                  };
                  this.props.showModal({
                    modalType: METHOD,
                    modalProps: { title: "Add New K2 Method", doc: doc }
                  });
=======
                    category: 'k2methods',
                    glossary: {}
                  }
                  this.props.showModal({
                    modalType: METHOD,
                    modalProps: { title: 'Add New K2 Method', doc: doc }
                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              >
                Add New K2 Method
              </Button>
            )}
          </Grid>
          <Grid item>
<<<<<<< HEAD
            {this.props.me.auth["Document Editor"] && (
              <Button
                variant="outlined"
                color="default"
                onClick={() => {
                  let doc = {
                    docType: "PDF",
                    tags: []
                  };
                  this.props.showModal({
                    modalType: DOCUMENT,
                    modalProps: { title: "Add New Document", doc: doc }
                  });
=======
            {this.props.me.auth['Document Editor'] && (
              <Button
                variant='outlined'
                color='default'
                onClick={() => {
                  let doc = {
                    docType: 'PDF',
                    tags: []
                  }
                  this.props.showModal({
                    modalType: DOCUMENT,
                    modalProps: { title: 'Add New Document', doc: doc }
                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              >
                Add New Document
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={1}>
<<<<<<< HEAD
          {this.props.categories.map(cat => {
            return (
              <Grid item key={cat.key}>
                <Button
                  variant="outlined"
                  color={
                    this.props.category === cat.key ? "secondary" : "primary"
                  }
=======
          {this.props.categories.map((cat) => {
            return (
              <Grid item key={cat.key}>
                <Button
                  variant='outlined'
                  color={this.props.category === cat.key ? 'secondary' : 'primary'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  onClick={() => this.switch(cat.key)}
                >
                  {cat.desc}
                </Button>
              </Grid>
            )
          })}
        </Grid>
        <List style={{ paddingTop: 30 }}>
          {library
<<<<<<< HEAD
            .filter(doc => {
              if (this.props.search) {
                let search = [];
                if (doc.tags) {
                  search = [
                    ...doc.tags.map(tag => (tag.text ? tag.text : tag)),
=======
            .filter((doc) => {
              if (this.props.search) {
                let search = []
                if (doc.tags) {
                  search = [
                    ...doc.tags.map((tag) => (tag.text ? tag.text : tag)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    doc.title,
                    doc.publisher,
                    doc.author,
                    doc.subtitle,
                    doc.code
<<<<<<< HEAD
                  ];
                } else {
                  search = [
                    doc.title,
                    doc.publisher,
                    doc.author,
                    doc.subtitle,
                    doc.code
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
                  ]
                } else {
                  search = [doc.title, doc.publisher, doc.author, doc.subtitle, doc.code]
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
                <div key={doc.uid}>
                  <DocumentListItem
                    doc={doc}
                    showModal={() => {
<<<<<<< HEAD
                      if (doc.category === "k2methods") {
                        this.props.showModal({
                          modalType: METHOD,
                          modalProps: { title: "Edit K2 Method", doc: doc }
                        });
                      } else {
                        this.props.showModal({
                          modalType: DOCUMENT,
                          modalProps: { title: "Edit Document", doc: doc }
                        });
                      }
                    }}
                    deleteDocument={() => {
                      if (doc.category === "k2methods") {
                        if (
                          window.confirm(
                            `Are you sure you wish to delete the K2 Method '${
                              doc.title
                            }'?`
                          )
                        ) {
                          if (
                            window.confirm(
                              `Are you 100% sure? (This action cannot be undone)`
                            )
                          )
                            methodsRef.doc(doc.uid).delete();
                        }
                      } else {
                        if (
                          window.confirm(
                            `Are you sure you wish to delete the document '${
                              doc.title
                            }'?`
                          )
                        )
                          docsRef.doc(doc.uid).delete();
                      }
                    }}
                    editor={
                      doc.category === "k2methods"
                        ? this.props.me.auth["Method Editor"]
                        : this.props.me.auth["Document Editor"]
                    }
                  />
                </div>
              );
=======
                      if (doc.category === 'k2methods') {
                        this.props.showModal({
                          modalType: METHOD,
                          modalProps: { title: 'Edit K2 Method', doc: doc }
                        })
                      } else {
                        this.props.showModal({
                          modalType: DOCUMENT,
                          modalProps: { title: 'Edit Document', doc: doc }
                        })
                      }
                    }}
                    deleteDocument={() => {
                      if (doc.category === 'k2methods') {
                        if (window.confirm(`Are you sure you wish to delete the K2 Method '${doc.title}'?`)) {
                          if (window.confirm(`Are you 100% sure? (This action cannot be undone)`)) methodsRef.doc(doc.uid).delete()
                        }
                      } else {
                        if (window.confirm(`Are you sure you wish to delete the document '${doc.title}'?`)) docsRef.doc(doc.uid).delete()
                      }
                    }}
                    editor={doc.category === 'k2methods' ? this.props.me.auth['Method Editor'] : this.props.me.auth['Document Editor']}
                  />
                </div>
              )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            })}
        </List>
      </div>
    )
  }
}

<<<<<<< HEAD
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
=======
export default connect(mapStateToProps, mapDispatchToProps)(Library)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
