module.exports = function reverse (n) {
    let str = n + '';
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] == '-') {
        newStr = newStr;
      } else {
        newStr = newStr + str[i]
      }
    } 
    return +newStr;
}
