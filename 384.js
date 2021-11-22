/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    // 创建数组
    // 在绝大多数情况下，函数的调用方式觉得了this的值，this不能在执行期间被赋值，并且在每次函数调用时this的值也可能不同
    // 不能在执行期间被赋值！
    // console.log(this)
    // 上面这个输出
    // Solution {}
    this.nums = Array.from(nums)
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // 其实没太看懂shuffle要做什么
    let shuffleone = Array.from(this.nums)
    shuffleone.sort(function() {
        return .5 - Math.random()
    })
    return shuffleone
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// 在运行例子6/10的时候就出错了
// 所以直接看教程了！
// 因为完全没有思路!


// 看完题解后再来看这道题目，所以我用伪乱序（sort）方法就是不对的
// 看了看教程，又加上题解
// 使用Fisher-Yates shuffle洗牌算法
// 另外题解里面还有一个跟我想的不一样
// 就是打乱数组，就是要打乱对象Solution对象里的数组
// 也就是有一个属性确实被打乱了

// 随机的真正含义时每个数字，在每个位置出现的几率都相等

// 又看了一篇教程，sort方法不行的原因，是因为两个数要么交换要么不交换
// 那么让两个数必须交换！
// 没有洗牌的区域必须和现在这个要洗牌的进行交换，交换的概率就从50%变到了100%
// 那么就可以达到真正的随机
// 具体可以看：https://juejin.cn/post/6844904160878395399
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    // 创建数组
    // 在绝大多数情况下，函数的调用方式觉得了this的值，this不能在执行期间被赋值，并且在每次函数调用时this的值也可能不同
    // 不能在执行期间被赋值！
    // console.log(this)
    // 上面这个输出
    // Solution {}
    this.nums = Array.from(nums)
    this.original = Array.from(nums)
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    // 这里重置数组
    this.nums = Array.from(this.original)
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // 其实没太看懂shuffle要做什么
    // 这里使用洗牌算法做一个真正地打乱
    for (let i = 0; i < this.nums.length; i++) {
        let j = Math.floor(Math.random() * (this.nums.length - i)) + i
        let tmp = this.nums[i]
        this.nums[i] = this.nums[j]
        this.nums[j] = tmp
    }
    return this.nums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */