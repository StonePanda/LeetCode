/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var findTargetSumWays = function(nums, target) {
//     // 其实和昨天的题目有相似之处，两伙数字相减之后等于target
//     // 那么(sum-target)/2就是背包的重量，也就是说如果(sum-target)/2不是整数，就可以直接return 0了
//     let sum=0
//     for(let i=0;i<nums.length;i++)
//     {
//         sum+=nums[i]
//     }
//     if((sum-target)%2==1)
//     {
//         return 0
//     }
//     let bagweight=(sum-target)/2
//     let dp=Array(nums.length)
//     for(let i=0;i<nums.length;i++)
//     {
//         dp[i]=Array(bagweight+1)
//     }
//     for(let i=0;i<nums.length;i++)
//     {
//         dp[i][0]=0
//     }
//     for(let j=0;j<dp[0].length;j++)
//     {
//         if(j>=nums[0])
//         {
//             dp[0][j]=nums[0]
//         }
//         else
//         {
//             dp[0][j]=0
//         }
//     }
//     for(let i=1;i<nums.length;i++)
//     {
//         for(let j=1;j<=bagweight;j++)
//         {
//             dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-nums[i]]+nums[i])
//         }
//     }
//     let count=0
//     for(let i=0;i<dp.length;i++)
//     {
//         if(dp[i][dp[i].length-1]==bagweight)
//         {
//             count+=1
//         }
//     }
//     return count
// };
// 第一次自己做，为了思路更清晰一些，还是用的二维数组，但是明显慢了好多啊！
// 而且第一遍出现了执行出错的问题，是我没有考虑全，如果sum-target<0,那么肯定是没办法完成的
// 在2 / 139例子的时候就出错了：
// [1]
// 2
// 另外，题目中说了数组是整数，而不是正整数
// 要好好考虑一下原本就有正负的问题
// 考虑复杂了，我一直在看整数数组，但是看了看提示，nums[i]都是大于0的，只有target是可能为负的
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var findTargetSumWays = function(nums, target) {
//     // 其实和昨天的题目有相似之处，两伙数字相减之后等于target
//     // 那么(sum-target)/2就是背包的重量，也就是说如果(sum-target)/2不是整数，就可以直接return 0了
//     let sum=0
//     for(let i=0;i<nums.length;i++)
//     {
//         sum+=nums[i]
//     }
//     // (1-2)%2==-1
//     if(Math.abs((sum-target)%2)==1)
//     {
//         return 0
//     }
//     let bagweight=0
//     if(target>0)
//     {
//         bagweight=(sum-target)/2
//     }
//     else{
//         bagweight=(sum+target)/2
//     }
//     // 二维数组dp
//     let dp=Array(nums.length)
//     for(let i=0;i<nums.length;i++)
//     {
//         dp[i]=Array(bagweight+1)
//     }
//     // dp数组初始化
//     for(let i=0;i<nums.length;i++)
//     {
//         dp[i][0]=0
//     }
//     for(let j=0;j<dp[0].length;j++)
//     {
//         if(j>=nums[0])
//         {
//             dp[0][j]=nums[0]
//         }
//         else
//         {
//             dp[0][j]=0
//         }
//     }
//     // dp数组计算
//     for(let i=1;i<nums.length;i++)
//     {
//         for(let j=1;j<=bagweight;j++)
//         {
//             dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-nums[i]]+nums[i])
//         }
//     }
//     let count=0
//     for(let i=0;i<dp.length;i++)
//     {
//         if(dp[i][dp[i].length-1]==bagweight)
//         {
//             count+=1
//         }
//     }
//     return count
// };
// target为负也考虑不好，上面的代码是在16/139的时候就报错了
// [0,0,0,0,0,0,0,0,1]
// 1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var findTargetSumWays = function(nums, target) {
//     // 其实和昨天的题目有相似之处，两伙数字相减之后等于target
//     // 那么(sum-target)/2就是背包的重量，也就是说如果(sum-target)/2不是整数，就可以直接return 0了
//     let sum=0
//     let zeronums=0
//     let positivenums=[]
//     for(let i=0;i<nums.length;i++)
//     {
//         sum+=nums[i]
//         if(nums[i]==0)
//         {
//             zeronums+=1
//         }
//         else
//         {
//             positivenums.push(nums[i])
//         }
//     }
//     // 还是把nums变成正整数数组
//     // (1-2)%2==-1
//     if(Math.abs((sum-target)%2)==1)
//     {
//         return 0
//     }
//     let bagweight=(sum-Math.abs(target))/2
//     // 二维数组dp
//     let dp=Array(positivenums.length)
//     for(let i=0;i<positivenums.length;i++)
//     {
//         dp[i]=Array(bagweight+1)
//     }
//     // dp数组初始化
//     for(let i=0;i<positivenums.length;i++)
//     {
//         dp[i][0]=0
//     }
//     for(let j=0;j<dp[0].length;j++)
//     {
//         if(j>=positivenums[0])
//         {
//             dp[0][j]=positivenums[0]
//         }
//         else
//         {
//             dp[0][j]=0
//         }
//     }
//     // dp数组计算
//     for(let i=1;i<positivenums.length;i++)
//     {
//         for(let j=1;j<=bagweight;j++)
//         {
//             // 竟然把这个忘掉了！
//             if(j<positivenums[i])
//             {
//                 dp[i][j]=dp[i-1][j]
//             }
//             else{
//                 dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-positivenums[i]]+positivenums[i])
//             }
//         }
//     }
//     console.log(dp)
//     let count=0
//     for(let i=0;i<dp.length;i++)
//     {
//         if(dp[i][dp[i].length-1]==bagweight)
//         {
//             count+=1
//         }
//     }
//     return count * (2 ** zeronums)
// };
// 又错了，可能思路就是错的，在例子12/139的时候错了
// [9,7,0,3,9,8,6,5,7,6]
// 2
// 哎，总感觉哪里不对，但是又说不上来
// 这一道题里面，自己想当然的原因是因为对dp[i][j]理解的不透彻
// 平常的01背包问题里，dp[i][j]表示0-i的物品，装进j容量背包里的最大价值
// 但是这道题却是0-i的物品，装进j容量的背包里，有几种组合
// 假如我们用滚动数组，dp[j]表示填满j容量的背包，有dp[j]种方法
// 那么不考虑nums[i]的时候，dp[j-nums[i]]种方法可以填满j-nums[i]容量的背包
// 那么填满j就是dp[j-nums[i]]种
// 所以dp[j]+=dp[j-nums[i]]
// 另外初始化的时候dp[0]=1,可以理解，自己也可以算算递归， 如果初始化为0，后面的都是0
// 然后就是我们到底是把bagweight当成是加法部分，还是减法部分，听我一句劝，何必跟自己过不去，非要用减法呢

// 教程上的c++也有错的地方，没有考虑target为负的情况
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    // 看看自己上面写的思路过程吧
    let sum=0
    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i]
    }
    if(Math.abs(target)>sum)
    {
        return 0
    }
    if((sum+target)%2==1)
    {
        return 0
    }
    let bagweight=(sum+target)/2
    let dp=Array(bagweight+1).fill(0)
    dp[0]=1
    for(let i=0;i<nums.length;i++)
    {
        for(let j=bagweight;j>=nums[i];j--)
        {
            dp[j]+=dp[j-nums[i]]
        }
    }
    return dp[bagweight]
};