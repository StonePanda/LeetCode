/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
//  var findItinerary = function(tickets) {
//     let result=["JFK"]
//     let used=Array(tickets.length).fill(false)
//     function backtracking(tickets,used){
//         for(let i=0;i<used.length;i++){
//             if(used[i]==false) break
//             else if(i==used.length-1) return
//         }
//         let tmpi=-1
//         for(let i=0;i<tickets.length;i++){
//             if(tickets[i][0]==result[result.length-1] && (tmpi==-1 || tickets[tmpi][1]>tickets[i][1]) && used[i]==false)
//                 tmpi=i
//         }
//         if(tmpi!=-1){
//             result.push(tickets[tmpi][1])
//             used[tmpi]=true
//             backtracking(tickets,used)
//         }
//     }
//     backtracking(tickets,used)
//     return result
// };
// 上面是第一遍自己写的，但是在例子18/80的时候就错了：
// [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]

// for(let i=0;i<tickets.length && tickets[i][0]==result[result.length-1];i++){
//     console.log(tickets[i])
// }

// 上面这一段代码，&&里面的条件一旦不满足，就不再i++，而是直接结束循环
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
//  var findItinerary = function(tickets) {
//     let result=["JFK"]
//     let used=Array(tickets.length).fill(false)
//     function backtracking(tickets,used){
//         for(let i=0;i<used.length;i++){
//             if(used[i]==false) break
//             else if(i==used.length-1) {
//                 console.log('该return了')
//                 console.log(result)
//                 return
//             }
//         }

//         for(let i=0;i<tickets.length;i++){
//             if(tickets[i][0]!=result[result.length-1] || used[i]==true) 
//                 continue
//             result.push(tickets[i][1])
//             used[i]=true
//             backtracking(tickets,used)
//             result.pop()
//             used[i]=false
//         }
//     }
//     console.log('递归前'+result)
//     backtracking(tickets,used)
//     console.log('递归后'+result)
//     return result
// };
// 针对上面的例子18写出来的递归，但是上面的函数输出结果是：
// 递归前JFK
// 该return了
// [ 'JFK', 'NRT', 'JFK', 'KUL' ]
// 递归后JFK

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
//  var findItinerary = function(tickets) {
//     let result=["JFK"]
//     let used=Array(tickets.length).fill(false)
//     function backtracking(tickets,used){
//         for(let i=0;i<used.length;i++){
//             if(used[i]==false) break
//             else if(i==used.length-1) {
//                 console.log(result)
//                 return result
//             }
//         }

//         for(let i=0;i<tickets.length;i++){
//             if(tickets[i][0]!=result[result.length-1] || used[i]==true) 
//                 continue
//             result.push(tickets[i][1])
//             used[i]=true
//             backtracking(tickets,used)
//             result.pop()
//             used[i]=false
//         }
//     }
//     backtracking(tickets,used)
// };

// 上面这个return 的是undefined，但是输出确实正确输出
// return: undefined
// stdout: [ 'JFK', 'NRT', 'JFK', 'KUL' ]
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
//  var findItinerary = function(tickets) {
//     let result=["JFK"]
//     let used=Array(tickets.length).fill(false)
//     function backtracking(tickets,used){
//         for(let i=0;i<used.length;i++){
//             if(used[i]==false) break
//             else if(i==used.length-1) {
//                 console.log(result)
//                 console.log(used)
//                 return
//             }
//         }

//         for(let i=0;i<tickets.length;i++){
//             if(tickets[i][0]!=result[result.length-1] || used[i]==true) 
//                 continue
//             result.push(tickets[i][1])
//             used[i]=true
//             backtracking(tickets,used)
//             result.pop()
//             used[i]=false
//         }
//     }
//     backtracking(tickets,used)
//     console.log(used)
//     console.log(result)
// };
// 上面这个程序的输出：

// [ 'JFK', 'NRT', 'JFK', 'KUL' ]
// [ true, true, true ]
// [ false, false, false ]
// [ 'JFK' ]

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
//  var findItinerary = function(tickets) {
//     let endresult=[]
//     let result=["JFK"]
//     let used=Array(tickets.length).fill(false)
//     function backtracking(tickets,used){
//         for(let i=0;i<used.length;i++){
//             if(used[i]==false) break
//             else if(i==used.length-1) {
//                 endresult=result.slice()
//                 return
//             }
//         }
//         for(let i=0;i<tickets.length;i++){
//             if(tickets[i][0]!=result[result.length-1] || used[i]==true) 
//                 continue
//             result.push(tickets[i][1])
//             used[i]=true
//             backtracking(tickets,used)
//             result.pop()
//             used[i]=false
//         }
//     }
//     backtracking(tickets,used)
//     return endresult
// };
// 这个可以确定例子18的问题，但是问题描述里的例子2都没有办法解决
// 放弃了，还是看教程吧

