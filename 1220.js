var countVowelPermutation = function(n) {
    const mod = 1000000007;
    const dp = new Array(5).fill(0);
    const ndp = new Array(5).fill(0);
    for (let i = 0; i < 5; ++i) {
        dp[i] = 1;
    }
    for (let i = 2; i <= n; ++i) {
        /* a前面可以为e,u,i */
        ndp[0] = (dp[1] + dp[2] + dp[4]) % mod;
        /* e前面可以为a,i */
        ndp[1] = (dp[0] + dp[2]) % mod;
        /* i前面可以为e,o */
        ndp[2] = (dp[1] + dp[3]) % mod;
        /* o前面可以为i */
        ndp[3] = dp[2];
        /* u前面可以为i,o */
        ndp[4] = (dp[2] + dp[3]) % mod;
        dp.splice(0, 5, ...ndp);
    }
    let ans = 0;
    for (let i = 0; i < 5; ++i) {
        ans = (ans + dp[i]) % mod;
    }
    return ans;
};

// 作者： LeetCode - Solution
// 链接： https: //leetcode-cn.com/problems/count-vowels-permutation/solution/tong-ji-yuan-yin-zi-mu-xu-lie-de-shu-mu-jxo09/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    const MOD = Math.pow(10, 9) + 7;
    //没有什么思路
};
// 上面是自己写的，一开始就没有什么思路，因为题目是难，被吓到了
// 结果好多人都说这道题很简单！然后可能也是因为我的动态规划需要复习了吧！


/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    // const MOD=Math.pow(10,9)+7;
    // 为什么不直接写出来！
    //没有什么思路
    const MOD = 1000000007;
    // 用动态规划做
    const dp = new Array(5).fill(1);
    // [a,e,i,o,u]
    const ndp = new Array(5).fill(0);
    for (let i = 2; i <= n; i++) {
        // a前面可以是e或u或i
        ndp[0] = (dp[1] + dp[2] + dp[4]) % MOD;
        // e前面可以为a,i
        ndp[1] = (dp[0] + dp[2]) % MOD;
        // i前面可以为e,o
        ndp[2] = (dp[1] + dp[3]) % MOD;
        // o前面可以为i
        ndp[3] = dp[2] % MOD;
        // u前面可以是i,o
        ndp[4] = (dp[2] + dp[3]) % MOD;
        dp.splice(0, 5, ...ndp);
        // 从0开始删除五个字符，插图展开ndp
        // 其实就是把dp替换了变成ndp
    }
    // 其实就是看现在这位是谁，前面的有可能是谁，把前面的可能性都加起来
    let ans = 0
    for (let i = 0; i < 5; i++) {
        ans = (ans + dp[i]) % MOD
    }
    return ans
};