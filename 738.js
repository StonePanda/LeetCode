/**
 * @param {number} n
 * @return {number}
 */
//  var monotoneIncreasingDigits = function(n) {
    // // 对js来说，肯定是转换称字符串更方便
    // n=String(n)
    // // 倒序检查，因为要想改变后最大，最先改变的必须得是个位数
    // // 然后依次类推
    // for(let i=n.length-1;i>=1;i--){
        
    //     if(n[i]<n[i-1]){
    //         // 字符串的更改
    //         // 呵呵，昨天才说js处理字符串的能力很强
    //         // 今天发现连指定位置的字符更改都不行，哼！
    //         // n[i]='9' n[i]要变成'9'但是这不行
    //         // 中间会有一个自动的String转Number
    //         // 所以得把number再转会string
    //         // n[i-1]要比原来小1，但是这样也不行
    //         // n[i-1]=String(n[i-1]-1)
    //         // mdn上强烈建议使用+符号代替concat方法
    //         n=n.slice(0,i-1)+String(n[i-1]-1)+'9'+n.slice(i+1,n.length)
    //     }
    // }
    // return Number(n)
// };

// 第一次自己写的,在n==100的时候就不行了
// 再加上发现js处理字符串的能力没有那么强
// 所以还是当成Number类型去使用吧
// 算了放弃了,当Number用的时候判断递增都非常麻烦!
// 还是改进原来的字符串方法吧

/**
 * @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
    // 对js来说，肯定是转换称字符串更方便
    n=String(n)
    // 倒序检查，因为要想改变后最大，最先改变的必须得是个位数
    // 然后依次类推
    for(let i=n.length-1;i>=1;i--){
        
        if(n[i]<n[i-1]){
            n=n.slice(0,i-1)+String(n[i-1]-1)+'9'.repeat(n.length-i)
            // 字符串的更改
            // 呵呵，昨天才说js处理字符串的能力很强
            // 今天发现连指定位置的字符更改都不行，哼！
            // n[i]='9' n[i]要变成'9'但是这不行
            // 中间会有一个自动的String转Number
            // 所以得把number再转会string
            // n[i-1]要比原来小1，但是这样也不行
            // n[i-1]=String(n[i-1]-1)
            // mdn上强烈建议使用+符号代替concat方法
        }
    }
    return Number(n)
};
// 虽然是自己写出来了,但是第二次提交的时候比如98899这种情况,我之前的想法老师把开始变小的地方变成前面-1,后面变9
// 但是这样的话,变9后面的就可能违反递增了,所以最后发现不是后面不变,而是全部变9
// Js的repeat函数在这里发挥了很大的作用!
// 看了教程,C++的字符串就可以直接根据索引更改字符!啊!哼!JS!你真的不行!