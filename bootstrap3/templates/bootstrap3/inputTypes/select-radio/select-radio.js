import { Template } from 'meteor/templating'

Template.afRadioGroup_bootstrap3.helpers({
  atts: function selectedAttsAdjust () {
    const atts = { ...this.atts }
    if (this.selected) {
      atts.checked = ''
    }
    // remove data-schema-key attribute because we put it
    // on the entire group
    delete atts['data-schema-key']
    return atts
  },
  dsk: function dsk () {
    return {
      'data-schema-key': this.atts['data-schema-key']
    }
  }
})
