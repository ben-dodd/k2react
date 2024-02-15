<<<<<<< HEAD
import { createMuiTheme } from "@material-ui/core/styles";

export const colorList = [
  '#a2539c',
  '#e33714',
  '#6fa1b6',
  '#995446',
  '#ff0065',
  '#87cc14',
  '#7d6d26',
];

const palette = {
  primary: {
    dark: "#004c2f",
    main: "#006D44",
    light: "#338a69"
  },
  secondary: {
    dark: "#b21f00",
    main: "#FF2D00",
    light: "#ff5733"
=======
import { createMuiTheme } from '@material-ui/core/styles'

export const colorList = ['#a2539c', '#e33714', '#6fa1b6', '#995446', '#ff0065', '#87cc14', '#7d6d26']

const palette = {
  primary: {
    dark: '#004c2f',
    main: '#006D44',
    light: '#338a69'
  },
  secondary: {
    dark: '#b21f00',
    main: '#FF2D00',
    light: '#ff5733'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  },
  indicators: {
    bad: 'red',
    badText: 'white',
    unclear: 'tomato',
    unclearText: 'black',
    warning: 'gold',
    warningText: 'black',
    strongWarning: 'darkorange',
    strongWarningText: 'black',
    ok: 'lightgreen',
    okText: 'darkgreen',
    benign: 'lightblue',
    benignText: 'blue',
    off: 'white',
<<<<<<< HEAD
    offText: '#ddd',
=======
    offText: '#ddd'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  },
  jobs: {
    workplace: '#a2539c',
    stack: '#e33714',
    other: '#6fa1b6',
    noise: '#995446',
    meth: '#ff0065',
    bio: '#87cc14',
    asbestos: '#7d6d26',
<<<<<<< HEAD
    all: '#555',
  },
  colorList: [
    '#a2539c',
    '#e33714',
    '#6fa1b6',
    '#995446',
    '#ff0065',
    '#87cc14',
    '#7d6d26',
  ],
=======
    all: '#555'
  },
  colorList: ['#a2539c', '#e33714', '#6fa1b6', '#995446', '#ff0065', '#87cc14', '#7d6d26'],
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  app: {
    hover: '#eee',
    hoverHighlight: '#eec',
    highlight: '#ffd',
    disabled: '#ddd',
    shaded: '#aaa',
<<<<<<< HEAD
    shadedHighlighted: '#004c2f',
=======
    shadedHighlighted: '#004c2f'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  },
  stages: {
    start: '#dae9ec',
    startText: 'black',
    received: '#b6d3d9',
    receivedText: 'black',
    workInProgress: '#92bdc6',
    workInProgressText: 'black',
    workComplete: '#6ea7b3',
    workCompleteText: 'white',
    readyForIssue: '#9fefff',
<<<<<<< HEAD
    readyForIssueText: 'black',
=======
    readyForIssueText: 'black'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  },
  stagesGreen: {
    start: '#e7f1ee',
    startText: 'black',
    received: '#b9d7cc',
    receivedText: 'black',
    workInProgress: '#73af99',
    workInProgressText: 'black',
    workComplete: '#2e8766',
    workCompleteText: 'white',
    readyForIssue: '#006d44',
<<<<<<< HEAD
    readyForIssueText: 'white',
  },
};
=======
    readyForIssueText: 'white'
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export default createMuiTheme({
  typography: {
    fontSize: 11,
    useNextVariants: true
  },
  palette: palette,
  overrides: {
    MuiTooltip: {
      tooltip: {
<<<<<<< HEAD
        fontSize: 12,
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 12,
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 12,
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: 12,
        color: '#333',
      },
    },
    MuiTab: {
      root: {
        indicatorColor: palette.secondary.main,
        textColorPrimary: "white"
      }
    },
=======
        fontSize: 12
      }
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 12
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: 12
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: 12,
        color: '#333'
      }
    },
    MuiTab: {
      root: {
        indicatorColor: palette.secondary.main,
        textColorPrimary: 'white'
      }
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    // MuiButton: {
    //   root: {
    //     fontSize: 12,
    //   },
    //   textPrimary: palette.primary.main,
    //   textSecondary: palette.secondary.main,
    // }
  }
<<<<<<< HEAD
});
=======
})
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
