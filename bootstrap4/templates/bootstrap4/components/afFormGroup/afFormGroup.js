/* global AutoForm */
import { Template } from 'meteor/templating'
import { addBootstrap4Class } from '../../../../utils/addBootstrap4Class'
import './afFormGroup.html'

Template.afFormGroup_bootstrap4.helpers({
  skipLabel: function bsFormGroupSkipLabel () {
    const self = this
    const type = AutoForm.getInputType(self.afFieldInputAtts)
    return (self.skipLabel || type === 'boolean-checkbox')
  },
  bsFieldLabelAtts: function bsFieldLabelAtts () {
    return addBootstrap4Class(this.afFieldLabelAtts, 'control-label')
  },
  bsFieldInputAtts () {
    const ctx = AutoForm.getValidationContext()
    const atts = Object.assign({}, this.afFieldInputAtts)
    if (ctx.keyIsInvalid(this.name)) {
      atts.class = atts.class || ''
      atts.class += ' is-invalid'
    }
    return atts
  }
})
