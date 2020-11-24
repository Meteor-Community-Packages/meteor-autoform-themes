/* global AutoForm */
import { Template } from 'meteor/templating'

/*
 * Template helpers for "bootstrap3" templates
 */

Template.registerHelper('attsPlusFormControlClass', function attsPlusFormControlClass () {
  let atts = { ...this.atts }
  // Add bootstrap class
  atts = AutoForm.Utility.addClass(atts, 'form-control')
  return atts
})

Template.registerHelper('attsPlusBtnClass', function attsPlusBtnClass () {
  let atts = { ...this.atts }
  // Add bootstrap class
  atts = AutoForm.Utility.addClass(atts, 'btn')
  return atts
})
