/* global AutoForm */
import { Template } from 'meteor/templating'
import './quickForm.html'

Template.quickForm_bootstrap5.helpers({
  fieldGroupLabel: function () {
    let name = this.name

    // if field group name is of the form XY_abcde where "XY" is a number, remove prefix
    if (!isNaN(parseInt(name.substr(0, 2), 10)) && name.charAt(2) === '_') {
      name = name.substr(3)
    }

    // if SimpleSchema.defaultLabel is defined, use it
    if (AutoForm.SimpleSchema && typeof AutoForm.SimpleSchema.defaultLabel === 'function') {
      return AutoForm.SimpleSchema.defaultLabel(name)
    } else {
      // else, just capitalise name
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  },
  quickFieldsAtts: function () {
    // These are the quickForm attributes that we want to forward to
    // the afQuickFields component.
    const { fields, 'id-prefix': IdPrefix, 'input-col-class': inputColClass, 'label-class': labelClass } = this.atts
    return { fields, 'id-prefix': IdPrefix, 'input-col-class': inputColClass, 'label-class': labelClass }
  },
  submitButtonAtts: function bsQuickFormSubmitButtonAtts () {
    const qfAtts = this.atts
    const atts = {}
    if (typeof qfAtts.buttonClasses === 'string') {
      atts.class = qfAtts.buttonClasses
    } else {
      atts.class = 'btn btn-primary'
    }
    return atts
  }
})
