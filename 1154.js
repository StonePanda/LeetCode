var dayOfYear = function(date) {
    const year = +date.slice(0, 4);
    const month = +date.slice(5, 7);
    const day = +date.slice(8);

    const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        ++amount[1];
    }

    let ans = 0;
    for (let i = 0; i < month - 1; ++i) {
        ans += amount[i];
    }
    return ans + day;
};

// 上面是官方题解

// 下面是自己看着写的
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    // js里的日期处理找一找有没有！
    // 只有某个月中的第几天和一周中的第几天
    // const dateObj=new Date(date)
    // 虽然可以创建日期对象但是并没有什么用
    // 这种形式也是可以被Date.parse()正确识别的字符串
    // console.log(dateObj.getMonth())
    // 这个数+1就是月份
    // 下面还是根据官方题解的思路，第一次发现每一年的月份天数竟然是一样的！
    const year = +date.slice(0, 4)
        // 这里前面的+号就是直接转整数
    const month = +date.slice(5, 7)
    const day = +date.slice(8)
        // slice函数只有一个参数的时候，第二个参数就是函数长度，就是直接到末尾

    const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        // 一三五七八十腊，是31天，二月的时候平年28，闰年29
        // 其他的都不变，一直是30天
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        amount[1]++
    }
    let ans = 0
    for (let i = 0; i < month - 1; ++i) {
        ans += amount[i]
    }
    return ans + day
};