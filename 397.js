/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    // 不是用模拟？

    // 模拟不对，因为不是最小替换次数
    // 所以就是2的次方的最接近，然后再加1？
    // 感觉也不对，没什么思路！

    // 其实在n为偶数的时候，是没有悬念的，但是n是奇数的时候有两种选择，应该选择较少的那一个，因此肯定是需要递归的
    if (n == 1) {
        return 0
    }
    if (n % 2 == 0) {
        return 1 + integerReplacement(n / 2)
    }
    // return 2+Math.min(integerReplacement((n+1)/2),integerReplacement((n-1)/2))
    // 因为n=2^31-1,再加1会溢出，所以用Math.ceil(n/2)
    return 2 + Math.min(integerReplacement(Math.ceil(n / 2)), integerReplacement((n - 1) / 2))
};