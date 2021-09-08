/**
 * @param {number[]} nums
 * @return {number}
 */
// 第一次自己写的
//  var wiggleMaxLength = function(nums) {
//     let len=0
//     if(nums.length==1){
//         len=nums.length
//         return len 
//     }
//     else if(nums.length==2){
//         if(nums[0]!=nums[1]){
//             len=nums.length
//             return len
//         }
//         else{
//             len=nums.length-1
//             return len
//         }
//     }
//     else{
//         let bdlist=[nums[0]]
//         let i=1
//         while(i<nums.length-1){
//             if((bdlist[bdlist.length-1]-nums[i])*(nums[i]-nums[i+1])<0){
//                 bdlist.push(nums[i])
//             }
//             i+=1
//         }
//         if(bdlist[bdlist.length-1]==nums[i])
//             return bdlist.length      这里写的时候第一次是没有这个判断的，但是示例里有[0,0,0],无法通过，才想起来有这种情况，最后一个是不能加上去的  
//         return bdlist.length+1
 
//     }
// };

// 看了解答后写的：用了间距对比，而且两个数的情况被归并了，而且忘记会有空数组的情况
/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function(nums) {
    if(nums.length<=1)
        return nums.length
    let curDiff=0 //当前一对差值
    let preDiff=0 //前一对差值
    let result=1 //记录结果个数，默认前面第一个直接进数组
    for(let i=0;i<nums.length-1;i++){
        curDiff=nums[i+1]-nums[i]
        if((curDiff>0 && preDiff<=0)||(curDiff<0 && preDiff>=0)){
            result+=1
            preDiff=curDiff
        }
    }
    return result
};