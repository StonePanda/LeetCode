/**
 * @param {number[]} ratings
 * @return {number}
 */
//  var candy = function(ratings) {
//     let candylist=[]
//     for(let i=0;i<ratings.length;i++){
//         if(i==0){
//             if(ratings[i]>ratings[i+1]) candylist.push(true)
//             else candylist.push(false)
//         }
//         else if(i==ratings.length-1){
//             if(ratings[i]>ratings[i-1]) candylist.push(true)
//             else candylist.push(false)
//         }
//         else{
//             if(ratings[i]>=ratings[i+1] && ratings[i]>ratings[i-1]) candylist.push(true)
//             else if(ratings[i]>ratings[i+1] && ratings[i]>=ratings[i-1]) candylist.push(true)
//             else candylist.push(false)
//         }
//     }
//     let candynow=1
//     let sumcandy=0
//     for(let i=0;i<candylist.length;i++){
//         if(candylist[i]==false) candynow=1
//         else candynow++
//         sumcandy+=candynow
//     }
//     return sumcandy
// };
// 这一天道题我可能理解错误，就是不太明白什么是评分最高
// 比如我错误的例子是[1,2,87,87,87,2,1]，我的返回值是9，但是我觉得确实应该返回9啊，但是正确答案是13


/**
 * @param {number[]} ratings
 * @return {number}
 */
//  var candy = function(ratings) {
//     let leftcmp=[]
//     let rightcmp=[]
//     for(let i=0;i<ratings.length;i++){
//         if(i==0){
//             leftcmp.push(false)
//             if(ratings[i]>ratings[i+1]) rightcmp.push(true)
//             else rightcmp.push(false)
//         }
//         else if(i==ratings.length-1){
//             rightcmp.push(false)
//             if(ratings[i]>ratings[i-1]) leftcmp.push(true)
//             else leftcmp.push(false)
//         }
//         else{
//             if(ratings[i]>ratings[i-1]) leftcmp.push(true)
//             else leftcmp.push(false)
//             if(ratings[i]>ratings[i+1]) rightcmp.push(true)
//             else rightcmp.push(false)
//         }
//     }
//     let leftcandynow=rightcandynow=1
//     let leftcandy=[]
//     let rightcandy=[]
//     let sumcandy=0
//     for(let i=0;i<leftcmp.length;i++){
//         if(leftcmp[i]==false) leftcandynow=1
//         else leftcandynow++
//         leftcandy.push(leftcandynow)
//     }
//     for(let i=rightcmp.length-1;i>=0;i--){
//         if(rightcmp[i]==false) rightcandynow=1
//         else rightcandynow++
//         rightcandy.unshift(rightcandynow)
//     }
//     for(let i=0;i<ratings.length;i++)
//         sumcandy+=Math.max(leftcandy[i],rightcandy[i])
//     return sumcandy
// }; 明白了比较的意思之后就比较好整理，看了评论里比较有意思的一个评论
// 向左看看，向右看看，工资和自己比较，出力比自己少，工资比自己少，合理，只知道自己比更高的邻居拿的多
// 比如[1,2,87,87,87,2,1],其实拿到的是[1,2,3,1,3,2,1],中间那个87的人，就是密薪制的意义，想起来点石成金哈哈
// 上面的代码其实思路上是对的，但是代码非常冗余，好多循环
// 看了教程后写的
/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    //从前往后，比较自己左边的
    let candy=[1]
    for(let i=1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]) candy.push(candy[candy.length-1]+1)
        else candy.push(1)
    }
    //再从后往前比较
    let sumcandy=0
    for(let i=ratings.length-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]) candy[i]=Math.max(candy[i+1]+1,candy[i])
        sumcandy+=candy[i]
    }
    return sumcandy+candy[candy.length-1]
};