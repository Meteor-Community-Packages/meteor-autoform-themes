import { Template } from 'meteor/templating'
import { omit } from '../../../../utils/omit'
import './select-radio-inline.html'

Template.afRadioGroupInline_bootstrap4.helpers({
  atts (index) {
    const atts = omit(this.atts, 'data-schema-key')
    if (this.selected) {
      atts.checked = ''
    }
    
    atts.class = atts.class || ''
    atts.class = `${atts.class} form-check-input custom-control-input`

    if (atts.id) {
      atts.id = `${atts.id}-${index}`
    }

    return atts
  },
  dsk () {
    return { 'data-schema-key': this.atts['data-schema-key'] }
  }
})
