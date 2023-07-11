import { ReactiveVar } from 'meteor/reactive-var'

export const AutoFormThemeBootstrap5 = {}

const icons = {
  template: new ReactiveVar(),
}
AutoFormThemeBootstrap5.icons = {}
AutoFormThemeBootstrap5.icons.get = () => icons.template.get()
AutoFormThemeBootstrap5.icons.register = ({ name }) => {
  icons.template.set(name)
}
