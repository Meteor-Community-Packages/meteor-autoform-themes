/* eslint-env meteor */
Package.describe({
  name: 'communitypackages:autoform-bootstrap3',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap 3 theme for aldeed:autoform',
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

  if (!process.env.AUTOFORM_DYNAMIC_IMPORTS) {
    api.addFiles([
      // bootstrap3 Template - General
      'templates/bootstrap3/bootstrap3.js',
      // bootstrap3 Template - Components
      'templates/bootstrap3/components/quickForm/quickForm.html',
      'templates/bootstrap3/components/quickForm/quickForm.js',
      'templates/bootstrap3/components/afArrayField/afArrayField.html',
      'templates/bootstrap3/components/afArrayField/afArrayField.js',
      'templates/bootstrap3/components/afArrayField/afArrayField.css',
      'templates/bootstrap3/components/afFormGroup/afFormGroup.html',
      'templates/bootstrap3/components/afFormGroup/afFormGroup.js',
      'templates/bootstrap3/components/afObjectField/afObjectField.html',
      'templates/bootstrap3/components/afObjectField/afObjectField.js',
      // bootstrap3 Template - Input Types
      'templates/bootstrap3/inputTypes/boolean-checkbox/boolean-checkbox.html',
      'templates/bootstrap3/inputTypes/boolean-radios/boolean-radios.html',
      'templates/bootstrap3/inputTypes/boolean-radios/boolean-radios.js',
      'templates/bootstrap3/inputTypes/boolean-select/boolean-select.html',
      'templates/bootstrap3/inputTypes/button/button.html',
      'templates/bootstrap3/inputTypes/color/color.html',
      'templates/bootstrap3/inputTypes/date/date.html',
      'templates/bootstrap3/inputTypes/datetime/datetime.html',
      'templates/bootstrap3/inputTypes/datetime-local/datetime-local.html',
      'templates/bootstrap3/inputTypes/email/email.html',
      'templates/bootstrap3/inputTypes/month/month.html',
      'templates/bootstrap3/inputTypes/number/number.html',
      'templates/bootstrap3/inputTypes/password/password.html',
      'templates/bootstrap3/inputTypes/radio/radio.html',
      'templates/bootstrap3/inputTypes/radio/radio.js',
      'templates/bootstrap3/inputTypes/range/range.html',
      'templates/bootstrap3/inputTypes/reset/reset.html',
      'templates/bootstrap3/inputTypes/search/search.html',
      'templates/bootstrap3/inputTypes/select/select.html',
      'templates/bootstrap3/inputTypes/select-checkbox/select-checkbox.html',
      'templates/bootstrap3/inputTypes/select-checkbox/select-checkbox.js',
      'templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.html',
      'templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.js',
      'templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.css',
      'templates/bootstrap3/inputTypes/select-multiple/select-multiple.html',
      'templates/bootstrap3/inputTypes/select-radio/select-radio.html',
      'templates/bootstrap3/inputTypes/select-radio/select-radio.js',
      'templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.html',
      'templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.js',
      'templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.css',
      'templates/bootstrap3/inputTypes/submit/submit.html',
      'templates/bootstrap3/inputTypes/tel/tel.html',
      'templates/bootstrap3/inputTypes/text/text.html',
      'templates/bootstrap3/inputTypes/textarea/textarea.html',
      'templates/bootstrap3/inputTypes/time/time.html',
      'templates/bootstrap3/inputTypes/url/url.html',
      'templates/bootstrap3/inputTypes/week/week.html',
      // bootstrap3-horizontal Template - General
      'templates/bootstrap3-horizontal/bootstrap3-horizontal.css',
      // bootstrap3-horizontal Template - Components
      'templates/bootstrap3-horizontal/components/quickForm/quickForm.html',
      'templates/bootstrap3-horizontal/components/quickForm/quickForm.js',
      'templates/bootstrap3-horizontal/components/afArrayField/afArrayField.html',
      'templates/bootstrap3-horizontal/components/afArrayField/afArrayField.js',
      'templates/bootstrap3-horizontal/components/afFormGroup/afFormGroup.html',
      'templates/bootstrap3-horizontal/components/afFormGroup/afFormGroup.js',
      'templates/bootstrap3-horizontal/components/afObjectField/afObjectField.html',
      'templates/bootstrap3-horizontal/components/afObjectField/afObjectField.js',
      // bootstrap3-horizontal Template - Input Types
      'templates/bootstrap3-horizontal/inputTypes/boolean-checkbox/boolean-checkbox.html',
      'templates/bootstrap3-horizontal/inputTypes/boolean-checkbox/boolean-checkbox.js',
      // bootstrap3-inline Template
      'templates/bootstrap3-inline/bootstrap3-inline.html',
      'templates/bootstrap3-inline/bootstrap3-inline.js',
      'templates/bootstrap3-inline/bootstrap3-inline.css'
    ], 'client')
  } else {
    api.use('dynamic-import')
    api.mainModule('autoform-bootstrap3.js')
  }
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('communitypackages:autoform-bootstrap3')
  api.mainModule('autoform-bootstrap3-tests.js')
})
