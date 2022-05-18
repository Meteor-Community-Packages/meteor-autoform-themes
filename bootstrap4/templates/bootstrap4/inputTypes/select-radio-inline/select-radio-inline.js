import { Template } from 'meteor/templating'
import { selectedAttsAdjustGroup } from '../../../../utils/selectedAttsAdjust'
import './select-radio-inline.html'

Template.afRadioGroupInline_bootstrap4.helpers({
  atts (index) {
    const saag = selectedAttsAdjustGroup.call(this, index)
    if (saag.id) {
      saag.id = `${saag.id}-${index}`
    }
    saag.class = `${saag.class || ''} custom-control-input`
    return saag
  },
  dsk () {
    return { 'data-schema-key': this.atts['data-schema-key'] }
  }
})
