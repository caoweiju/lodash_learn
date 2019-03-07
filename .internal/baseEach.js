import baseForOwn from './baseForOwn.js'
import isArrayLike from '../isArrayLike.js'

/**
 * The base implementation of `forEach`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
function baseEach(collection, iteratee) {
    // 为什么每次判断参数是不是没有正确传入都是使用 == null 而不是 === undefined
    /**
     * null 表示 "没有对象"，即该处不应该有值。【引用语义上没有】 可以被转化为0
     * undefined 表示"缺少值"，【值语义上缺少】就是此处应该有一个值，但是还没有赋值。而函数调用时缺省参数应该是undefined
     */
  if (collection == null) { 
    return collection
  }
  if (!isArrayLike(collection)) {
    return baseForOwn(collection, iteratee)
  }
  const length = collection.length
  const iterable = Object(collection)
  let index = -1

  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) {
      break
    }
  }
  return collection
}

export default baseEach
