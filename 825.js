/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    // 难道是会超时？
    ages.sort((a, b) => a - b)
        // 自然升序排序
        // 年龄大于14的两个相同年龄的一定会互发消息
        // 那么这个可以记录一下
    let ans = 0
    for (let i = 0; i < ages.length - 1; i++) {
        // 前面的是x，后一个是y，已知条件是x<=y，但是有可能相等
        // y==x的情况后面再讨论
        if (ages[i] > 0.5 * ages[i + 1] + 7 && (ages[i] <= 100 || ages[i + 1] >= 100) && ages[i] < ages[i + 1]) {
            // 在这里是ages[i]=>y,ages[i+1]=>x
            ans++
            console.log(ages[i + 1], ages[i])
        }
        // 当ages[i+1]==ages[i]的时候，就是y==x的时候
        // 这时候如果y>14,那么两个就可以互发消息
        if (ages[i] > 14 && ages[i] == ages[i + 1]) {
            ans += 2
        }
    }
    return ans
};
// 自己理解错了，在第三个示例的时候就已经错误了
// 不能是跟后面的比，是每一个数都跟自己后面的每一个数比

// 因为这道题是有边界的！答案就边界或者说窗口，使用了双指针法
// 这是第一个官方题解

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    // 总之就是！哎！
    // 要求是那三个条件都为假，也就是下面的条件为真
    // age[y]>0.5*age[x]+7
    // age[y]<=age[x]
    // age[y]<=100 || ages[x]>=100
    // 第三个就是
    // age[y]<=100<=age[x]
    // 第二个是真的，第三个就一定是真的
    // 所以三个条件汇总一下：
    // 0.5*age[x]+7<age[y]<=age[x]
    // 确定了x，那么y就是上面这个范围内的数都可以，那么是x可以给他们发送好友请求
    // 但是不能给自己发，所以是范围-1
    // 另外上面隐含的隐藏条件是
    // 0.5*age[x]+7<age[x]，也就是age[x]>14
    let ans = 0
    ages.sort((a, b) => a - b)
        // 排序后，两个边界都是递增的，要利用这一点
    let left = 0
    let right = ages.length - 1
    for (let i = 0; i < ages.length; i++) {

        if (ages[i] <= 14) {
            continue
        }
        left = 0
        right = ages.length - 1
        while (ages[left] <= 0.5 * ages[i] + 7) {
            left++
        }
        while (ages[right] > ages[i]) {
            right--
        }
        ans += (right - left)
            // console.log(left,right)
            // console.log(ans)
    }
    return ans
};

// 自己写的！这几天真正意义上的第一题？