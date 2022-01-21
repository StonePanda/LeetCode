/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const idxMap = new Map(), explored = new Set()
    for(let i=0;i<arr.length;i++){
        if(idxMap.has(arr[i]))
            idxMap.get(arr[i]).push(i)
        else
            idxMap.set(arr[i], [i])
    }
    let nodes = [0], step = 0
    explored.add(0)
    while(nodes.length > 0){
        const nxt = new Array()
        for(const cur of nodes){
            if(cur == arr.length - 1)
                return step
            if(idxMap.has(arr[cur])){
                for(const other of idxMap.get(arr[cur])){
                    if(!explored.has(other)){
                        explored.add(other)
                        nxt.push(other)
                    }
                }
                idxMap.delete(arr[cur])
            }
            if(!explored.has(cur + 1)){
                explored.add(cur + 1)
                nxt.push(cur + 1)               
            }
            if(cur > 0 && !explored.has(cur - 1)){
                explored.add(cur - 1)
                nxt.push(cur - 1)
            }
        }
        nodes = nxt
        step++
    }
    return arr.length - 1
};

作者：himymBen
链接：https://leetcode-cn.com/problems/jump-game-iv/solution/pythonjavajavascriptgo-bfs-by-himymben-2l8g/
