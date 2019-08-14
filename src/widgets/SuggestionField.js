import React from 'react';
import { connect } from "react-redux";

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import deburr from 'lodash/deburr';

const mapStateToProps = state => {
  return {
    genericLocationSuggestions: state.const.genericLocationSuggestions,
    specificLocationSuggestions: state.const.specificLocationSuggestions,
    descriptionSuggestions: state.const.asbestosDescriptionSuggestions,
    materialSuggestions: state.const.asbestosMaterialSuggestions,
   };
};

const handleSuggestionFetchRequested = (that, suggestions, value) => {
  console.log(value);
  that.setState({
    suggestions: getSuggestions(value, suggestions, that),
  });
};

const getSuggestionValue = suggestion => suggestion.label;

const handleSuggestionsClearRequested = (that, suggestions) => {
  that.setState({
    suggestions: [],
  });
};


const renderInputComponent = (inputProps) => {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
      }}
      {...other}
    />
  );
}

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

const getSuggestions = (value, suggestions, that) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : that.props[suggestions].filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().includes(inputValue);
          // count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

// export const SuggestionField = (that, disabled, label, suggestions, value, onModify) => {
class SuggestionField extends React.PureComponent {
  state = {
    suggestions: [],
    value: '',
  };

  componentWillMount = () => {
    this.setState({
      suggestions: [],
      value: this.props.defaultValue,
    })
  };

  render() {
    const autosuggestProps = {
      renderInputComponent,
      getSuggestionValue,
      renderSuggestion,
      theme: {
        container: { position: 'relative',},
        suggestionsContainerOpen: {position: 'absolute', zIndex: 2, marginTop: 8, left: 0, right: 0, },
        suggestionsList: {margin: 0, padding: 0, listStyleType: 'none', },
        suggestion: {display: 'block', },
      },
    };

    return (<Autosuggest
      {...autosuggestProps}
      suggestions = {this.state.suggestions}
      onSuggestionSelected = {(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        this.setState({
          value: suggestionValue,
          suggestions: [],
        });
        this.props.onModify(suggestionValue);
      }}
      inputProps={{
        disabled: this.props.disabled,
        value: this.state.value ? this.state.value : '',
        onChange: e => this.setState({ value: e.target.value }),
        onBlur: e => {this.props.onModify(e.target.value)},
        label: this.props.label,
      }}
      theme={{
        container: { position: 'relative',},
        suggestionsContainerOpen: {position: 'absolute', zIndex: 2, marginTop: 8, left: 0, right: 0, },
        suggestionsList: {margin: 0, padding: 0, listStyleType: 'none', },
        suggestion: {display: 'block', },
      }}
      onSuggestionsFetchRequested={({value, reason}) => {
        handleSuggestionFetchRequested(this, this.props.suggestions, value)
      }}
      onSuggestionsClearRequested={() => handleSuggestionsClearRequested(this, this.props.suggestions)}
      renderSuggestionsContainer={options => (
        <Paper {...options.containerProps} square>
          {options.children}
        </Paper>
      )}
    />);
  }
}

export default connect(
    mapStateToProps,
    null
  )(SuggestionField);

export const SuggestionFieldSample = (that, disabled, label, field) => {
  const value = that.state.sample[field];
  const suggestions = `${field}Suggestions`;
  const autosuggestProps = {
    renderInputComponent,
    getSuggestionValue,
    renderSuggestion,
    theme: {
      container: { position: 'relative',},
      suggestionsContainerOpen: {position: 'absolute', zIndex: 2, marginTop: 8, left: 0, right: 0, },
      suggestionsList: {margin: 0, padding: 0, listStyleType: 'none', },
      suggestion: {display: 'block', },
    },
  };
  return (<Autosuggest
    {...autosuggestProps}
    suggestions = {that.state[suggestions]}
    onSuggestionSelected = {(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
      that.setState({
        modified: true,
        sample: {
          ...that.state.sample,
          [field]: suggestionValue,
        }
      });
    }}
    inputProps={{
      disabled: disabled,
      value: value ? value : '',
      onChange: e => {
        that.setState({
          modified: true,
          sample: {
            ...that.state.sample,
            [field]: e.target.value,
          }
        });
      },
      label: label,
    }}
    theme={{
      container: { position: 'relative',},
      suggestionsContainerOpen: {position: 'absolute', zIndex: 2, marginTop: 8, left: 0, right: 0, },
      suggestionsList: {margin: 0, padding: 0, listStyleType: 'none', },
      suggestion: {display: 'block', },
    }}
    onSuggestionsFetchRequested={({value, reason}) => {
      handleSuggestionFetchRequested(that, suggestions, value)
    }}
    onSuggestionsClearRequested={() => handleSuggestionsClearRequested(that, suggestions)}
    renderSuggestionsContainer={options => (
      <Paper {...options.containerProps} square>
        {options.children}
      </Paper>
    )}
  />);
}

export const SuggestionFieldSamples = (that, sampleNumber, disabled, label, field) => {
  const value = that.state.samples[sampleNumber][field];
  const suggestions = `${field}Suggestions`;
  const autosuggestProps = {
    renderInputComponent,
    getSuggestionValue,
    renderSuggestion,
    theme: {
      container: { position: 'relative',},
      suggestionsContainerOpen: {position: 'absolute', zIndex: 2, marginTop: 8, left: 0, right: 0, },
      suggestionsList: {margin: 0, padding: 0, listStyleType: 'none', },
      suggestion: {display: 'block', },
    },
  };
  return (<Autosuggest
    {...autosuggestProps}
    suggestions = {that.state[suggestions]}
    onSuggestionSelected = {(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
      that.setState({
        modified: true,
        samples: {
          ...that.state.samples,
          [sampleNumber]: {
            ...that.state.samples[sampleNumber],
            [field]: suggestionValue,
          },
        },
      });
    }}
    inputProps={{
      disabled: disabled,
      value: value ? value : '',
      onChange: e => {
        that.setState({
          modified: true,
          samples: {
            ...that.state.samples,
            [sampleNumber]: {
              ...that.state.samples[sampleNumber],
              [field]: e.target.value,
            },
          },
        });
      },
      label: label,
    }}
    theme={{
      container: { position: 'relative',},
      suggestionsContainerOpen: {position: 'absolute', zIndex: 2, marginTop: 8, left: 0, right: 0, },
      suggestionsList: {margin: 0, padding: 0, listStyleType: 'none', },
      suggestion: {display: 'block', },
    }}
    onSuggestionsFetchRequested={({value, reason}) => {
      handleSuggestionFetchRequested(that, suggestions, value)
    }}
    onSuggestionsClearRequested={() => handleSuggestionsClearRequested(that, suggestions)}
    renderSuggestionsContainer={options => (
      <Paper {...options.containerProps} square>
        {options.children}
      </Paper>
    )}
  />);
}
