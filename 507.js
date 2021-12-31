/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num == 1) {
        return false
    }
    let sum = 1
    for (let i = 2; i <= Math.floor(Math.pow(num, 0.5)); i++) {
        if (num % i == 0) {
            sum = sum + i + (num / i)
                // console.log(sum,i)
        }
    }
    if (num == sum) {
        return true
    }
    return false
};