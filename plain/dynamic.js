import { AutoFormPlainTheme } from './autoform-plain'

/**
 * Dynamically loads all Templates of this theme, returns a Promise.
 * @returns {Promise} A promise that resolves all imported Templates
 */
AutoFormPlainTheme.load = function load () {
  return Promise.all([
    import('./templates/plain/components/quickForm/quickForm.html'),
    import('./templates/plain/components/quickForm/quickForm.js'),
    import('./templates/plain/components/afArrayField/afArrayField.html'),
    import('./templates/plain/components/afFormGroup/afFormGroup.html'),
    import('./templates/plain/components/afObjectField/afObjectField.html'),
    import('./templates/plain/components/afObjectField/afObjectField.js'),
    // plain-fieldset Template
    import('./templates/plain-fieldset/plain-fieldset.html'),
    import('./templates/plain-fieldset/plain-fieldset.js')
  ])
}

export { AutoFormPlainTheme }
