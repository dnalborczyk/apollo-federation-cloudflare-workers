'use strict'

const { resolve } = require('node:path')

module.exports = {
  parserOptions: {
    project: [resolve(__dirname, 'tsconfig.json')],
  },
  rules: {
    'no-restricted-exports': 'off',
  },
}
