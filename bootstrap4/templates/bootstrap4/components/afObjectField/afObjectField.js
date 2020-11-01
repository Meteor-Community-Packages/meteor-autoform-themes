import { Template } from 'meteor/templating'
import { pick } from '../../../../utils/pick'
import './afObjectField.html'

Template.afObjectField_bootstrap4.helpers({
  quickFieldsAtts: function () {
    return pick(this, 'name', 'id-prefix')
  }
})
