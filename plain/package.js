Package.describe({
  name: 'mcp:autoform-plain',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Plain theme for aldeed:autoform',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:Meteor-Community-Packages/meteor-autoform-themes.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  //  api.versionsFrom('1.8.2');
  api.use('ecmascript');
  api.use('templating');
  api.use('aldeed:autoform');

  // By default we add the whole theme to the client bundle.
  // By using the env variable below we can, however allow dynamic imports
  if (!process.env.AUTOFORM_DYNAMIC_IMPORTS) {
    api.addFiles([
      // plain Template
      'templates/plain/components/quickForm/quickForm.html',
      'templates/plain/components/quickForm/quickForm.js',
      'templates/plain/components/afArrayField/afArrayField.html',
      'templates/plain/components/afFormGroup/afFormGroup.html',
      'templates/plain/components/afObjectField/afObjectField.html',
      'templates/plain/components/afObjectField/afObjectField.js',
      // plain-fieldset Template
      'templates/plain-fieldset/plain-fieldset.html',
      'templates/plain-fieldset/plain-fieldset.js',
    ], 'client');
  } else {
    api.use('dynamic-import');
    api.mainModule('autoform-plain.js');
  }
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('akoerp:autoform-plain');
  api.mainModule('autoform-plain-tests.js');
});
