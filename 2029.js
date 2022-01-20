/**
 * @param {number[]} stones
 * @return {boolean}
 */
// var stoneGameIX = function(stones) {
//     // Bob输掉游戏的可能就是，已溢出石子可以被三整除，他是在偶数次移石子的
//     // 这种又博弈论了！
//     // 没什么思路
// };

var stoneGameIX = function(stones) {
    let cnt0 = 0,
        cnt1 = 0,
        cnt2 = 0;
    for (const val of stones) {
        const type = val % 3;
        if (type === 0) {
            ++cnt0;
        } else if (type === 1) {
            ++cnt1;
        } else {
            ++cnt2;
        }
    }
    if (cnt0 % 2 === 0) {
        return cnt1 >= 1 && cnt2 >= 1;
    }
    return cnt1 - cnt2 > 2 || cnt2 - cnt1 > 2;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/stone-game-ix/solution/shi-zi-you-xi-ix-by-leetcode-solution-kk5f/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 官方题解