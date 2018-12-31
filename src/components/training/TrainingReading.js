import React from 'react';

import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import OpenIcon from '@material-ui/icons/OpenInNew';
import QuizWidget from './QuizWidget';


function TrainingReading(props) {
  const { link } = props;
  const checked = Math.random() < 0.5;
  var color = '#338a69';
  var path = link.link;
  if (path === '') path = '/';
  if (link.required) color='#ff5733';
  if (checked) color='#aaa';

  if (link.type === 'method') path = '/method/' + link.link;
  else if (link.type === 'reading') path = '/document/' + link.link;

  return (
    <ListItem button>
      <ListItemText primary={link.title} secondary={link.text} />
    </ListItem>
  );
}

export default TrainingReading;
