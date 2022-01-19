var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const num = nums[i];
        if (map.has(num) && i - map.get(num) <= k) {
            return true;
        }
        map.set(num, i);
    }
    return false;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/contains-duplicate-ii/solution/cun-zai-zhong-fu-yuan-su-ii-by-leetcode-kluvk/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。