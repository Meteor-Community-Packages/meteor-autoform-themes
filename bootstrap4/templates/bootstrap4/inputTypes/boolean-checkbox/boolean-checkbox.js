import { Template } from 'meteor/templating'
import './boolean-checkbox.html'

Template.afCheckbox_bootstrap4.helpers({
  atts () {
    const atts = Object.assign({}, this.atts)
    atts.class = atts.class || ''
    atts.class += ' form-check-input'
    return atts
  }
})
