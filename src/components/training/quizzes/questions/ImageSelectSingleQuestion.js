<<<<<<< HEAD
import React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

class ImageSelectSingleQuestion extends React.Component {
  constructor(props) {
    super(props);
=======
import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

class ImageSelectSingleQuestion extends React.Component {
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
<<<<<<< HEAD
    const shuffledincorrect = this.props.q.incorrect.sort(
      () => 0.5 - Math.random()
    );
    let opt = shuffledincorrect
      .slice(0, this.props.q.numberofoptions - 1)
      .concat(this.props.q.correct)
      .sort(() => 0.5 - Math.random());
    this.setState({
      options: opt.map(o => {
        return o.src;
      })
    });
=======
    const shuffledincorrect = this.props.q.incorrect.sort(() => 0.5 - Math.random())
    let opt = shuffledincorrect
      .slice(0, this.props.q.numberofoptions - 1)
      .concat(this.props.q.correct)
      .sort(() => 0.5 - Math.random())
    this.setState({
      options: opt.map((o) => {
        return o.src
      })
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
          <FormLabel component="legend"> {q.question}</FormLabel>
          <RadioGroup
            name={q.uid}
            value={q.selected}
            onChange={this.props.onChanged}
          >
            {this.state.options.map(src => {
=======
    const { q } = this.props

    return (
      <div style={{ marginTop: 24 }}>
        <FormControl component='fieldset'>
          <FormLabel component='legend'> {q.question}</FormLabel>
          <RadioGroup name={q.uid} value={q.selected} onChange={this.props.onChanged}>
            {this.state.options.map((src) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              return (
                <FormControlLabel
                  key={src}
                  value={src}
                  control={<Radio />}
<<<<<<< HEAD
                  label={
                    <img
                      alt="Option"
                      src={src}
                      width={q.width}
                      height={q.height}
                    />
                  }
                />
              );
=======
                  label={<img alt='Option' src={src} width={q.width} height={q.height} />}
                />
              )
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

export default ImageSelectSingleQuestion;
=======
    )
  }
}

export default ImageSelectSingleQuestion
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
