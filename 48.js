/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // js数字交换，可以直接[num1,num2]=[num2,num1]
    // 坐标是[i,j]变成[j,n-1-i]
    // [2,1][1,0]  [2,2] [2,0]   [1,2] [2,1]
    // 只是位置改变了，但其实不是交换！
    // 每次一行的循环都是到n-1-i这里结束
    const n = matrix.length
    for (let i = 0; i <= n - 1; i++) {
        for (let j = 0; j <= n - 1 - i; j++) {
            [matrix[i][j], matrix[j][n - 1 - i]] = [matrix[j][n - 1 - i], matrix[i][j]]
        }
    }
    return matrix
};
// 这个是自己一开始就想错了！不是直接交换一下就行了！
// 题目说不要使用两一个矩阵，那么我们就用数组过度一下行不行呢，想不出来！


// 不用辅助数组或者辅助矩阵，就原地旋转
// 就是官方题解第二种
var rotate = function(matrix) {
    const n = matrix.length;
    for (let i = 0; i < Math.floor(n / 2); ++i) {
        for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
};

// 官方题解里的忘记写返回结果了
// 作者： LeetCode - Solution
// 链接： https: //leetcode-cn.com/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // js数字交换，可以直接[num1,num2]=[num2,num1]
    // 坐标是[i,j]变成[j,n-1-i]
    // [2,1][1,0]  [2,2] [2,0]   [1,2] [2,1]
    // 只是位置改变了，但其实不是交换！
    // 每次一行的循环都是到n-1-i这里结束

    const n = matrix.length
        // 其实就是上面那个关键的旋转改变
        // [j,n-1-i]=[i,j]
        // 前面的那个会被覆盖，那么存下来 tmp=[j,n-1-i]
        // 存下来放在哪里呢？就看这个值旋转后在哪里
        // [n-1-i,n-1-j]=[j,n-1-i]
        // 前面的会被覆盖，存下来
        // tmp=[n-1-i,n-1-j]
        // [n-1-i,n-1-j]=[j,n-1-i]
        // [j,n-1-i]=[i,j]
        // 那么[n-1-i,n-1-j]会被存到哪里？
        // [n-1-j,i]=[n-1-i,n-1-j]
        // 所以就是
        // tmp=[n-1-j,i]
        // [n-1-j,i]=[n-1-i,n-1-j]
        // [n-1-i,n-1-j]=[j,n-1-i]
        // [j,n-1-i]=[i,j]
        // 再对[n-1-j,i]进行旋转
        // [i,j]=[n-1-j,i]
        // 就会发现旋转回来了
        // 所以tmp=[i,j]
        // [i,j]=[n-1-j,i]
        // [n-1-j,i]=[n-1-i,n-1-j]
        // [n-1-i,n-1-j]=[j,n-1-i]
        // [j,n-1-i]=tmp
        // 然后就是旋转哪些？怎么遍历呢？
        // 当n是奇数的时候，最中间的那个是不动的
        // 当n是偶数的时候，就是把矩阵分成四块，那么就是[0,n/2)[0,n/2)
        // 当n是奇数的时候j是[0,(n+1)/2)i是[0,(n-1)/2)，或者反过来应该也是一样的
        // 然后去看看题解自己想的完整不
        // 然后发现不用判断n的奇偶数，是可以合并的
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
            const tmp = matrix[i][j]
            matrix[i][j] = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
            matrix[j][n - 1 - i] = tmp
                // 出错的地方真是千奇百怪啊哈哈
                // 把matrix坐标写成了上面注释里的样子，
                // 然后执行出错
        }
    }
    return matrix
};