/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    // 算时间！日哦！小学的时候我就经常算错
    // 找出任意两个时间的最小时间差，需要先排序不？
    // 排序就是简单的排序就可以
    timePoints.sort()
        // 排序后从前往后开始比较，同时让最后一个和第一个比较一下？
    let diff = Number.MAX_SAFE_INTEGER
    let tmp
    for (let i = 0; i < timePoints.length; i++) {
        if (i == timePoints.length - 1) {
            tmp = 60 - parseInt(timePoints[i].split(':')[1]) + parseInt(timePoints[0].split(':')[1])
            tmp += ((24 - parseInt(timePoints[i].split(':')[0]) - 1 + parseInt(timePoints[0].split(':')[0])) * 60)
        } else {
            // 排序后一定是按照时间排序了的
            if (timePoints[i].split(':')[1] <= timePoints[i + 1].split(':')[1]) {
                tmp = parseInt(timePoints[i + 1].split(':')[1]) - parseInt(timePoints[i].split(':')[1])
                tmp += ((parseInt(timePoints[i + 1].split(':')[0]) - parseInt(timePoints[i].split(':')[0])) * 60)
            } else {
                tmp = (parseInt(timePoints[i + 1].split(':')[1]) + 60 - parseInt(timePoints[i].split(':')[1]))
                tmp += ((parseInt(timePoints[i + 1].split(':')[0]) - parseInt(timePoints[i].split(':')[0]) - 1) * 60)
            }
        }
        diff = Math.min(tmp, diff)
    }
    return diff
};
// 自己今天竟然只写了这一道题！

var findMinDifference = function(timePoints) {
    timePoints.sort();
    let ans = Number.MAX_VALUE;
    let t0Minutes = getMinutes(timePoints[0]);
    let preMinutes = t0Minutes;
    for (let i = 1; i < timePoints.length; ++i) {
        const minutes = getMinutes(timePoints[i]);
        ans = Math.min(ans, minutes - preMinutes); // 相邻时间的时间差
        preMinutes = minutes;
    }
    ans = Math.min(ans, t0Minutes + 1440 - preMinutes); // 首尾时间的时间差
    return ans;
};

const getMinutes = (t) => {
    return ((t[0].charCodeAt() - '0'.charCodeAt()) * 10 + (t[1].charCodeAt() - '0'.charCodeAt())) * 60 + (t[3].charCodeAt() - '0'.charCodeAt()) * 10 + (t[4].charCodeAt() - '0'.charCodeAt());
}

// 作者： LeetCode - Solution
// 链接： https: //leetcode-cn.com/problems/minimum-time-difference/solution/zui-xiao-shi-jian-chai-by-leetcode-solut-xolj/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
// 上面是官方题解


/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    // 算时间！日哦！小学的时候我就经常算错
    // 找出任意两个时间的最小时间差，需要先排序不？
    // 排序就是简单的排序就可以
    timePoints.sort()
        // 排序后从前往后开始比较，同时让最后一个和第一个比较一下？
    let diff = Number.MAX_SAFE_INTEGER
    let t0Minutes = getMinutes(timePoints[0])
    let preMinutes = t0Minutes
    for (let i = 1; i < timePoints.length; i++) {
        const minutes = getMinutes(timePoints[i])
        diff = Math.min(diff, minutes - preMinutes)
        preMinutes = minutes
    }
    diff = Math.min(diff, t0Minutes + 1440 - preMinutes)
    return diff

};

// 官方题解是把时间转换成了分钟数
const getMinutes = (t) => {
    return (parseInt(t[0]) * 10 + parseInt(t[1])) * 60 + parseInt(t[3]) * 10 + parseInt(t[4])
}