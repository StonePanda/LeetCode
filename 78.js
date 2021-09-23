/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let result=[]
    let path=[]
    function backtracking(nums,startIndex){
        if(startIndex==nums.length) return
        let reslen=result.length
        for(let i=0;i<reslen;i++){
            // push()函数返回的是数组的新长度
            // js里没有返回修改后数组的函数
            // splice返回的是修改的内容，不是修改后的数组
            // splice原地改变原数组
            let tmp=result[i].slice()
            tmp.push(nums[startIndex])
            result.push(tmp)
        }
        if(startIndex==-1){
            result.push([])
        }
        backtracking(nums,startIndex+1)
    }
    backtracking(nums,-1)
    return result
};
// 这一道题和前面做的不太一样了，主要是for循环里的遍历改变了
// 这次像是之前做的普通递归题目,其实没有回溯
// 第一遍执行出错,是因为js里push函数的返回值是新数组的长度,而不是改变后的数组
// js并没有返回改变后的数组的函数,所以必须召唤一个tmp数组来临时完成这个任务

// 第一遍子集没有写出按模板的那种遍历结构
// 看了教程后发现还是可以写的,只不过这次的result.push(path.slice())是不用条件的
// 因为收集的是每一个节点的结果
// 这种按模板的方法用时和内存消耗,都比我上面的方法小
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    // 所有集合的自己都有空子集
    let result=[]
    let path=[]
    function backtracking(nums,startIndex){
        result.push(path.slice())
        if(startIndex==nums.length) return
        for(let i=startIndex;i<nums.length;i++){
            path.push(nums[i])
            // 下面这个收集结果不用回溯
            // 还是按照模板来,result不能在这里收集结果
            backtracking(nums,i+1)
            path.pop()
        }
    }
    backtracking(nums,0)
    return result
};