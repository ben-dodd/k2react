<<<<<<< HEAD

import React from 'react';
import classNames from 'classnames';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { numericAndLessThanOnly, titleCase, } from '../actions/helpers';

export const SampleTickyBox = (that, label, sample, field) => {
  return(<FormControlLabel
    control={
      <Checkbox
        checked={sample[field] ?
          sample[field] :
          false }
        onChange={e => {
          that.setState({
            modified: true,
            sample: {
              ...sample,
              [field]: e.target.checked,
            }
          });
        }}
        value={field}
      />
    }
    label={label}
  />);
};

export const SamplesTickyBox = (that, label, sample, field) => {
  return(<FormControlLabel
    control={
      <Checkbox
        checked={sample[field] ?
          sample[field] :
          false }
        onChange={e => {
          that.setState({
            modified: true,
            samples: {
              ...that.state.samples,
              [sample.sampleNumber]: {
                ...sample,
                [field]: e.target.checked,
              },
            },
          });
        }}
        value={field}
      />
    }
    label={label}
  />);
};

export const SampleTickyBoxGroup = (that, sample, heading, base, options) => {
  return(<div>
          <div style={{
            marginTop: 20,
            marginBottom: 16,
            fontWeight: 300,
            color: '#888',}}>{heading}</div>
          <FormGroup row>
            {options && options.map(opt => {
              if (opt.tooltip !== undefined) {
                return (
                  <Tooltip title={opt.tooltip} key={opt.value}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sample[base] && sample[base][opt.value] === true ?
                          true : false }
                        onChange={e => {
=======
import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormGroup from '@material-ui/core/FormGroup'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import { numericAndLessThanOnly } from '../actions/helpers'

export const SampleTickyBox = (that, label, sample, field) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={sample[field] ? sample[field] : false}
          onChange={(e) => {
            that.setState({
              modified: true,
              sample: {
                ...sample,
                [field]: e.target.checked
              }
            })
          }}
          value={field}
        />
      }
      label={label}
    />
  )
}

export const SamplesTickyBox = (that, label, sample, field) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={sample[field] ? sample[field] : false}
          onChange={(e) => {
            that.setState({
              modified: true,
              samples: {
                ...that.state.samples,
                [sample.sampleNumber]: {
                  ...sample,
                  [field]: e.target.checked
                }
              }
            })
          }}
          value={field}
        />
      }
      label={label}
    />
  )
}

export const SampleTickyBoxGroup = (that, sample, heading, base, options) => {
  return (
    <div>
      <div
        style={{
          marginTop: 20,
          marginBottom: 16,
          fontWeight: 300,
          color: '#888'
        }}
      >
        {heading}
      </div>
      <FormGroup row>
        {options &&
          options.map((opt) => {
            if (opt.tooltip !== undefined) {
              return (
                <Tooltip title={opt.tooltip} key={opt.value}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sample[base] && sample[base][opt.value] === true ? true : false}
                        onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          that.setState({
                            modified: true,
                            sample: {
                              ...sample,
                              [base]: {
                                ...sample[base],
<<<<<<< HEAD
                                [opt.value]: e.target.checked,
                              }
                            }
                          });
=======
                                [opt.value]: e.target.checked
                              }
                            }
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                        value={opt.value}
                      />
                    }
                    label={opt.label}
                  />
<<<<<<< HEAD
              </Tooltip>);
              } else {
                return (
=======
                </Tooltip>
              )
            } else {
              return (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <FormControlLabel
                  key={opt.value}
                  control={
                    <Checkbox
<<<<<<< HEAD
                      checked={sample[base] && sample[base][opt.value] === true ?
                        true : false }
                      onChange={e => {
=======
                      checked={sample[base] && sample[base][opt.value] === true ? true : false}
                      onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        that.setState({
                          modified: true,
                          sample: {
                            ...sample,
                            [base]: {
                              ...sample[base],
<<<<<<< HEAD
                              [opt.value]: e.target.checked,
                            }
                          }
                        });
=======
                              [opt.value]: e.target.checked
                            }
                          }
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                      value={opt.value}
                    />
                  }
                  label={opt.label}
<<<<<<< HEAD
                />);
              }
            }

          )}
          </FormGroup>
          </div>);
};

