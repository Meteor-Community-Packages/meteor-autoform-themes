import { Template } from 'meteor/templating'

for (const hook of Template.afAutocomplete._callbacks.rendered) {
  Template.afAutocomplete_bootstrap4.onRendered(hook)
}
