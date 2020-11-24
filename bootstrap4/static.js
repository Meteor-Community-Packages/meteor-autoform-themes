import { AutoFormThemeBootstrap4 } from './autoform-bootstrap4'

AutoFormThemeBootstrap4.load = function () {
  require('./helpers')
  require('./templates/bootstrap4')
  require('./templates/bootstrap4-inline/bootstrap4-inline')
}

export { AutoFormThemeBootstrap4 }