export const SamplesTickyBoxGroup = (that, sample, heading, base, options) => {
  return(<div>
          <div style={{
            marginTop: 20,
            marginBottom: 16,
            fontWeight: 300,
            color: '#888',}}>{heading}</div>
          <FormGroup row>
            {options && options.map(opt => {
              if (opt.tooltip !== undefined) {
                return (
                  <Tooltip title={opt.tooltip} key={opt.value}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sample[base] && sample[base][opt.value] === true ?
                          true : false }
                        onChange={e => {
=======
                />
              )
            }
          })}
      </FormGroup>
    </div>
  )
}

export const SamplesTickyBoxGroup = (that, sample, heading, base, options) => {
  return (
    <div>
      <div
        style={{
          marginTop: 20,
          marginBottom: 16,
          fontWeight: 300,
          color: '#888'
        }}
      >
        {heading}
      </div>
      <FormGroup row>
        {options &&
          options.map((opt) => {
            if (opt.tooltip !== undefined) {
              return (
                <Tooltip title={opt.tooltip} key={opt.value}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sample[base] && sample[base][opt.value] === true ? true : false}
                        onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          that.setState({
                            modified: true,
                            samples: {
                              ...that.state.samples,
                              [sample.sampleNumber]: {
                                ...sample,
                                [base]: {
                                  ...sample[base],
<<<<<<< HEAD
                                  [opt.value]: e.target.checked,
                                },
                              },
                            },
                          });
=======
                                  [opt.value]: e.target.checked
                                }
                              }
                            }
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                        value={opt.value}
                      />
                    }
                    label={opt.label}
                  />
<<<<<<< HEAD
              </Tooltip>);
              } else {
                return (
=======
                </Tooltip>
              )
            } else {
              return (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <FormControlLabel
                  key={opt.value}
                  control={
                    <Checkbox
<<<<<<< HEAD
                      checked={sample[base] && sample[base][opt.value] === true ?
                        true : false }
                      onChange={e => {
=======
                      checked={sample[base] && sample[base][opt.value] === true ? true : false}
                      onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        that.setState({
                          modified: true,
                          samples: {
                            ...that.state.samples,
                            [sample.sampleNumber]: {
                              ...sample,
                              [base]: {
                                ...sample[base],
<<<<<<< HEAD
                                [opt.value]: e.target.checked,
                              },
                            },
                          },
                        });
=======
                                [opt.value]: e.target.checked
                              }
                            }
                          }
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                      value={opt.value}
                    />
                  }
                  label={opt.label}
<<<<<<< HEAD
                />);
              }
            }

          )}
          </FormGroup>
          </div>);
};

export const SampleTextyBox = (that, sample, field, label, helperText, multiline, rows, end, start) => {
  return(<TextField
    id={field}
    value={sample[field] ? sample[field] : ''}
    label={label}
    style={{ width: '100%'}}
    helperText={helperText}
    multiline={multiline}
    rows={rows}
    InputProps={{
      endAdornment: end ? <InputAdornment position="end">{end}</InputAdornment> : null,
    }}
    onChange={e => {
      that.setState({
        modified: true,
        sample: {
          ...sample,
          [field]: e.target.value,
        }
      });
    }}
  />);
};

export const SamplesTextyBox = (that, sample, field, label, helperText, multiline, rows, end, start, numericOnly, dp) => {
  return(<TextField
    id={field}
    value={sample[field] ? sample[field] : ''}
    label={label}
    style={{ width: '100%'}}
    helperText={helperText}
    multiline={multiline}
    rows={rows}
    InputProps={{
      endAdornment: end ? <InputAdornment position="end">{end}</InputAdornment> : null,
    }}
    onChange={e => {
      that.setState({
        modified: true,
        samples: {
          ...that.state.samples,
          [sample.sampleNumber]: {
            ...sample,
            [field]: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value,
          },
        },
      });
    }}
  />);
};

export const SamplesTextyBoxAlt = (that, sample, base, field, label, helperText, multiline, rows, end, start, numericOnly, dp) => {
  return(<TextField
    id={field}
    value={sample[base] && sample[base][field] ? sample[base][field] : ''}
    label={label}
    style={{ width: '100%'}}
    helperText={helperText}
    multiline={multiline}
    rows={rows}
    InputProps={{
      endAdornment: end ? <InputAdornment position="end">{end}</InputAdornment> : null,
    }}
    onChange={e => {
      that.setState({
        modified: true,
        samples: {
          ...that.state.samples,
          [sample.sampleNumber]: {
            ...sample,
            [base]: {
              ...sample[base],
              [field]: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value,
            },
          },
        },
      });
    }}
  />);
};

export const SampleRadioSelector = (that, sample, field, defaultValue, label, selections, helperText) => {
  return(<FormControl component="fieldset">
    <RadioGroup
      aria-label={label}
      name={field}
      value={sample[field] ? sample[field] : defaultValue }
      row
      onChange={e => {
=======
                />
              )
            }
          })}
      </FormGroup>
    </div>
  )
}

