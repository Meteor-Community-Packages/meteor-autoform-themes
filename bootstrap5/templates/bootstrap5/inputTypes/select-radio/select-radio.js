import { Template } from 'meteor/templating'
import { selectedAttsAdjustGroup } from '../../../../utils/selectedAttsAdjust'
import { dataSchemaKey } from '../../../../utils/dataSchemaKey'
import './select-radio.html'

Template.afRadioGroup_bootstrap5.helpers({
  atts: function (index) {
    const saag = selectedAttsAdjustGroup.call(this, index)
    if (saag.id) {
      saag.id = `${saag.id}-${index}`
    }
    return saag
  },
  dsk: dataSchemaKey
})
