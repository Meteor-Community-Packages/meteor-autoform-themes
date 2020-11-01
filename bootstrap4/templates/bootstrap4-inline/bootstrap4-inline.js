/* global AutoForm */
import { Template } from 'meteor/templating'
import './bootstrap4-inline.html'

Template['quickForm_bootstrap4-inline'].helpers({
  submitButtonAtts: function () {
    const qfAtts = this.atts
    const atts = {}
    if (typeof qfAtts.buttonClasses === 'string') {
      atts.class = qfAtts.buttonClasses
    } else {
      atts.class = 'btn btn-primary autoform-inline-align'
    }
    return atts
  },
  qfAutoFormContext: function () {
    let ctx = { ...this.qfAutoFormContext }
    ctx = AutoForm.Utility.addClass(ctx, 'form-inline')

    // label-class attribute is unique to this template so it will
    // not have been removed by AutoForm core. We remove it from the autoForm context
    // because it is an attribute supported only by quickFields, quickField,
    // afObjectField, afArrayField, and afFormGroup.
    delete ctx['label-class']

    return ctx
  },
  quickFieldsAtts: function () {
    // These are the quickForm attributes that we want to forward to
    // the afQuickFields component.
    const { 'id-prefix': IdPrefix, 'label-class': labelClass } = this.atts
    return { 'id-prefix': IdPrefix, 'label-class': labelClass }
  }
})

Template['afFormGroup_bootstrap4-inline'].helpers({
  afFieldInputAtts: function () {
    const atts = Object.assign({}, this.afFieldInputAtts)
    // Use the same templates as those defined for bootstrap4 template.
    atts.template = 'bootstrap4'
    return atts
  }
})
