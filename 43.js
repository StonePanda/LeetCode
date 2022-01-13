/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == "0" || num2 === "0") {
        return "0"
    }
    // 前面有一次字符串相加我还没有好好学，这次字符串相乘一定要好好学！
    // 不能使用大数类型或者转换为整数来处理
    // 所以要倒过来按照人类乘法的逻辑去解决，因为长度小于110，所以应该复杂度还好
    // num1=num1.split('').reverse().join('')
    // num2=num2.split('').reverse().join('')
    // 正正反反把自己绕晕了，还是按照正常人类的想法来吧
    // 对于较短的数不能再向加法一样补0了，也不能补1，所以只能强制交换较短的数字
    if (num2.length > num1.length) {
        [num1, num2] = [num2, num1]
    }
    // 比较长的那个放在了第一个
    // 然后发现还要用字符串加法，但是也不是单纯的加法，还要移位
    // 先算出来那个乘出来的结果再去想加法吧！
    let add = []
    for (let i = num2.length - 1; i >= 0; i--) {
        if (num2[i] == '0') {
            add.push('0'.repeat(num1.length + num2.length - 1 - i))
        } else {
            add.push(simpleMulti(num1, num2[i]) + '0'.repeat(num2.length - 1 - i))
        }
        // console.log(i,add)
    }
    // console.log(add)
    // 然后开始两两相加
    // 倒着相加，因为越后面的数字越长
    let ans = ''
    for (let i = num2.length - 1; i >= 0; i--) {
        ans = strAdd(ans, add[i])
    }
    return ans
};

// 不想写了！明天再说
const simpleMulti = (num, single) => {
    single = single.charCodeAt() - '0'.charCodeAt()
        // 先把single转换成数字
    let carry = 0
    let tmpMul = 0
    let res = ''
    for (let i = num.length - 1; i >= 0; i--) {
        tmpMul = single * (num[i].charCodeAt() - '0'.charCodeAt()) + carry
        if (tmpMul >= 10) {
            carry = Math.floor(tmpMul / 10)
        } else {
            carry = 0
        }
        res += (tmpMul % 10).toString()
    }
    // 结束后，进位还有数字
    if (carry != 0) {
        res += carry.toString()
    }
    res = res.split('').reverse().join('')
        // console.log(res)
        // 返回的这个就是正常乘积
    return res
}

const strAdd = (str1, str2) => {
    if (str1.length < str2.length) {
        [str1, str2] = [str2, str1]
    }
    // 较长的放在前面
    // 较短的前面补充上0
    str2 = str2.split('').reverse().join('')
    str2 += '0'.repeat(str1.length - str2.length)
    str1 = str1.split('').reverse().join('')
        // console.log(str1,str2)
    let tmpAdd = 0
    let carry = 0
    let res = ''
    for (let i = 0; i < str1.length; i++) {
        tmpAdd = carry + (str1[i].charCodeAt() - '0'.charCodeAt()) + (str2[i].charCodeAt() - '0'.charCodeAt())
        if (tmpAdd >= 10) {
            carry = 1
        } else {
            carry = 0
        }
        res += (tmpAdd % 10).toString()
    }
    if (carry != 0) {
        res += carry.toString()
    }
    // console.log(str1,str2,res)
    res = res.split('').reverse().join('')
        // console.log(res)
    return res
};
// 非常麻烦啊！我去看看官方题解有没有好的做法！

const multiply = (num1, num2) => {
    const len1 = num1.length;
    const len2 = num2.length;
    const pos = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        const n1 = +num1[i];
        for (let j = len2 - 1; j >= 0; j--) {
            const n2 = +num2[j];
            const multi = n1 * n2;
            const sum = pos[i + j + 1] + multi;

            pos[i + j + 1] = sum % 10;
            pos[i + j] += sum / 10 | 0;
        }
    }
    while (pos[0] == 0) {
        pos.shift();
    }
    return pos.length ? pos.join('') : '0';
};

// 作者： xiao_ben_zhu
// 链接： https: //leetcode-cn.com/problems/multiply-strings/solution/shi-pin-jiang-jie-43-zi-fu-chuan-xiang-cheng-by-hy/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。

// 官方题解里又是没有JS/(ㄒoㄒ)/~~，上面是笨猪爆破组大佬的

// 就是推算乘法的规律
var multiply = function(num1, num2) {
    const len1 = num1.length
    const len2 = num2.length
    const pos = new Array(len1 + len2).fill(0)
    for (let i = len1 - 1; i >= 0; i--) {
        const n1 = +num1[i]
            // 字符串转数字就是这么简单，/(ㄒoㄒ)/~~
        for (let j = len2 - 1; j >= 0; j--) {
            const n2 = +num2[j]
            const multi = n1 * n2
            const sum = pos[i + j + 1] + multi

            pos[i + j + 1] = sum % 10
            pos[i + j] += sum / 10 | 0
                // 向下取整！
        }
    }
    while (pos[0] == 0) {
        pos.shift()
    }
    return pos.length ? pos.join('') : '0'
};