/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 好经典的题目
    // 其实根据刚做的递增子序列的题目
    // 这道题就有点像针对每一个index，找到左右两个离自己最近的较大值
    // 但是如果每一个找一下，就相当于O(n^2)的时间复杂度，感觉很容易超时
    // 先试试吧
    // 不对，第一个例子中间那个向下凸的雨水形状就不适合这种
    let ans = 0
    let left = 0
    let right = 0
    for (let i = 1; i < height.length - 1; i++) {
        left = i - 1
        right = i + 1
        while (left >= 0) {
            if (height[left] > height[i]) {
                break
            }
            left--
        }
        while (right < height.length) {
            if (height[right] > height[i]) {
                break
            }
            right++
        }

    }
};
// 上面是自己写的！不对！

// 下面是官方题解，用的是动态规划
var trap = function(height) {
    const n = height.length;
    if (n == 0) {
        return 0;
    }

    const leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < n; ++i) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    const rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return ans;
};
// 卧槽！看了答案后又发现自己是对的，思路方向是对的
// 细节上，应该是判断两边的最大值，那个第一个水坑，就是判断两边的最大值，然后去较小的那个啊！


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 好经典的题目
    // 其实根据刚做的递增子序列的题目
    // 这道题就有点像针对每一个index，找到左右两个离自己最近的较大值
    // 但是如果每一个找一下，就相当于O(n^2)的时间复杂度，感觉很容易超时
    // 先试试吧
    // 不对，第一个例子中间那个向下凸的雨水形状就不适合这种
    // 思路是对的！还是要仔细思考哦！
    const n = height.length
    if (n <= 2) {
        return 0
    }
    const leftMax = new Array(n).fill(0)
    leftMax[0] = height[0]
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    const rightMax = new Array(n).fill(0)
    rightMax[n - 1] = height[n - 1]
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }

    let ans = 0
    for (let i = 0; i < n; i++) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return ans
};