/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    nums=nums.sort((a,b)=>a-b)
    // 升序排列
    let result=[]
    let path=[]
    let used=Array(nums.length).fill(false)
    function backtracking(nums,used){
        if(path.length==nums.length){
            result.push(path.slice())
            return
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]==true||(i>0&&nums[i]==nums[i-1]&&used[i-1]==false))
                continue
            path.push(nums[i])
            used[i]=true
            backtracking(nums,used)
            used[i]=false
            path.pop()
        }
    }
    backtracking(nums,used)
    return result
};
// 这个第一遍自己做的也通过了
// 就是之前做过的，同层之间的需要剪枝，（去除相同的元素）
// 同一枝里面只需要重复用不行就可以了，相同的还是要用的
// 教程里的思路是一样的！但是这样的话，执行用时有点长~不知道以后有没有优化方法