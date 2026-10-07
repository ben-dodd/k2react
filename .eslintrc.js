module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"]
    },
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'no-empty': 'warn',
    'no-constant-condition': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'no-dupe-class-members': 'warn'
  }
}
