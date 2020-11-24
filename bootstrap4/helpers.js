import { Template } from 'meteor/templating'
import { addBootstrap4Class } from './utils/addBootstrap4Class'

/*
 * Template helpers for "bootstrap4" templates
 */

Template.registerHelper('attsPlusFormControlClass', function attsPlusFormControlClass () {
  return addBootstrap4Class(this.atts, 'form-control')
})

Template.registerHelper('attsPlusBtnClass', function attsPlusBtnClass () {
  return addBootstrap4Class(this.atts, 'btn')
})
