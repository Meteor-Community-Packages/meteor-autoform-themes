/* global AutoForm */
import { Template } from 'meteor/templating'

Template['afArrayField_bootstrap3-horizontal'].helpers({
  rightColumnClass: function () {
    const atts = this.atts || {}
    return atts['input-col-class'] || ''
  },
  afFieldLabelAtts: function () {
    // Use only atts beginning with label-
    let labelAtts = {}
    Object.entries(this.atts).forEach(function ([key, val]) {
      if (key.indexOf('label-') === 0) {
        labelAtts[key.substring(6)] = val
      }
    })
    // Add bootstrap class
    labelAtts = AutoForm.Utility.addClass(labelAtts, 'control-label')
    return labelAtts
  }
})
