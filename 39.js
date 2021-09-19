/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//  var combinationSum = function(candidates, target) {
//     let result=[]
//     let path=[]
//     function backtracking(candidates,target,sum,startIndex){
//         console.log(path)
//         console.log(sum)
//         if(sum>target) return
//         if(sum==target){
//             result.push(path.slice())
//             return
//         }
//         for(i=startIndex;i<candidates.length;i++){
//             sum+=candidates[i]
//             path.push(candidates[i])
//             // 如果i+1的话就不能重复读值，所以i就可以
//             backtracking(candidates,target,sum,startIndex) 
//             sum-=candidates[i]
//             path.pop()
//         }
//     }
//     backtracking(candidates,target,0,0)
//     return result
// };

// 这道题自己在写的时候就发现无法判断递归，纵向遍历的变化，感觉有点无限递归
// 然后参数是先选题目给定的
// 然后终止条件
// 哎，反正就好难，然后我按照教程写的js代码发现和C++代码一模一样
// 但是js的结果确实错的？
// 真是奇怪！！

// 教程里的C++代码如下
// class Solution {
//     private:
//         vector<vector<int>> result;
//         vector<int> path;
//         void backtracking(vector<int>& candidates, int target, int sum, int startIndex){
//             if(sum>target){
//                 return;
//             }
//             if(sum==target){
//                 result.push_back(path);
//                 return;
//             }
//             for(int i=startIndex;i<candidates.size();i++){
//                 sum+=candidates[i];
//                 path.push_back(candidates[i]);
//                 // 不用i+1了，表示可以重复读取当前的数
//                 backtracking(candidates,target,sum,i);
//                 sum-=candidates[i];
//                 path.pop_back();
//             }
//         }
//     public:
//         vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
//             result.clear();
//             path.clear();
//             backtracking(candidates,target,0,0);
//             return result;
//         }
//     };

// 我那天是没睡好么！！
// 真是脑子秀逗了！
// 还一脸自信地觉得，就是啊，教程代码都这么写的，为什么我执行得不对呢
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let result=[]
    let path=[]
    function backtracking(candidates,target,sum,startIndex){
        if(sum>target) return
        if(sum==target){
            result.push(path.slice())
            return
        }
        for(let i=startIndex;i<candidates.length;i++){
            sum+=candidates[i]
            path.push(candidates[i])
            // 如果i+1的话就不能重复读值，所以i就可以
            backtracking(candidates,target,sum,i) 
            sum-=path.pop()
        }
    }
    backtracking(candidates,target,0,0)
    return result
};

// 总共有两点不一样，一个是bt函数里的for循环，应该是let i=，我竟然没写let！
// 然后结果立马从输入[2,3,5] 8，输出[2,2,2,2]变成了输出一大堆有重复值（顺序不一样），但是确实正确输出了所有结果
// 然后for循环里调bt函数的时候，最后一个参数应该是i，我写的startIndex？
// 就这样吧，中秋假期前一天看来是想玩
// 然后下午晚上玩了很久的星露谷
// 今天早上起来接着玩!
// 但是项目必须要写了
// 后面调整做题量,一天一道,有兴趣了再做吧!