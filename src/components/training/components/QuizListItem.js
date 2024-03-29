<<<<<<< HEAD
import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";

function QuizListItem(props) {
  const { quiz } = props;
  const path = "/quiz/" + quiz.link;
  const checked = Math.random() < 0.5;
  var color = "#338a69";
  if (quiz.required) color = "#ff5733";
  if (checked) color = "#aaa";
=======
import React from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'

function QuizListItem(props) {
  const { quiz } = props
  const path = '/quiz/' + quiz.link
  const checked = Math.random() < 0.5
  var color = '#338a69'
  if (quiz.required) color = '#ff5733'
  if (checked) color = '#aaa'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  return (
    <div style={{ padding: 12 }}>
      <hr />
      <div
        style={{
<<<<<<< HEAD
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <Link to={path} style={{ textDecoration: "none" }}>
          <Button style={{ color: color, margin: 12 }} variant="outlined">
            Start Quiz
          </Button>
        </Link>
        <Typography style={{ fontWeight: 600, color: color, fontSize: 22 }}>
          67%
        </Typography>
      </div>
    </div>
  );
}

export default QuizListItem;
=======
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Link to={path} style={{ textDecoration: 'none' }}>
          <Button style={{ color: color, margin: 12 }} variant='outlined'>
            Start Quiz
          </Button>
        </Link>
        <Typography style={{ fontWeight: 600, color: color, fontSize: 22 }}>67%</Typography>
      </div>
    </div>
  )
}

export default QuizListItem
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
