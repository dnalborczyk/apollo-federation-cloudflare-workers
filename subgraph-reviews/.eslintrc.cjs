'use strict'

const { resolve } = require('node:path')

module.exports = {
  parserOptions: {
    project: [resolve(__dirname, 'tsconfig.json')],
  },
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/require-await': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-exports': 'off',
  },
}
