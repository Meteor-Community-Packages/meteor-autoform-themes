import { Template } from 'meteor/templating'
import { addBootstrap5Class } from './utils/addBootstrap5Class'

/*
 * Template helpers for "bootstrap5" templates
 */

Template.registerHelper('attsPlusFormControlClass', function attsPlusFormControlClass () {
  return addBootstrap5Class(this.atts, 'form-control')
})

Template.registerHelper('attsPlusBtnClass', function attsPlusBtnClass () {
  return addBootstrap5Class(this.atts, 'btn')
})
