import { Template } from 'meteor/templating'

Template.afRadio_bootstrap3.helpers({
  atts: function selectedAttsAdjust () {
    const atts = { ...this.atts }
    if (this.selected) {
      atts.checked = ''
    }
    return atts
  }
})
