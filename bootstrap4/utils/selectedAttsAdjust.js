export const selectedAttsAdjust = function selectedAttsAdjust (index) {
  const atts = { ...this.atts }
  if (this.selected || this.items?.[index]?.selected) {
    atts.checked = ''
  }
  return atts
}

export const selectedAttsAdjustGroup = function selectedAttsAdjustGroup (index) {
  const self = this
  const atts = selectedAttsAdjust.call(self, index)
  // remove data-schema-key attribute because we put it
  // on the entire group
  delete atts['data-schema-key']
  return atts
}
