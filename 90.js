/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    // 第一次写竟然忘记sort了
    nums.sort((a,b)=>a-b)
    let result=[]
    let path=[]
    let used=Array(nums.length).fill(false)
    function backtracking(nums,startIndex,used){
        result.push(path.slice())
        for(let i=startIndex;i<nums.length;i++){
            if(i>0&&nums[i]==nums[i-1]&&used[i-1]==false)
                continue
            path.push(nums[i])
            used[i]=true
            backtracking(nums,i+1,used)
            path.pop()
            used[i]=false
        }
    }
    backtracking(nums,0,used)
    return result
};
// 这个还有一种方法是用set数组去重，但是我觉得used很好用，所有就这样吧
// 这次没看教程，除了第一次提交忘记sort了之外，第二次就对了
// 思路是对的