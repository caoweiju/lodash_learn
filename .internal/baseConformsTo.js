/**
 * The base implementation of `conformsTo` which accepts `props` to check.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
 */
function baseConformsTo(object, source, props) {
  let length = props.length
  if (object == null) {
    return !length
  }
  object = Object(object) // 作为方法调用时 等同于 new Object()
  while (length--) {
    const key = props[length]
    const predicate = source[key]
    const value = object[key]
    // key in object 这是会判断原型链上是不是存在的
    if ((value === undefined && !(key in object)) || !predicate(value)) {
      return false
    }
  }
  return true
}

export default baseConformsTo
