/* eslint-env meteor */
Package.describe({
  name: 'communitypackages:autoform-bootstrap5',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap 5 theme for aldeed:autoform',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:Meteor-Community-Packages/meteor-autoform-themes.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3')
  api.use('ecmascript')
  api.use([
    'templating@1.3.2',
    'aldeed:autoform@6.0.0 || 7.0.0'
  ], 'client')

  api.mainModule('autoform-bootstrap5.js', 'client')
})
