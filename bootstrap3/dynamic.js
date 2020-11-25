import { AutoFormThemeBootstrap3 } from './autoform-bootstrap3'

AutoFormThemeBootstrap3.load = function () {
  return Promise.all([
    // bootstrap3 Template - General
    import('./templates/bootstrap3/bootstrap3.js'),
    // bootstrap3 Template - Components
    import('./templates/bootstrap3/components/quickForm/quickForm.html'),
    import('./templates/bootstrap3/components/quickForm/quickForm.js'),
    import('./templates/bootstrap3/components/afArrayField/afArrayField.html'),
    import('./templates/bootstrap3/components/afArrayField/afArrayField.js'),
    import('./templates/bootstrap3/components/afArrayField/afArrayField.css'),
    import('./templates/bootstrap3/components/afFormGroup/afFormGroup.html'),
    import('./templates/bootstrap3/components/afFormGroup/afFormGroup.js'),
    import('./templates/bootstrap3/components/afObjectField/afObjectField.html'),
    import('./templates/bootstrap3/components/afObjectField/afObjectField.js'),
    // bootstrap3 Template - Input Types
    import('./templates/bootstrap3/inputTypes/boolean-checkbox/boolean-checkbox.html'),
    import('./templates/bootstrap3/inputTypes/boolean-radios/boolean-radios.html'),
    import('./templates/bootstrap3/inputTypes/boolean-radios/boolean-radios.js'),
    import('./templates/bootstrap3/inputTypes/boolean-select/boolean-select.html'),
    import('./templates/bootstrap3/inputTypes/button/button.html'),
    import('./templates/bootstrap3/inputTypes/color/color.html'),
    import('./templates/bootstrap3/inputTypes/date/date.html'),
    import('./templates/bootstrap3/inputTypes/datetime/datetime.html'),
    import('./templates/bootstrap3/inputTypes/datetime-local/datetime-local.html'),
    import('./templates/bootstrap3/inputTypes/email/email.html'),
    import('./templates/bootstrap3/inputTypes/month/month.html'),
    import('./templates/bootstrap3/inputTypes/number/number.html'),
    import('./templates/bootstrap3/inputTypes/password/password.html'),
    import('./templates/bootstrap3/inputTypes/radio/radio.html'),
    import('./templates/bootstrap3/inputTypes/radio/radio.js'),
    import('./templates/bootstrap3/inputTypes/range/range.html'),
    import('./templates/bootstrap3/inputTypes/reset/reset.html'),
    import('./templates/bootstrap3/inputTypes/search/search.html'),
    import('./templates/bootstrap3/inputTypes/select/select.html'),
    import('./templates/bootstrap3/inputTypes/select-checkbox/select-checkbox.html'),
    import('./templates/bootstrap3/inputTypes/select-checkbox/select-checkbox.js'),
    import('./templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.html'),
    import('./templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.js'),
    import('./templates/bootstrap3/inputTypes/select-checkbox-inline/select-checkbox-inline.css'),
    import('./templates/bootstrap3/inputTypes/select-multiple/select-multiple.html'),
    import('./templates/bootstrap3/inputTypes/select-radio/select-radio.html'),
    import('./templates/bootstrap3/inputTypes/select-radio/select-radio.js'),
    import('./templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.html'),
    import('./templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.js'),
    import('./templates/bootstrap3/inputTypes/select-radio-inline/select-radio-inline.css'),
    import('./templates/bootstrap3/inputTypes/submit/submit.html'),
    import('./templates/bootstrap3/inputTypes/tel/tel.html'),
    import('./templates/bootstrap3/inputTypes/text/text.html'),
    import('./templates/bootstrap3/inputTypes/textarea/textarea.html'),
    import('./templates/bootstrap3/inputTypes/time/time.html'),
    import('./templates/bootstrap3/inputTypes/url/url.html'),
    import('./templates/bootstrap3/inputTypes/week/week.html'),
    // bootstrap3-horizontal Template - General
    import('./templates/bootstrap3-horizontal/bootstrap3-horizontal.css'),
    // bootstrap3-horizontal Template - Components
    import('./templates/bootstrap3-horizontal/components/quickForm/quickForm.html'),
    import('./templates/bootstrap3-horizontal/components/quickForm/quickForm.js'),
    import('./templates/bootstrap3-horizontal/components/afArrayField/afArrayField.html'),
    import('./templates/bootstrap3-horizontal/components/afArrayField/afArrayField.js'),
    import('./templates/bootstrap3-horizontal/components/afFormGroup/afFormGroup.html'),
    import('./templates/bootstrap3-horizontal/components/afFormGroup/afFormGroup.js'),
    import('./templates/bootstrap3-horizontal/components/afObjectField/afObjectField.html'),
    import('./templates/bootstrap3-horizontal/components/afObjectField/afObjectField.js'),
    // bootstrap3-horizontal Template - Input Types
    import('./templates/bootstrap3-horizontal/inputTypes/boolean-checkbox/boolean-checkbox.html'),
    import('./templates/bootstrap3-horizontal/inputTypes/boolean-checkbox/boolean-checkbox.js'),
    // bootstrap3-inline Template
    import('./templates/bootstrap3-inline/bootstrap3-inline.html'),
    import('./templates/bootstrap3-inline/bootstrap3-inline.js'),
    import('./templates/bootstrap3-inline/bootstrap3-inline.css')
  ])
}

export { AutoFormThemeBootstrap3 }
