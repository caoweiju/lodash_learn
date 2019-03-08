import isFlattenable from './isFlattenable.js'

/**
 * The base implementation of `flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
    // 很多时候 我们都希望给一个没有的值【null undefined】进行判断赋值
    // 逻辑或 || 这个判断的是 ’伪假‘ 对于false之外的 【'' 0 】都会被认定为
    /**
     * LogicalORExpression : LogicalORExpression || LogicalANDExpression
     *  Let lref be the result of evaluating LogicalORExpression. 【先计算逻辑或的左边表达式的值】
     *  Let lval be GetValue(lref). 【取值的内容】值本身 基本类型 对象 函数 等
     *  Let lbool be ToBoolean(lval). 【取布尔值】
     *  ReturnIfAbrupt(lbool). 【左侧布尔值是真就直接返回 后面不作处理】
     *  If lbool is true, return lval. 【返回左侧值，结束】
     *  Let rref be the result of evaluating LogicalANDExpression. 【左侧不是真，得出左侧表达式的值】
     *  Return GetValue(rref). 【直接返回右侧值，结束】
     */
  predicate || (predicate = isFlattenable)
  result || (result = [])

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        result.push(...value)
      }
    } else if (!isStrict) {
        // 这种写法和push有什么区别
      result[result.length] = value 
    }
  }
  return result
}

export default baseFlatten
