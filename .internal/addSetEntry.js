/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  // 需要注意，目前在ie11 中set.add方法的返回值不是这个被设置的map对象 无法进行链式调用
  set.add(value)
  return set
}

export default addSetEntry
