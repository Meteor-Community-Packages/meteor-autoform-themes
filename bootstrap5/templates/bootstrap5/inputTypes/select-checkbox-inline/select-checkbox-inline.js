import { Template } from 'meteor/templating'
import { selectedAttsAdjustGroup } from '../../../../utils/selectedAttsAdjust'
import { dataSchemaKey } from '../../../../utils/dataSchemaKey'
import './select-checkbox-inline.html'

Template.afCheckboxGroupInline_bootstrap5.helpers({
  atts: function (index) {
    const saag = selectedAttsAdjustGroup.call(this, index)
    if (saag.id) {
      saag.id = `${saag.id}-${index}`
    }
    saag.class = `${saag.class || ''} custom-control-input`
    return saag
  },
  dsk: dataSchemaKey
})