export const SampleTextyBox = (that, sample, field, label, helperText, multiline, rows, end) => {
  return (
    <TextField
      id={field}
      value={sample[field] ? sample[field] : ''}
      label={label}
      style={{ width: '100%' }}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      InputProps={{
        endAdornment: end ? <InputAdornment position='end'>{end}</InputAdornment> : null
      }}
      onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        that.setState({
          modified: true,
          sample: {
            ...sample,
<<<<<<< HEAD
            [field]: e.target.value,
          }
        });
      }}
    >
      {selections && selections.map(select => {
        if (select.tooltip !== undefined) {
          return (<Tooltip key={select.value} title={select.tooltip}><FormControlLabel value={select.value} control={<Radio />} label={select.label} /></Tooltip>);
        } else {
          return (<FormControlLabel key={select.value} value={select.value} control={<Radio />} label={select.label} />);
        }
      }
      )}
    </RadioGroup>
    {helperText && <FormHelperText style={{ width: 500, }}>{helperText}</FormHelperText>}
  </FormControl>);
};

export const SamplesRadioSelector = (that, sample, field, defaultValue, label, selections, helperText) => {
  return(<FormControl component="fieldset">
    <RadioGroup
      aria-label={label}
      name={field}
      value={sample[field] ? sample[field] : defaultValue }
      row
      onChange={e => {
=======
            [field]: e.target.value
          }
        })
      }}
    />
  )
}

export const SamplesTextyBox = (that, sample, field, label, helperText, multiline, rows, end, start, numericOnly, dp) => {
  return (
    <TextField
      id={field}
      value={sample[field] ? sample[field] : ''}
      label={label}
      style={{ width: '100%' }}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      InputProps={{
        endAdornment: end ? <InputAdornment position='end'>{end}</InputAdornment> : null
      }}
      onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        that.setState({
          modified: true,
          samples: {
            ...that.state.samples,
            [sample.sampleNumber]: {
              ...sample,
<<<<<<< HEAD
              [field]: e.target.value,
            },
          },
        });
      }}
    >
      {selections && selections.map(select => {
        if (select.tooltip !== undefined) {
          return (<Tooltip key={select.value} title={select.tooltip}><FormControlLabel value={select.value} control={<Radio />} label={select.label} /></Tooltip>);
        } else {
          return (<FormControlLabel key={select.value} value={select.value} control={<Radio />} label={select.label} />);
        }
      }
      )}
    </RadioGroup>
    {helperText && <FormHelperText style={{ width: 500, }}>{helperText}</FormHelperText>}
  </FormControl>);
};

export const TickyBox = (that, label, ref, obj, field, onClick, disabled) => {
  return(<FormControlLabel
    control={
      <Checkbox
        disabled={disabled}
        checked={obj[field] ?
          obj[field] :
          false }
        onChange={e => {
          ref.doc(obj.uid).update({[field]: e.target.checked});
          onClick(e.target.checked);
        }}
        value={field}
      />
    }
    label={label}
  />);
};
=======
              [field]: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value
            }
          }
        })
      }}
    />
  )
}

export const SamplesTextyBoxAlt = (that, sample, base, field, label, helperText, multiline, rows, end, start, numericOnly, dp) => {
  return (
    <TextField
      id={field}
      value={sample[base] && sample[base][field] ? sample[base][field] : ''}
      label={label}
      style={{ width: '100%' }}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      InputProps={{
        endAdornment: end ? <InputAdornment position='end'>{end}</InputAdornment> : null
      }}
      onChange={(e) => {
        that.setState({
          modified: true,
          samples: {
            ...that.state.samples,
            [sample.sampleNumber]: {
              ...sample,
              [base]: {
                ...sample[base],
                [field]: numericOnly ? numericAndLessThanOnly(e.target.value, dp) : e.target.value
              }
            }
          }
        })
      }}
    />
  )
}

