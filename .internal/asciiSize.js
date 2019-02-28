/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function asciiSize({ length }) {
    // string的length的属性，通过解构赋值来获取；
    // string中的有的方法是静态方法 只允许String来调用 不能使用string实例调用
    // String.fromCharCode() String.fromCodePoint()
  return length
}

export default asciiSize
