// 第一遍自己写的
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//  var findContentChildren = function(g, s) {
//     for(let i=0;i<g.length-1;i++){
//         for(let j=i+1;j<g.length;j++){
//             if(g[i]>g[j]){
//                 let temp=g[i]
//                 g[i]=g[j]
//                 g[j]=temp
//             }
//         }
//     }
    
//     for(let i=0;i<g.length-1;i++){
//         for(let j=i+1;j<g.length;j++){
//             if(s[i]>s[j]){
//                 let temp=s[i]
//                 s[i]=s[j]
//                 s[j]=temp
//             }
//         }
//     }
    
//     for(let i=0;i<Math.min(g.length,s.length);i++){
//         if(g[i]>s[i]){
//             // 这里第一次写的时候，return的是i-1，忘记了数组下标和个数差1了。
//             return i; 
//         }
//     }
//     };
// 上面的代码报错了，在示例g=[1,2],s=[1,2,3]的时候就报错了

//第二遍自己写的
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//  var findContentChildren = function(g, s) {
//     // 思路：g和s分别从小到大排序，然后对比值，直到出现s[j]<g[j]的情况，输出数值
//     for(let i=0;i<g.length-1;i++){
//         for(let j=i+1;j<g.length;j++){
//             if(g[i]>g[j]){
//                 let temp=g[i]
//                 g[i]=g[j]
//                 g[j]=temp
//             }
//         }
//     }
    
//     for(let i=0;i<g.length-1;i++){
//         for(let j=i+1;j<g.length;j++){
//             if(s[i]>s[j]){
//                 let temp=s[i]
//                 s[i]=s[j]
//                 s[j]=temp
//             }
//         }
//     }
    
//         for(let i=0;i<Math.min(g.length,s.length);i++){
//             if(g[i]>s[i]){
//                 return i; 
//             }
//         }
//         return Math.min(g.length,s.length)
//     };

// 这次错误虽然更正了上次数组大小没考虑的情况,但是在g=[7,8,9,10],s=[5,6,7,8]的时候又报错了
// 这时候可以发现是自己比较的思路错了,应该对每个g,看有没有s能满足,满足后,将s置0,然后继续往后面比对

// 第三遍自己写的,记得s排序的时候,把g改成s
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//  var findContentChildren = function(g, s) {
//     for(let i=0;i<g.length-1;i++){
//         for(let j=i+1;j<g.length;j++){
//             if(g[i]>g[j]){
//                 let temp=g[i]
//                 g[i]=g[j]
//                 g[j]=temp
//             }
//         }
//     }
    
//     for(let i=0;i<g.length-1;i++){
        // for(let j=i+1;j<g.length;j++){  //这里,到最后debug才发现把s写成了g,导致有一个案例始终过不去!
//             if(s[i]>s[j]){
//                 let temp=s[i]
//                 s[i]=s[j]
//                 s[j]=temp
//             }
//         }
//     }
    
//     let count=0
//     for(let i=0;i<g.length;i++){
//         for(let j=0;j<s.length;j++){
//             if(g[i]<=s[j]){
//                 s[j]=0
//                 count+=1
//                 break
//             }
//         }
//     }
//     return count
//     };

// 最后看了解析写的,主要是双for循环变成了单循环,if代替了小孩的遍历,为什么不能把饼干放进if里面,因为要返回的是小孩的数目,有几个小孩已经满足了,肯定是if小孩,for饼干

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    for(let i=0;i<g.length-1;i++){
        for(let j=i+1;j<g.length;j++){
            if(g[i]>g[j]){
                let temp=g[i]
                g[i]=g[j]
                g[j]=temp
            }
        }
    }
    
    for(let i=0;i<s.length-1;i++){
        for(let j=i+1;j<s.length;j++){
            if(s[i]>s[j]){
                let temp=s[i]
                s[i]=s[j]
                s[j]=temp
            }
        }
    }
    
    let count=0
    for(let i=0;i<s.length;i++){
        if(count<g.length && g[count]<=s[i]){
            count++
        }
    }
    return count
};