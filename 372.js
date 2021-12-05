const MOD = BigInt(1337);

var superPow = function(a, b) {
    let ans = BigInt(1);
    for (let i = b.length - 1; i >= 0; --i) {
        ans = ans * pow(BigInt(a), b[i]) % MOD;
        a = pow(BigInt(a), 10);
    }
    return ans;
};

const pow = (x, n) => {
    let res = BigInt(1);
    while (n !== 0) {
        if (n % 2 !== 0) {
            res = res * BigInt(x) % MOD;
        }
        x = x * x % MOD;
        n = Math.floor(n / 2);
    }
    return res;
}

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/super-pow/solution/chao-ji-ci-fang-by-leetcode-solution-ow8j/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 直接CV算法整的