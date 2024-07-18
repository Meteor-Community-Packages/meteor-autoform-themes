/* eslint-env meteor */
Package.describe({
  name: 'communitypackages:autoform-bootstrap4',
  version: '2.0.0-rc.2',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap 4 theme for aldeed:autoform',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:Meteor-Community-Packages/meteor-autoform-themes.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom(['1.3', '2.7.3', '3.0.1'])
  api.use('ecmascript')
  api.use([
    'templating',
    'aldeed:autoform@6.0.0 || 7.0.0 || 8.0.0-rc.3'
  ], 'client')

  api.mainModule('autoform-bootstrap4.js', 'client')
})
