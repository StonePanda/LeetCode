/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//  val==0表示没有被监控,val==1表示装监控,val==2表示被监控
// var minCameraCover = function(root) {
//     // 遍历二叉树
//     let tree=[root]
//     let result=0
//     let i=0
//     while(i<tree.length){
//         if(tree[i]!=null){
//             if(tree[i].left!=null && tree[i].right!=null){
//                 // 如果现在这个节点没监控，而且孩子都没有孩子，自己就得监控自己
//                 // 如果孩子有孩子，孩子装监控是可以监控自己的，让有孩子的孩子那个监控自己就可以，优先没孩子的监控父亲,因为没孩子的必须得装监控监控自己
//                 if(tree[i].val==0){
//                     // 总共有四种情况，左右孩子都有孩子，只有左有，只有右有，都没有
//                     if(tree[i].left.left==null && tree[i].left.right==null && tree[i].right.left==null && tree[i].right.right==null){
//                         // 都没有孩子，自己装监控
//                         tree[i].val=1
//                         tree[i].left.val=2
//                         tree[i].right.val=2
//                         result++
//                     }
//                     else if(tree[i].right.left==null && tree[i].right.right==null){
//                         // 右边没孩子,右边要装
//                         tree[i].right.val=1
//                         tree[i].val=2
//                         result++
//                     }
//                     else{
//                         // 左边没孩子,左边要装
//                         // 或者两边都有孩子,也是优先左边装
//                         tree[i].left.val=1
//                         tree[i].val=2
//                         if(tree[i].left.left!=null) tree[i].left.left.val=2
//                         if(tree[i].left.right!=null) tree[i].left.right.val=2
//                         result++
//                     }
//                 }
//                 tree.push(tree[i].left)
//                 tree.push(tree[i].right)
//             }
//             else if(tree[i].left!=null && tree[i].right==null){
//                 // 只有左孩子,左孩子没孩子的话,左孩子装监控能监控自己,自己装监控也能监控自己,优先孩子装
//                 if(tree[i].val==0){
//                     tree[i].left.val=1
//                     tree[i].val=2
//                     if(tree[i].left.left!=null) tree[i].left.left.val=2
//                     if(tree[i].left.right!=null) tree[i].left.right.val=2
//                     result++
//                 }
//                 tree.push(tree[i].left)
//                 tree.push(tree[i].right)
//             }
//             else if(tree[i].left==null && tree[i].right!=null){
//                 if(tree[i].val==0){
//                     tree[i].right.val=1
//                     tree[i].val=2
//                     if(tree[i].right.left!=null) tree[i].right.left.val=2
//                     if(tree[i].right.right!=null) tree[i].right.right.val=2
//                     result++
//                 }
//                 tree.push(tree[i].left)
//                 tree.push(tree[i].right)
//             }
//             else{
//                 // 没有孩子的情况下,还没有被监控
//                 if(tree[i].val==0){
//                     tree[i].val=1
//                     result++
//                 }
//             }
//         }
//         i++
//     }
//     return result
// };
// 我写的很复杂，还把情况分的很细，不过比较值得奖励的是凭借自己的力量写出了遍历二叉树
// 但是上面的代码在例子134/171的时候就失败了
// 例子：[0,null,0,null,0,0,0]，我输出的是3，但是理论上应该输出2

// 看了教程写的
// 这真的好难，不写教程完全写不出来的程度
// 注意倒序，从叶子往上推
// 然后null节点自动补全
// 然后叶子节点return 0 而不是 return2 的操作很神
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minCameraCover = function(root) {
    let result=0
    // 自己在反复试错的过程也发现了,如果是叶子节点,那么叶子的父节点一定要有摄像头
    // 也就是说我们要倒叙遍历二叉树
    // 同时假装二叉树是满二叉树
    function whatNode(node){
        // 空节点返回2,相当于被覆盖,被覆盖就不用管了
        if(node==null) return 2
        
        let left=whatNode(node.left)
        let right=whatNode(node.right)
        // 叶子节点
        // 或者倒叙到最后,左右子节点都被覆盖的root
        if(left==2 && right==2)
            return 0
        
        // 有孩子是叶子节点,那么就必须装摄像头
        if(left==0||right==0){
            result++
            return 1
        }
        
        // 如果有孩子装了摄像头,被覆盖也返回2
        if(left==1 || right==1) return 2
    }
    if(whatNode(root)==0) result++
    return result
};