<<<<<<< HEAD
import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";

function AssetListItem(props) {
  const { doc } = props;
  let secondarytext = `${doc.model} (${doc.manufacturer})`;
=======
import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import { withRouter } from 'react-router-dom'

function AssetListItem(props) {
  const { doc } = props
  let secondarytext = `${doc.model} (${doc.manufacturer})`
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  return (
    <ListItem button>
      <ListItemText primary={`${doc.assetTag}: ${doc.name}`} secondary={secondarytext} />
      <ListItemSecondaryAction>
<<<<<<< HEAD
        <IconButton aria-label="Edit" onClick={null}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete" onClick={null}>
=======
        <IconButton aria-label='Edit' onClick={null}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='Delete' onClick={null}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
<<<<<<< HEAD
  );
}

export default withRouter(AssetListItem);
=======
  )
}

export default withRouter(AssetListItem)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
