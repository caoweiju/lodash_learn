/**
 * A specialized version of `forEachRight` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEachRight(array, iteratee) { // iteratee 这个函数保持了原生的数组的遍历调用函数的参数格式
  let length = array == null ? 0 : array.length

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break
    }
  }
  return array
}

export default arrayEachRight
