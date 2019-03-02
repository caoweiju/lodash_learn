import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
    // 判断添加这个key对应的value的添加是二选一：1. value存在且object[key]不等于value 2.value不存在但是object[key] 不存在
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    // 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。 in右操作数必须是一个对象值； 
    // 如果你使用 delete 运算符删除了一个属性，则 in 运算符对所删除属性返回 false。
    // 如果你只是将一个属性的值赋值为undefined，而没有删除它，则 in 运算仍然会返回true。
    // 应该考虑判断 如果是原型链上继承下来的属性，Object.hasOwnProperty 来判定
    baseAssignValue(object, key, value)
  }
}

export default assignMergeValue
