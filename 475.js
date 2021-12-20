// 一大早上脑袋就糨糊啦！谁让我总是看微博啦！呜呜呜！
var findRadius = function(houses, heaters) {
    let ans = 0;
    heaters.sort((a, b) => a - b);
    for (const house of houses) {
        const i = binarySearch(heaters, house);
        const j = i + 1;
        const leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i];
        const rightDistance = j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house;
        const curDistance = Math.min(leftDistance, rightDistance);
        ans = Math.max(ans, curDistance);
    }
    return ans;
};

const binarySearch = (nums, target) => {
    let left = 0,
        right = nums.length - 1;
    if (nums[left] > target) {
        return -1;
    }
    while (left < right) {
        const mid = Math.floor((right - left + 1) / 2) + left;
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
};
// 上面是官方题解

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    // 确实我一开始的思路就有点错呢！是把house插到heaters里面更合适啊
    let ans = 0
    heaters.sort((a, b) => a - b)
    for (const house of houses) {
        const i = binarySearch(heaters, house)
        const j = i + 1
        const leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i]
        const rightDistance = j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house
        const curDistance = Math.min(leftDistance, rightDistance)
        ans = Math.max(ans, curDistance)
    }
    return ans
};

const binarySearch = (nums, target) => {
    // 二分法找到house左边的加热器，那么加热器队列里的下一个不就是它右边的，然后左右找一个最小值就可以了！
    let left = 0,
        right = nums.length - 1;
    // 好好写标点？好好写分号？
    if (nums[left] > target) {
        return -1
    }
    while (left < right) {
        const mid = Math.floor((right - left + 1) / 2) + left
        if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid
        }
    }
    return left
};
// 下面是自己看着写的