// 教程上面是C++的，好难
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
//  var findItinerary = function(tickets) {      
//     let endresult=[]
//     let result=["JFK"]
//     let used=Array(tickets.length).fill(false)
//     function backtracking(tickets,used){
//         for(let i=0;i<used.length;i++){
//             if(used[i]==false) break
//             else if(i==used.length-1) {
//                 if(endresult.length==0 || endresult.toString()>result.toString())
//                     endresult=result.slice()
//                 return
//             }
//         }
//         for(let i=0;i<tickets.length;i++){
//             if(tickets[i][0]!=result[result.length-1] || used[i]==true)
//                 continue
//             result.push(tickets[i][1])
//             used[i]=true
//             backtracking(tickets,used)
//             result.pop()
//             used[i]=false
//         }
//     }
//     backtracking(tickets,used)
//     return endresult
// };
// 这个在例子11的时候就已经超出时间限制了

// 在教程里看到的JS解答
// const findItinerary = (tickets) => {
//     const res = ['JFK']; // 初始放入起点'JFK'
//     const map = {};      // 邻接表
  
//     for (const ticket of tickets) { // 遍历tickets，建表
//       const [from, to] = ticket;    // 每一张机票，读出起点和终点
//       if (!map[from]) {
//         map[from] = []; // 初始化
//       }
//       map[from].push(to); // 建立映射
//     }
  
//     for (const city in map) { // 按照字母顺序，小的在前
//       map[city].sort();
//     }
  
//     const dfs = (city, used) => { // city是当前访问的城市、used是已用掉的机票数
//       if (used == tickets.length) { // 用光了所有机票，路径找到了
//         return true;
//       };
//       const nextCities = map[city]; // 获取下一站能去的城市list
//       if (!nextCities || nextCities.length == 0) { // 没有邻接城市了
//         return false; // 还没用光机票，就没有下一站了，返回false
//       }
//       for (let i = 0; i < nextCities.length; i++) { // 设置出各种选项（递归分支）
//         const next = nextCities[i]; // 当前选择的下一站
//         nextCities.splice(i, 1);    // 飞出地的list中删掉这一站
//         res.push(next);             // 将该选择推入res
//         if (dfs(next, used + 1)) {  // 在该递归分支中能找到一个用完所有机票的路径
//           return true;
//         } else {
//           nextCities.splice(i, 0, next); // 将删掉的这一站重新插回去
//           res.pop();                     // 推入res的选择，也撤销
//         }
//       }
//     };
  
//     dfs('JFK', 0); // 从'JFK'城市开始遍历，当前用掉0张机票
//     return res;
//   };
//   作者：xiao_ben_zhu
//   链接：https://leetcode-cn.com/problems/reconstruct-itinerary/solution/shou-hua-tu-jie-liang-chong-jie-fa-zui-ji-ben-de-h/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 var findItinerary = function(tickets) {
    const result=['JFK']
    const map={} 
    // 这里的map实际上就是一个Object实例，而不是Map实例

    for(const ticket of tickets){
        const [from,to]=ticket
        // 什么时候js的赋值篇总结一下？
        if(!map[from]){
            // !undefined==true
            // 初始化
            map[from]=[]
        }
        map[from].push(to)
        // 建立从出发机场到到达机场的映射
    }

    for(const city in map){
        // 默认就是字典排序，小的在前
        map[city].sort()
    }

    //函数的声明，或者用自己常用的function dfs(city,used) 
    const dfs=(city,used)=>{
        // city是当前访问的城市，used是已用掉的机票数
        if(used==tickets.length) return true
        // 用光了所有机票
        const nextCities=map[city]
        // 下一站到达的城市,可能并不是出发地点
        if(!nextCities || nextCities.length==0){
            // 这两个条件的顺序不能更改
            // 没有临接城市
            return false
        }
        for(let i=0;i<nextCities.length;i++){
            const next=nextCities[i]
            // 选择下一站
            nextCities.splice(i,1)
            result.push(next)
            if(dfs(next,used+1)){
                return true
            }
            else{
                nextCities.splice(i,0,next)
                result.pop()
            }
        }
    }
    dfs('JFK',0)
    return result
};

// 跟上面的一摸一样，因为严格来说这个回溯确实和平常的不太一样