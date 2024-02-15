<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";

import { connect } from "react-redux";
import { fetchReadingLog } from "../../actions/local";
import ReadingLogListItem from "./components/ReadingLogListItem";

const mapStateToProps = state => {
  return {
    logs: state.local.me.readingLog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReadingLog: () => dispatch(fetchReadingLog())
  };
};

class TrainingReadingLog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'

import { connect } from 'react-redux'
import { fetchReadingLog } from '../../actions/local'
import ReadingLogListItem from './components/ReadingLogListItem'

const mapStateToProps = (state) => {
  return {
    logs: state.local.me.readingLog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReadingLog: () => dispatch(fetchReadingLog())
  }
}

class TrainingReadingLog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  UNSAFE_componentWillMount() {
    //console.log(this.props.logs);
<<<<<<< HEAD
    if (this.props.logs === undefined || this.props.logs.length < 1)
      this.props.fetchReadingLog();
  }

  render() {
    const { logs } = this.props;
=======
    if (this.props.logs === undefined || this.props.logs.length < 1) this.props.fetchReadingLog()
  }

  render() {
    const { logs } = this.props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    //console.log(logs);
    return (
      <div style={{ marginTop: 80 }}>
        {logs &&
<<<<<<< HEAD
          logs.map(log => {
            //console.log("Read log: " + log.title);
            return <ReadingLogListItem log={log} key={log.uid} />;
          })}
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrainingReadingLog)
);
=======
          logs.map((log) => {
            //console.log("Read log: " + log.title);
            return <ReadingLogListItem log={log} key={log.uid} />
          })}
      </div>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TrainingReadingLog))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
