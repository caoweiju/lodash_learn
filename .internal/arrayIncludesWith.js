/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, target, comparator) {
    //  null == null undefined == null都是true 判断待遍历的数据是不是存在
  if (array == null) {
    return false
  }
  // for of是es6才引入的 
  // for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
  for (const value of array) {
    if (comparator(target, value)) {
      return true
    }
  }
  return false
}

export default arrayIncludesWith
