<<<<<<< HEAD
import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

function QuestionList(props) {
  const { question } = props;
=======
import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'

function QuestionList(props) {
  const { question } = props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  return (
    <div>
      <ListItem dense button onClick={props.showModal}>
        <ListItemText
          primary={question.question}
<<<<<<< HEAD
          secondary={
            (question.tags
              ? question.tags.map(tag => tag.text).join(", ") + " "
              : "") +
            "(" +
            question.type +
            ")"
          }
        />
        {props.editor && (
          <ListItemSecondaryAction>
            <IconButton aria-label="Add" onClick={props.addToQuiz}>
              <AddIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={props.deleteQuestion}>
=======
          secondary={(question.tags ? question.tags.map((tag) => tag.text).join(', ') + ' ' : '') + '(' + question.type + ')'}
        />
        {props.editor && (
          <ListItemSecondaryAction>
            <IconButton aria-label='Add' onClick={props.addToQuiz}>
              <AddIcon />
            </IconButton>
            <IconButton aria-label='Delete' onClick={props.deleteQuestion}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </div>
<<<<<<< HEAD
  );
}

export default QuestionList;
=======
  )
}

export default QuestionList
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
