module.exports = {
  root: true,
  extends: [
    require.resolve('@gera2ld/plaid/eslint'),
    require.resolve('@gera2ld/plaid-react/eslint/react'),
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    react: {
      pragma: 'h',
    },
  },
  globals: {
    VM: true,
    GM_addStyle: true,
    GM_getValue: true,
    GM_setValue: true,
    GM_setClipboard: true,
    GM_registerMenuCommand: true,
  },
  rules: {
    'react/no-danger': 'off',
  },
};
