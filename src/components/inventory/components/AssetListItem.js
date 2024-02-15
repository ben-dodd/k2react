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

  return (
    <ListItem button>
      <ListItemText primary={`${doc.assetTag}: ${doc.name}`} secondary={secondarytext} />
      <ListItemSecondaryAction>
        <IconButton aria-label='Edit' onClick={null}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='Delete' onClick={null}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default withRouter(AssetListItem)
