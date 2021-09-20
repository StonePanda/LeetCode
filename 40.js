/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//  var combinationSum2 = function(candidates, target) {
//     let result=[]
//     let path=[]
//     candidates.sort((a,b)=>a-b)
//     function backtracking(candidates,target,sum,startIndex){
//         if(sum>target) return
//         if(sum==target){
//             if(!result.toString().includes(path.toString()))
//                 result.push(path.slice())
//             return
//         }
//         for(let i=startIndex;i<candidates.length;i++){
//             path.push(candidates[i])
//             sum+=candidates[i]
//             backtracking(candidates,target,sum,i+1)
//             sum-=path.pop()
//         }
//     }
//     backtracking(candidates,target,0,0)
//     return result
// };

// JS的数组我到底什么时候总结！！
// 模板是记住了，但是还是很硬套！
// 而且这次在例子172/175的时候就超出时间限制了
// 最后执行的输入：
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// 30

// 教程里讲的确实是重复数字的问题
// 分为树枝去重（纵向，回溯），树层去重（横向，for循环）
// 我们要做的是树层要去重，树枝是如果前面的没用，后面的也肯定用不上
// 也就是如果candidates[i]==candidates[i-1]&&used[i-1]==false,那么当前循环就不必继续了
// 如果是同一树枝上，used[i-1]==true，前面的为true，后面的也可以用也可以不用，交给和target比较时判断
// 如果是false，那么后面的也不用循环了，所以continue
// 同一树层，前面的一定会被用，而且已经被pop出去了，所以used是false，所以后面的只要相同就要舍弃

// 好好理解
// used[i-1]==true 表示树枝内被用过
// used[i-1]==false 表示树层内被用过


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    let result=[]
    let path=[]
    // 创建全是相同元素的数组
    let used=new Array(candidates.length).fill(false)
    candidates.sort((a,b)=>a-b)
    function backtracking(candidates,target,sum,startIndex,used){
        if(sum>target) return
        if(sum==target){
            result.push(path.slice())
            return
        }
        // 小小的剪枝一下
        for(let i=startIndex;i<candidates.length && sum+candidates[i]<=target;i++){
            if(i>0 && candidates[i].toString()==candidates[i-1].toString() && used[i-1]==false){
                // 跳过当前循环，直接进行下一个循环
                continue
            }
            path.push(candidates[i])
            sum+=candidates[i]
            used[i]=true
            backtracking(candidates,target,sum,i+1,used)
            sum-=path.pop()
            used[i]=false
        }
    }
    backtracking(candidates,target,0,0,used)
    return result
};