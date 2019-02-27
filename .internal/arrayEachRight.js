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
    // 使用while + break 来减少 for循环书写的繁琐  前置自加运算 
    /**
     * 递增运算符为其操作数增加1，返回一个数值。
     *  如果后置（postfix）使用，即运算符位于操作数的后面（如 x++），那么将会在递增前返回数值。
     *  如果前置（prefix）使用，即运算符位于操作数的前面（如 ++x），那么将会在递增后返回数值。
     */
  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break
    }
  }
  return array
}

export default arrayEachRight
