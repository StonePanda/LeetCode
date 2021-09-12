/**
 * @param {number[]} nums
 * @return {number}
 */
//  var jump = function(nums) { 第一次写的，实在是没有思路，自己知道是错的
//     let cover=0
//     let count=0
//     for(let i=0;i<=cover;i++){
//         if(cover>=nums.length-1) break
//         if(nums[i]+i>cover){
//             count++
//             cover=nums[i]+i
//         }
//     }
//     return count
// }; [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]这个数组就会报错，输出是4，但实际上只要跳2就可以了

// 看了解析后写的
/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    if(nums.length==1) return 0
    let nextmaxcover=0
    let nowmaxcover=0
    let count=0
    for(let i=0;i<nums.length;i++){
        //更新最远覆盖范围需要一步一步地来
        //判断上次的最远覆盖距离没有到终点后再承认下一次的最远覆盖距离
        nextmaxcover=Math.max(nums[i]+i,nextmaxcover) //虽然一直更新，但是不一定用
        if(i==nowmaxcover){ //移动到我现在已经允许往后覆盖的范围了，就要启动下一步范围了,启动下一步范围相当于就跳了一步了
            count++
            nowmaxcover=nextmaxcover
        }
        if(nowmaxcover>=nums.length-1) return count
    }
};