import { Template } from 'meteor/templating'
import './autocomplete.html'

for (const hook of Template.afAutocomplete._callbacks.rendered) {
  Template.afAutocomplete_bootstrap4.onRendered(hook)
}
