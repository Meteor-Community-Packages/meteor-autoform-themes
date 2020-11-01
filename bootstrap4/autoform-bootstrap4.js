export const AutoFormThemeBootstrap4 = {};

AutoFormThemeBootstrap4.load = function () {
  return Promise.all([
    import('./helpers'),
    import('./templates/bootstrap4'),
    import('./templates/bootstrap4-inline/bootstrap4-inline')
  ])
};
