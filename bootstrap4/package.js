/* eslint-env meteor */
Package.describe({
  name: 'mcp:autoform-bootstrap4',
  version: '1.0.3',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap 4 theme for aldeed:autoform',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:Meteor-Community-Packages/meteor-autoform-themes.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  // api.versionsFrom('1.7.0.3')
  api.use('ecmascript')
  api.use([
    'templating@1.3.2',
    'aldeed:autoform'
  ], 'client');

  // By default we add the whole theme to the client bundle.
  // By using the env variable below we can, however allow dynamic imports
  if (!process.env.AUTOFORM_DYNAMIC_IMPORTS) {
    api.addFiles([
      'helpers.js',
      'templates/bootstrap4/index.js',
      'templates/bootstrap4-inline/bootstrap4-inline.js'
    ], 'client');
  } else {
    api.use('dynamic-import');
    api.mainModule('autoform-bootstrap4.js', 'client');
  }
})
