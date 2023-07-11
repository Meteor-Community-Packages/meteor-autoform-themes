import { ReactiveVar } from 'meteor/reactive-var'
import { AutoFormThemeBootstrap5 } from '../../../autoform-bootstrap5'
import './icon.html'

Template.afIcon_bootstrap5.onCreated(function () {
  const instance = this
  instance.renderer = new ReactiveVar()
  instance.fallback = new ReactiveVar()

  const { name, fallback } = instance.data

  instance.autorun(() => {
    // in order to support dynamic loading we attached the
    // renderer registration to a reactive var and can use
    // it here to "listen" to changes and display a fallback
    // until it's rendered
    const iconRenderer = AutoFormThemeBootstrap5.icons.get()

    if (iconRenderer) {
      instance.renderer.set({ template: iconRenderer, data: { name }})
      instance.fallback.set(null)
    } else {
      instance.fallback.set(fallback)
      instance.renderer.set(null)
    }
  })
})

Template.afIcon_bootstrap5.helpers({
  renderer () {
    return Template.instance().renderer.get()
  },
  fallbackLabel () {
    return Template.instance().fallback.get()
  }
})