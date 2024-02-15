<<<<<<< HEAD
import React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

class MultiSingleQuestion extends React.Component {
  constructor(props) {
    super(props);
=======
import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

class MultiSingleQuestion extends React.Component {
  constructor(props) {
    super(props)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    this.state = {
      value: this.props.q.selected,
      options: []
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    // this.onChanged = this.onChanged.bind(this);
  }

  UNSAFE_componentWillMount() {
    // const shuffledcorrect = this.props.q.correct.sort(() => .5 - Math.random());
<<<<<<< HEAD
    const shuffledincorrect = this.props.q.incorrect.sort(
      () => 0.5 - Math.random()
    );
    let opt = shuffledincorrect
      .slice(0, this.props.q.numberofoptions - 1)
      .concat(this.props.q.correct)
      .sort(() => 0.5 - Math.random());
    this.setState({
      options: opt
    });
=======
    const shuffledincorrect = this.props.q.incorrect.sort(() => 0.5 - Math.random())
    let opt = shuffledincorrect
      .slice(0, this.props.q.numberofoptions - 1)
      .concat(this.props.q.correct)
      .sort(() => 0.5 - Math.random())
    this.setState({
      options: opt
    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  // onChanged = e => {
  //   this.setState({ value: e.target.value });
  // };

  render() {
<<<<<<< HEAD
    const { q } = this.props;

    return (
      <div style={{ marginTop: 24 }}>
        <FormControl component="fieldset">
          {q.image && (
            <img
              alt=""
              src={q.image}
              height="300"
              style={{ borderRadius: 16 }}
            />
          )}
          <FormLabel component="legend"> {q.question}</FormLabel>
          <RadioGroup
            name={q.uid}
            value={q.selected}
            onChange={this.props.onChanged}
          >
            {this.state.options.map(opt => {
              if (typeof opt === "object") {
                opt = opt.text;
              }
              return (
                <FormControlLabel
                  key={opt}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                />
              );
=======
    const { q } = this.props

    return (
      <div style={{ marginTop: 24 }}>
        <FormControl component='fieldset'>
          {q.image && <img alt='' src={q.image} height='300' style={{ borderRadius: 16 }} />}
          <FormLabel component='legend'> {q.question}</FormLabel>
          <RadioGroup name={q.uid} value={q.selected} onChange={this.props.onChanged}>
            {this.state.options.map((opt) => {
              if (typeof opt === 'object') {
                opt = opt.text
              }
              return <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            })}
          </RadioGroup>
        </FormControl>
        <hr />
      </div>
<<<<<<< HEAD
    );
  }
}

export default MultiSingleQuestion;
=======
    )
  }
}

export default MultiSingleQuestion
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
