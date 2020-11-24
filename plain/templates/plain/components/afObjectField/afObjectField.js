import { Template } from 'meteor/templating'

Template.afObjectField_plain.helpers({
  quickFieldsAtts: function () {
    const { name, 'id-prefix': IdPrefix } = this
    return { name, 'id-prefix': IdPrefix }
  }
})
