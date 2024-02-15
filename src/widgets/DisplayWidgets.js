<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../config/styles";
import classNames from "classnames";

class AsbestosSampleStatusComponent extends React.Component {
  render() {
    const { classes, status } = this.props;
    const statusMap = {
      inTransit: {
        label: "In Transit",
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../config/styles'
import classNames from 'classnames'

class AsbestosSampleStatusComponent extends React.Component {
  render() {
    const { classes, status } = this.props
    const statusMap = {
      inTransit: {
        label: 'In Transit',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        progress: 0,
        divClass: classes.colorsStart
      },
      received: {
<<<<<<< HEAD
        label: "Received By Lab",
=======
        label: 'Received By Lab',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        progress: 10,
        divClass: classes.colorsReceived
      },
      analysisStarted: {
<<<<<<< HEAD
        label: "Analysis Started",
=======
        label: 'Analysis Started',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        progress: 20,
        divClass: classes.colorsWorkInProgress
      },
      analysisRecorded: {
<<<<<<< HEAD
        label: "Analysis Complete",
=======
        label: 'Analysis Complete',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        progress: 80,
        divClass: classes.colorsWorkComplete
      },
      verified: {
<<<<<<< HEAD
        label: "Result Verified",
        progress: 100,
        divClass: classes.colorsReadyForIssue
      }
    };
    return (
      <div>
        <div
          className={classNames(
            classes.roundButtonLongBlank,
            statusMap[status].divClass
          )}
        >
          {statusMap[status].label.toUpperCase()}
        </div>
      </div>
    );
  }
}

const AsbestosSampleStatus = withStyles(styles)(AsbestosSampleStatusComponent);

export { AsbestosSampleStatus };
=======
        label: 'Result Verified',
        progress: 100,
        divClass: classes.colorsReadyForIssue
      }
    }
    return (
      <div>
        <div className={classNames(classes.roundButtonLongBlank, statusMap[status].divClass)}>{statusMap[status].label.toUpperCase()}</div>
      </div>
    )
  }
}

const AsbestosSampleStatus = withStyles(styles)(AsbestosSampleStatusComponent)

export { AsbestosSampleStatus }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
