export const selectedAttsAdjust = function selectedAttsAdjust () {
  const atts = { ...this.atts }
  if (this.selected) {
    atts.checked = ''
  }
  return atts
}

export const selectedAttsAdjustGroup = function selectedAttsAdjustGroup () {
  const self = this
  const atts = selectedAttsAdjust.call(self)
  // remove data-schema-key attribute because we put it
  // on the entire group
  delete atts['data-schema-key']
  return atts
}
