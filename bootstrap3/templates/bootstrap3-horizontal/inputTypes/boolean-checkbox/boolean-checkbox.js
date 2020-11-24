/* global AutoForm */
import { Template } from 'meteor/templating'

Template['afCheckbox_bootstrap3-horizontal'].helpers({
  attsPlusSpecialClass: function () {
    let atts = { ...this.atts }
    atts = AutoForm.Utility.addClass(atts, 'autoform-checkbox-margin-fix')
    return atts
  },
  useLeftLabel: function () {
    return this.atts.leftLabel
  }
})
