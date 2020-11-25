import { AutoFormPlainTheme } from './autoform-plain'

/**
 * Dynamically loads all Templates of this theme, returns a Promise.
 * @returns {Promise} A promise that resolves all imported Templates
 */
AutoFormPlainTheme.load = function load () {
  require('./templates/plain/components/quickForm/quickForm.html')
  require('./templates/plain/components/quickForm/quickForm.js')
  require('./templates/plain/components/afArrayField/afArrayField.html')
  require('./templates/plain/components/afFormGroup/afFormGroup.html')
  require('./templates/plain/components/afObjectField/afObjectField.html')
  require('./templates/plain/components/afObjectField/afObjectField.js')
  // plain-fieldset Template
  require('./templates/plain-fieldset/plain-fieldset.html')
  require('./templates/plain-fieldset/plain-fieldset.js')
}

export { AutoFormPlainTheme }
