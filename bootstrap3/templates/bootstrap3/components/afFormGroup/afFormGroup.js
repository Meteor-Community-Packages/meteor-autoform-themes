/* global AutoForm */
import { Template } from 'meteor/templating'

Template.afFormGroup_bootstrap3.helpers({
  skipLabel: function bsFormGroupSkipLabel () {
    const self = this

    const type = AutoForm.getInputType(self.afFieldInputAtts)
    return (self.skipLabel || type === 'boolean-checkbox')
  },
  bsFieldLabelAtts: function bsFieldLabelAtts () {
    let atts = { ...this.afFieldLabelAtts }
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, 'control-label')
    return atts
  }
})
