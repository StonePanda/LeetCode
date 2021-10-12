/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    // 突然意识到这是一个二维容量的书包最多能装多少个二维石头的题目
    // 怎么降维呢？
    // 那只能是三维数组dp[i][j][k]去表示了？
    // 试试：
    let stones=Array(strs.length).fill([])
    for(let i=0;i<strs.length;i++)
    {
        stones[i]=[strs[i].length-strs[i].replaceAll('0','').length,strs[i].length-strs[i].replaceAll('1','').length]
    }
    // 我竟然还想搞三维数组！！啊！！疯了！！
    // 还是那个规矩，一般想要的结果就是dp数组的意义

    // 确定递推公式
    // 自己之前的思路是对的，但是在max里面，有两个值，但是我却没有想到自身？
    // 就是对于一个str字符串，如果我加了它，那么就是，dp[i][j]=dp[i-zeronums][j-onenums]+1
    // 但是这里是一个字符串数组，所以我们要循环，dp[i][j]初始值是0，不断的取比较大的值：
    // 然后这个看起来是不是就是用滚动数组解决动态规划问题的那个！！
    // dp[i][j]=Math.max(dp[i][j],dp[i-zeronums][j-onenums]+1)

    // 下面这种初始化方法有毒
    // let dp=Array(m+1).fill(Array(n+1).fill(0))
    // 这样初始化的时候，最后所有的数组都会和最后一个数组一样，不知道为什么

    let dp=Array(m+1).fill([])
    for(let i=0;i<=m;i++)
    {
        dp[i]=Array(n+1).fill(0)
    }
    // 滚动数组的初始化，在这里是不存在负值的噻，初始化为0就可以了，就是什么都不放嘛
    // 滚动数组的遍历顺序是，先遍历石头，然后倒叙遍历容量！
    for(let s=0;s<stones.length;s++)
    {
        for(let i=m;i>=stones[s][0];i--)
        {
            for(let j=n;j>=stones[s][1];j--)
            {
                dp[i][j]=Math.max(dp[i][j],dp[i-stones[s][0]][j-stones[s][1]]+1)
            }
            // console.log(dp)
        }
    }
    return dp[m][n]
};


// 这一道题方法对了之后，初始化数组那里又出现了新问题
// 还有赋值数组的时候
// 分开赋值，以及用fill(Array(n+1).fill(0))到底有什么毛病呢