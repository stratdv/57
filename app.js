const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-latest')
const pageId = require('spike-page-id')

module.exports = {
  devtool: 'source-map',
  vendor: 'assets/vendor/**',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: [
    '**/layout.sgr',
    '**/_*',
    '**/.*',
    '**/readme.md',
    'readme.md'
  ],
  reshape: (ctx) => {
    return htmlStandards({
      webpack: ctx,
      locals: { pageId: pageId(ctx) }
    })
  },
  postcss: (ctx) => {
    return cssStandards({ webpack: ctx })
  },
  babel: { presets: [jsStandards] },
  server: { open: false }
}
