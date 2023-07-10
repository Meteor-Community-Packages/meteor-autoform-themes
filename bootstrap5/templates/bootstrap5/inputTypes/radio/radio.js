import { Template } from 'meteor/templating'
import { selectedAttsAdjust } from '../../../../utils/selectedAttsAdjust'
import './radio.html'

Template.afRadio_bootstrap5.helpers({
  atts: selectedAttsAdjust
})
