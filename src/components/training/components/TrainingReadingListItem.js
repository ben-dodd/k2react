<<<<<<< HEAD
import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function TrainingReading(props) {
  const { link } = props;
  const checked = Math.random() < 0.5;
  var color = "#338a69";
  var path = link.link;
  if (path === "") path = "/";
  if (link.required) color = "#ff5733";
  if (checked) color = "#aaa";

  if (link.type === "method") path = "/method/" + link.link;
  else if (link.type === "reading") path = "/document/" + link.link;
=======
import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function TrainingReading(props) {
  const { link } = props
  const checked = Math.random() < 0.5
  var color = '#338a69'
  var path = link.link
  if (path === '') path = '/'
  if (link.required) color = '#ff5733'
  if (checked) color = '#aaa'

  if (link.type === 'method') path = '/method/' + link.link
  else if (link.type === 'reading') path = '/document/' + link.link
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  return (
    <ListItem button>
      <ListItemText primary={link.title} secondary={link.text} />
    </ListItem>
<<<<<<< HEAD
  );
}

export default TrainingReading;
=======
  )
}

export default TrainingReading
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
