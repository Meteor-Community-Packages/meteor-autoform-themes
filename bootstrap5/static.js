import { AutoFormThemeBootstrap5 } from './autoform-bootstrap5'

AutoFormThemeBootstrap5.load = function () {
  require('./helpers')
  require('./templates/bootstrap5')
  require('./templates/bootstrap5-inline/bootstrap5-inline')
}

export { AutoFormThemeBootstrap5 }
