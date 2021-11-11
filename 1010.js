/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    // 感觉是一个双循环就能解决的事情？
    let result = 0
    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 == 0) {
                result += 1
            }
        }
    }
    return result
};
// 虽然是中等题目，但其实一个双循环就可以解决了
// 但是我尝试用回溯算法做一下
/**
 * @param {number[]} time
 * @return {number}
 */
// var numPairsDivisibleBy60 = function(time) {
//     // 感觉是一个双循环就能解决的事情？
//     // 用回溯算法做一下
//     // 用回溯算法反而超出时间限制？
//     // 在例子25/34的时候超出了
//     let result = 0
//     let path = []

//     function backtracking(time, startIndex) {
//         if (startIndex > time.length || path.length > 2) {
//             return
//         }
//         if (path.length == 2 && (path[0] + path[1]) % 60 == 0) {
//             result += 1
//         }
//         for (let i = startIndex; i < time.length; i++) {
//             path.push(time[i])
//             backtracking(time, i + 1)
//             path.pop()
//         }
//     }
//     backtracking(time, 0)
//     return result
// };
// 用回溯反而超时！

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    // 感觉是一个双循环就能解决的事情？
    // 用动态规划算一下
    // dp[i]表示循环到time[i]时候有几对总持续时间可以被60整除
    // 上面一维的没思路，二维的定义一直很模糊
    // 放弃了，看了看答案好像是JS的双循环不会超时，但是C++和JAVA的却会超时，懒得整了！
};

// 其他语言的动规：
// class Solution:
//     def numPairsDivisibleBy60(self, time: List[int]) -> int:
//         dp = {time[0]:1}
//         ans = 0
//         for i in range(1,len(time)):
//             for j,k in dp.items():
//                 if (time[i]+j)%60 == 0:
//                     ans += k
//             if time[i] in dp:
//                 dp[time[i]] +=1
//             else:
//                 dp[time[i]] = 1
//         return ans

// 作者：806748118
// 链接：https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solution/python3dong-tai-gui-hua-hen-chang-gui-de-9h8w/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    // 感觉是一个双循环就能解决的事情？
    // 用动态规划算一下
    // dp[i]表示循环到time[i]时候有几对总持续时间可以被60整除
    // 上面一维的没思路，二维的定义一直很模糊
    // 放弃了，看了看答案好像是JS的双循环不会超时，但是C++和JAVA的却会超时，懒得整了！

    // 然后看了看C++的贪心算法：
    // 源代码如下：
    // class Solution {
    // public:
    //     int numPairsDivisibleBy60(vector<int>& time) {
    //         // 裸数组来提高性能
    //         int cnt[60];
    //         memset(cnt, 0, sizeof(cnt));
    //         // 记录对数即结果
    //         int res = 0;
    //         for (int num : time)
    //         {
    //             // 60的余数的余数
    //             int target = (60 - num % 60)%60;
    //             res += cnt[target];
    //             ++cnt[num%60];
    //         }

    //         return res;
    //     }
    // };

    // 作者：ffreturn
    // 链接：https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solution/1010-cji-hu-shuang-bai-de-ha-xi-jie-fa-b-q94l/
    // 来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    let jishu = Array(60).fill(0)
    let result = 0
    for (let i = 0; i < time.length; i++) {
        // 后面这个再对60取余是为了得到jishu数组里面的index，其实特殊情况就是time[i]==60的时候，如果不再取余，那么就需要有jishu[60]，但是它实际的target应该是0，计数位置在jishu[0]
        let target = (60 - time[i] % 60) % 60
        result += jishu[target]
        jishu[time[i] % 60] += 1
    }
    return result
};
// 最后是用贪心解决了，执行用时一下子就减小了！
// 是贪心