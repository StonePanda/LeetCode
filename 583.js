// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {number}
//  */
// var minDistance = function(word1, word2) {
//     // 光看题目，上一道题其实做的是一个字符串的删除操作
//     // 这次是两个字符串的删除操作
//     // 那么还是定义dp[i][j]为word1[0,i-1]和word2[0,j-1]删除最少dp[i][j]个字符之后能够相同
//     // 先定义
//     let dp = Array(word1.length + 1)
//     for (let i = 0; i < dp.length; i++) {
//         dp[i] = Array(word2.length + 1)
//     }
//     // 然后推递推公式
//     // 当word1[i-1]==word2[j-1]的时候，相当于这两个可以抵消，那么前面所需的步数就是现在所需的步数，dp[i][j]=dp[i-1][j-1]
//     // 当word1[i-1]不等于word2[j-1]的时候，那么就只能以删除的方式，可能删除word1，也可能删除word2里面的，那么需要的是最少的步数
//     // dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])

//     // 然后是初始化
//     // 当i==0的时候，就是word2[0,j-1]变成空序列需要的步数就是j-1
//     // 当j==0的时候，同样的道理，就是i-1
//     // 那么dp[0][0]肯定是0，因为空序列本来就相等


//     // 上面是我自己写的推测思路
//     // 但是出现了问题，看了教程之后发现是在word1[i-1]不等于word2[j-1]的时候出现了问题
//     // 注意删除操作是走了一步的，所以可能删除word1的时候，dp[i][j]=dp[i-1][j]+1
//     // 其实还是之前那道题目和这道题目对dp数组的定义理解得不透彻
//     // 那么也有可能是全都删除，所以也有可能是dp[i][j]=dp[i-1][j-1]+2
//     // 所以是dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+2)

//     // 先进行初始化
//     dp[0][0] = 0
//     for (let i = 1; i < dp.length; i++) {
//         dp[i][0] = i - 1
//     }
//     for (let j = 1; j < dp[0].length; j++) {
//         dp[0][j] = j - 1
//     }

//     for (let i = 1; i < dp.length; i++) {
//         for (let j = 1; j < dp[0].length; j++) {
//             if (word1[i - 1] == word2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1]
//             } else {
//                 dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2)
//             }
//         }
//     }
//     console.log(dp)
//     return dp[word1.length][word2.length]
// };

// 第一遍自己走了一遍思路，但是不太对，然后根据教程又走了一下
// 结果做出来还是错了，因为初始化错误！
// 还是对dp[i][j]的定义理解不透彻，当i==0的时候，word2[0,j-1]变成空字符需要的是j步！
// 我是怎么给搞成下标了

// 然后正确的应该是：
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // 光看题目，上一道题其实做的是一个字符串的删除操作
    // 这次是两个字符串的删除操作
    // 那么还是定义dp[i][j]为word1[0,i-1]和word2[0,j-1]删除最少dp[i][j]个字符之后能够相同
    // 先定义
    let dp = Array(word1.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(word2.length + 1)
    }
    // 然后推递推公式
    // 当word1[i-1]==word2[j-1]的时候，相当于这两个可以抵消，那么前面所需的步数就是现在所需的步数，dp[i][j]=dp[i-1][j-1]
    // 当word1[i-1]不等于word2[j-1]的时候，那么就只能以删除的方式，可能删除word1，也可能删除word2里面的，那么需要的是最少的步数
    // dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])

    // 然后是初始化
    // 当i==0的时候，就是word2[0,j-1]变成空序列需要的步数就是j-1
    // 当j==0的时候，同样的道理，就是i-1
    // 那么dp[0][0]肯定是0，因为空序列本来就相等


    // 上面是我自己写的推测思路
    // 但是出现了问题，看了教程之后发现是在word1[i-1]不等于word2[j-1]的时候出现了问题
    // 注意删除操作是走了一步的，所以可能删除word1的时候，dp[i][j]=dp[i-1][j]+1
    // 其实还是之前那道题目和这道题目对dp数组的定义理解得不透彻
    // 那么也有可能是全都删除，所以也有可能是dp[i][j]=dp[i-1][j-1]+2
    // 所以是dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+2)

    // 先进行初始化
    dp[0][0] = 0
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j < dp[0].length; j++) {
        dp[0][j] = j
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2)
            }
        }
    }
    // console.log(dp)
    return dp[word1.length][word2.length]
};