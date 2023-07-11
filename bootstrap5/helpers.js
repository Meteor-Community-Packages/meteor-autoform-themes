import { Template } from 'meteor/templating'
import { addBootstrap5Class } from './utils/addBootstrap5Class'

/*
 * Template helpers for "bootstrap5" templates
 */

Template.registerHelper('attsPlusFormControlClass', function attsPlusFormControlClass () {
  const atts = addBootstrap5Class(this.atts, 'form-control')

  // if we passed any config objects in atts
  // we need to remove them, otherwise we end up
  // with an error in an attempt to parse objects to html
  for (const key in atts) {
    if (typeof atts[key] === 'object') {
      delete atts[key]
    }
  }
  return atts
})

Template.registerHelper('attsPlusBtnClass', function attsPlusBtnClass () {
  return addBootstrap5Class(this.atts, 'btn')
})
