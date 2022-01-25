var numberOfMatches = function(n) {
    let ans = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            ans += Math.floor(n / 2);
            n /= 2;
        } else {
            ans += Math.floor((n - 1) / 2);
            n = Math.floor((n - 1) / 2) + 1;
        }
    }
    return ans;
};

// 完全没有做题的心思！拜拜！
// 作者： LeetCode - Solution
// 链接： https: //leetcode-cn.com/problems/count-of-matches-in-tournament/solution/bi-sai-zhong-de-pei-dui-ci-shu-by-leetco-ugvj/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。