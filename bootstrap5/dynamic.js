import { AutoFormThemeBootstrap5 } from './autoform-bootstrap5'

AutoFormThemeBootstrap5.load = function () {
  return Promise.all([
    import('./helpers'),
    import('./templates/bootstrap5'),
    import('./templates/bootstrap5-inline/bootstrap5-inline')
  ])
}

export { AutoFormThemeBootstrap5 }
