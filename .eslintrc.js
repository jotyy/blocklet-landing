const { join } = require('path');

module.exports = {
  root: true,
  extends: ['@arcblock/eslint-config-ts'],
  parserOptions: {
    project: [join(__dirname, 'tsconfig.eslint.json'), join(__dirname, 'tsconfig.json')],
  },
  rules: {
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'import/order': 'off',
  },
};