export const SampleRadioSelector = (that, sample, field, defaultValue, label, selections, helperText) => {
  return (
    <FormControl component='fieldset'>
      <RadioGroup
        aria-label={label}
        name={field}
        value={sample[field] ? sample[field] : defaultValue}
        row
        onChange={(e) => {
          that.setState({
            modified: true,
            sample: {
              ...sample,
              [field]: e.target.value
            }
          })
        }}
      >
        {selections &&
          selections.map((select) => {
            if (select.tooltip !== undefined) {
              return (
                <Tooltip key={select.value} title={select.tooltip}>
                  <FormControlLabel value={select.value} control={<Radio />} label={select.label} />
                </Tooltip>
              )
            } else {
              return <FormControlLabel key={select.value} value={select.value} control={<Radio />} label={select.label} />
            }
          })}
      </RadioGroup>
      {helperText && <FormHelperText style={{ width: 500 }}>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export const SamplesRadioSelector = (that, sample, field, defaultValue, label, selections, helperText) => {
  return (
    <FormControl component='fieldset'>
      <RadioGroup
        aria-label={label}
        name={field}
        value={sample[field] ? sample[field] : defaultValue}
        row
        onChange={(e) => {
          that.setState({
            modified: true,
            samples: {
              ...that.state.samples,
              [sample.sampleNumber]: {
                ...sample,
                [field]: e.target.value
              }
            }
          })
        }}
      >
        {selections &&
          selections.map((select) => {
            if (select.tooltip !== undefined) {
              return (
                <Tooltip key={select.value} title={select.tooltip}>
                  <FormControlLabel value={select.value} control={<Radio />} label={select.label} />
                </Tooltip>
              )
            } else {
              return <FormControlLabel key={select.value} value={select.value} control={<Radio />} label={select.label} />
            }
          })}
      </RadioGroup>
      {helperText && <FormHelperText style={{ width: 500 }}>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export const TickyBox = (that, label, ref, obj, field, onClick, disabled) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          disabled={disabled}
          checked={obj[field] ? obj[field] : false}
          onChange={(e) => {
            ref.doc(obj.uid).update({ [field]: e.target.checked })
            onClick(e.target.checked)
          }}
          value={field}
        />
      }
      label={label}
    />
  )
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export const SampleTextyDisplay = (label, text) => {
  return (
    <div>
<<<<<<< HEAD
      <div style={{ fontWeight: 500, }}>{label}</div>
      <div style={{ fontSize: 12, padding: 6, marginBottom: 6, fontStyle: 'italic', }}>{text}</div>
    </div>
  );
=======
      <div style={{ fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: 12, padding: 6, marginBottom: 6, fontStyle: 'italic' }}>{text}</div>
    </div>
  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
}

export const SampleTextyLine = (label, text) => {
  return (
<<<<<<< HEAD
    <div style={{ marginBottom: 6,}}>
      <span style={{ fontWeight: 500, }}>{label}</span>
      <span style={{ fontSize: 12, padding: 12, }}>{text}</span>
    </div>
  );
}

export const AsbButton = (fgColor, bgColor, label, onClick) => {
  let tooltip = 'Chrysotile (white) asbestos';
  if (label === 'am') tooltip = 'Amosite (brown) asbestos';
  else if (label === 'cr') tooltip = 'Crocidolite (blue) asbestos';
  else if (label === 'no') tooltip = 'No asbestos';
  else if (label === 'umf') tooltip = 'Unidentified mineral fibres';
  else if (label === 'org') tooltip = 'Organic fibres (e.g. cellulose)';
  else if (label === 'smf') tooltip = 'Synthetic mineral fibres (e.g. fibreglass, nylon)';
  return ScoreButton(fgColor, bgColor, label.toUpperCase(), tooltip, onClick);
=======
    <div style={{ marginBottom: 6 }}>
      <span style={{ fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: 12, padding: 12 }}>{text}</span>
    </div>
  )
}

export const AsbButton = (fgColor, bgColor, label, onClick) => {
  let tooltip = 'Chrysotile (white) asbestos'
  if (label === 'am') tooltip = 'Amosite (brown) asbestos'
  else if (label === 'cr') tooltip = 'Crocidolite (blue) asbestos'
  else if (label === 'no') tooltip = 'No asbestos'
  else if (label === 'umf') tooltip = 'Unidentified mineral fibres'
  else if (label === 'org') tooltip = 'Organic fibres (e.g. cellulose)'
  else if (label === 'smf') tooltip = 'Synthetic mineral fibres (e.g. fibreglass, nylon)'
  return ScoreButton(fgColor, bgColor, label.toUpperCase(), tooltip, onClick)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
}

export const ScoreButton = (fgColor, bgColor, label, tooltip, onClick) => {
  return (
    <Tooltip title={tooltip} key={label}>
      <div className={bgColor}>
<<<<<<< HEAD
        <Button
          variant="outlined"
          className={fgColor}
          onClick={onClick}
        >
=======
        <Button variant='outlined' className={fgColor} onClick={onClick}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          {label}
        </Button>
      </div>
    </Tooltip>
  )
}
