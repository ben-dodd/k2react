<<<<<<< HEAD
import React from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { numericAndLessThanOnly, } from '../actions/helpers';
=======
import React from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import { numericAndLessThanOnly } from '../actions/helpers'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class TextyBox extends React.Component {
  state = {
    val: false,
<<<<<<< HEAD
    sampleNumber: null,
  };
=======
    sampleNumber: null
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  UNSAFE_componentWillMount() {
    if (this.props.sample)
      this.setState({
<<<<<<< HEAD
        sample: this.props.sample.sampleNumber,
      });
  }

    // <TextyBox that={this} sample={sample} base={null} field={'labComments'} label={null} helperText={'Note description of the material or any additional observations or comments. This will not be displayed on the certificate.'} multiline={true} rows={null} end={null} start={null} numericOnly={false} />

  render() {
    const { that, sample, base, field, label, helperText, multiline, rows, end, start, numericOnly, dp, initState } = this.props;

    if (sample.sampleNumber !== this.state.sampleNumber) this.setState({
      val: false,
      sampleNumber: sample.sampleNumber,
    });
=======
        sample: this.props.sample.sampleNumber
      })
  }

  // <TextyBox that={this} sample={sample} base={null} field={'labComments'} label={null} helperText={'Note description of the material or any additional observations or comments. This will not be displayed on the certificate.'} multiline={true} rows={null} end={null} start={null} numericOnly={false} />

  render() {
    const { that, sample, base, field, label, helperText, multiline, rows, end, start, numericOnly, dp, initState } = this.props

    if (sample.sampleNumber !== this.state.sampleNumber)
      this.setState({
        val: false,
        sampleNumber: sample.sampleNumber
      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return (
      <TextField
        id={field}
<<<<<<< HEAD
        value={this.state.val !== false ? this.state.val : base ?
          (sample[base] && sample[base][field]) ? sample[base][field] : ''
          :
          sample[field] ? sample[field] : ''
        }
        label={label}
        style={{ width: '100%'}}
=======
        value={
          this.state.val !== false
            ? this.state.val
            : base
              ? sample[base] && sample[base][field]
                ? sample[base][field]
                : ''
              : sample[field]
                ? sample[field]
                : ''
        }
        label={label}
        style={{ width: '100%' }}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        helperText={helperText}
        multiline={multiline}
        rows={rows}
        InputProps={{
<<<<<<< HEAD
          endAdornment: end ? <InputAdornment position="end">{end}</InputAdornment> : null,
        }}
        onChange={e => {
          this.setState({
            val: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value,
          });
=======
          endAdornment: end ? <InputAdornment position='end'>{end}</InputAdornment> : null
        }}
        onChange={(e) => {
          this.setState({
            val: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value
          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

          if (base) {
            that.setState({
              changes: {
                ...that.state.changes,
                [base]: {
                  ...that.state.changes[base],
<<<<<<< HEAD
                  [field]: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value,
                },
              }
            });
=======
                  [field]: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value
                }
              }
            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          } else {
            that.setState({
              changes: {
                ...that.state.changes,
<<<<<<< HEAD
                [field]: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value,
              }
            });
          }
        }}
      />
    );
  }
}

export default TextyBox;
=======
                [field]: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value
              }
            })
          }
        }}
      />
    )
  }
}

export default TextyBox
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
