/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// 这一道题目自己没有做出来，之前自己的想法是想按照类似冒泡排序去做的
// 但是两维的比较让人很头疼，没有找到怎么排的if条件
// 这道题的教程还是写的不错的
 var reconstructQueue = function(people) {
    let queue=[]
    // 这种题目比较两维，其实是和老师分糖那道题一样，一定先弄好一维
    // 再去弄另一维，因为这道题自己比较一下，按照身高排序的话
    // 刚好对应的[1]值就可以作为索引来指引数据插入
    // sort函数的比较函数一定要用好
    people.sort(function(a,b){
        if(a[0]==b[0])
            return a[1]-b[1]
        return b[0]-a[0]
    })
    for(let i=0;i<people.length;i++){ 
        // 突然发现js没办法在特定索引位置插入元素，原生JS只能用奇奇怪怪的方法
        queue.splice(people[i][1],0,people[i])
    }
    return queue
};