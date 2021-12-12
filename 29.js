/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// var divide = function(dividend, divisor) {
//     // 默认除数不为0
//     let neg = false
//     const MAX = Math.pow(2, 31) - 1
//     const MIN = -Math.pow(2, 31)
//     if (Math.sign(dividend) * Math.sign(divisor) == -1) {
//         neg = true
//     }
//     dividend = Math.abs(dividend)
//     divisor = Math.abs(divisor)
//     const ori = divisor
//     let result = 0
//     while (dividend >= divisor) {
//         divisor += ori
//         if (neg && -result <= MIN) {
//             return MIN
//         }
//         if (!neg && result >= MAX) {
//             return MAX
//         }
//         result++
//     }
//     if (neg) {
//         return -result
//     }
//     return result
// };
// 用这样的方法想想就知道会超时！！
// 我恨超时！！

// 下面是官方题解：
var divide = function(dividend, divisor) {
    const MAX_VALUE = 2 ** 31 - 1,
        MIN_VALUE = -(2 ** 31);
    // 考虑被除数为最小值的情况
    if (dividend === MIN_VALUE) {
        if (divisor === 1) {
            return MIN_VALUE;
        }
        if (divisor === -1) {
            return MAX_VALUE;
        }
    }
    // 考虑除数为最小值的情况
    if (divisor === MIN_VALUE) {
        return dividend === MIN_VALUE ? 1 : 0;
    }
    // 考虑被除数为 0 的情况
    if (dividend === 0) {
        return 0;
    }

    // 一般情况，使用二分查找
    // 将所有的正数取相反数，这样就只需要考虑一种情况
    let rev = false;
    if (dividend > 0) {
        dividend = -dividend;
        rev = !rev;
    }
    if (divisor > 0) {
        divisor = -divisor;
        rev = !rev;
    }

    let left = 1,
        right = MAX_VALUE,
        ans = 0;
    while (left <= right) {
        // 注意溢出，并且不能使用除法
        const mid = left + ((right - left) >> 1);
        const check = quickAdd(divisor, mid, dividend);
        if (check) {
            ans = mid;
            // 注意溢出
            if (mid === MAX_VALUE) {
                break;
            }
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return rev ? -ans : ans;
}

// 快速乘
const quickAdd = (y, z, x) => {
    // x 和 y 是负数，z 是正数
    // 需要判断 z * y >= x 是否成立
    let result = 0,
        add = y;
    while (z !== 0) {
        if ((z & 1) !== 0) {
            // 需要保证 result + add >= x
            if (result < x - add) {
                return false;
            }
            result += add;
        }
        if (z !== 1) {
            // 需要保证 add + add >= x
            if (add < x - add) {
                return false;
            }
            add += add;
        }
        // 不能使用除法
        z >>= 1;
    }
    return true;
};

// 其实就是随时考虑会不会溢出的问题！
// 要考虑全面！


// 下面是自己看着题解写的，大概懂了！
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 默认除数不为0

    const MAX = 2 ** 31 - 1
    const MIN = -(2 ** 31)
        // 如果dividend是最大值
        // 考虑被除数为最小值的情况
        // 小时候还要记被除数，除数，乘数这些哈哈
        // 其实仔细想想是能直接理解的东西啊
        // 首先对边界进行讨论
        // 这里为什么不讨论是MAX的情况
        // 跟后面把两个数都变成负值相关
        // 因为MIN绝对值最大
        // 如果MIN不溢出，那么变负后，MAX也就不溢出
    if (dividend == MIN) {
        if (divisor == 1) {
            return MIN
        }
        if (divisor == -1) {
            return MAX
        }
    }
    if (divisor == MIN) {
        // 因为绝对值不可能超过除数
        return dividend == MIN ? 1 : 0
    }
    if (dividend == 0) {
        return 0
    }

    // 剩下的就是一般情况了
    // 将所有正数取反，这样就只需要考虑一种情况
    // 使用二分查找
    let rev = false
        // 记住最后的符号用的
    if (dividend > 0) {
        dividend = -dividend
        rev = !rev
    }
    if (divisor > 0) {
        divisor = -divisor
        rev = !rev
    }

    let left = 1
    let right = MAX
    let ans = 0
    while (left <= right) {
        const mid = left + ((right - left) >> 1)
            // 右移相当于除2，自己随便写个例子就理解了
        const check = quickAdd(divisor, mid, dividend)
        if (check) {
            ans = mid
            if (mid == MAX) {
                break
            }
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return rev ? -ans : ans

};

// 其实不太懂
// 下面用到了快速加思想，其实就是快速乘？
const quickAdd = (y, z, x) => {
    // x 和 y 是负数，z 是正数
    // 需要判断 z * y >= x 是否成立
    let result = 0
    let add = y
    while (z != 0) {
        if ((z & 1) != 0) {
            // 说明z==1
            // 需要保证 result + add >= x
            if (result < x - add) {
                return false
            }
            result += add
        }
        if (z != 1) {
            if (add < x - add) {
                return false
            }
            add += add
        }
        z >>= 1
    }
    return true
}