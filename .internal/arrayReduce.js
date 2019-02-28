/**
 * A specialized version of `reduce` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) { 
    // 当函数的参数多余5个的时候 将需要考虑适用对象来进行处理
    
    // array 待处理数组    iteratee 迭代处理函数 
  let index = -1
  const length = array == null ? 0 : array.length

  if (initAccum && length) { 
    // 使用第一个值作为初始值 【array的reduce在没有初始值的时候就会使用第一个值作为初始值，遍历将会从第二个值开始】
    accumulator = array[++index]
  }
  while (++index < length) { // 遍历处理
    accumulator = iteratee(accumulator, array[index], index, array)
  }
  return accumulator
}

export default arrayReduce
