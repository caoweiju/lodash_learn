import baseIndexOf from './baseIndexOf.js'

/**
 * A specialized version of `includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  const length = array == null ? 0 : array.length
  // 利用 逻辑运算符 && 的算路运算 和 !! 双逻辑非运算来获取布尔值
  return !!length && baseIndexOf(array, value, 0) > -1
}

export default arrayIncludes
