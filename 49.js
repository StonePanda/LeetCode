/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 最简单的思路是把每个词都sort一下
    // 然后完全相同的词就是字母异位词，这里可以先把整个数组按照长度sort一下
    // 但是这样的时间复杂度相当高
    // let result=[]
    // let ori=strs.slice()
    // // strs.sort((a,b)=>a.length-b.length)
    // // 按照长度自然升序排序
    // // 上面之前那个想法感觉不好实现
    // for(let i=0;i<strs.length;i++)
    // {
    //     strs[i].sort()
    // }
    // strs.sort()
    // 排序后再排序也不对，因为答案要返回原来的单词
    // 可以加一个map去考虑映射排序之后的结果
    // 那这么一说感觉就是用map啊，排序后的是key
    // 没排序的是值
    let map = {}
        // Object的键均为Strings类型，在Map里键可以是任意类型。
        // 这样赋值是键值对对象
        // 对象的插入：obj.ket=val || obj[key]=val
        // 对象的删除：delete obj.key || delete obj[key]
        // 对象的修改：和插入应该一样
        // 对象的查询：就是访问然后看obj[key]看是不是undefined
        // 另外循环的话是只能forin
    for (let i = 0; i < strs.length; i++) {
        let tmp = strs[i].slice()
        let tmpsort = tmp.split('').sort().join('')
            // 这里的知识点是sort只用于array
        if (map[tmpsort] === undefined) {
            // sort之后原数组就改变了
            map[tmpsort] = [strs[i]]
        } else {
            map[tmpsort].push(strs[i])
        }
    }
    let result = []
    for (let key in map) {
        // forin只能用于key的访问，不能[key,val]
        result.push(map[key])
    }
    return result
};