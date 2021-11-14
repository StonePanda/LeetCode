var MapSum = function() {
    this.key = []
    this.val = []
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
// MapSum.prototype.insert = function(key, val) {
//     if (this.key.includes(key)) {
//         // this.val.splice(this.key.indexOf(key),1,val)
//         this.val[this.key.indexOf(key)] = val
//     } else {
//         this.key.push(key)
//         this.val.push(val)
//     }
// };

// /** 
//  * @param {string} prefix
//  * @return {number}
//  */
// MapSum.prototype.sum = function(prefix) {
//     let result = 0
//     for (let i = 0; i < this.key.length; i++) {
//         // 我主要是错在前缀，就必须是真地前缀
//         if (this.key[i].includes(prefix)) {
//             result += this.val[i]
//         }
//         console.log(this.key[i], prefix)
//         console.log(result)
//     }
//     return result
// };

// 下面是官方的题解
// var MapSum = function() {
//     this.map = new Map();

// };

// MapSum.prototype.insert = function(key, val) {
//     this.map.set(key, val);
// };

// MapSum.prototype.sum = function(prefix) {
//     let res = 0;
//     for (const s of this.map.keys()) {
//         if (s.startsWith(prefix)) {
//             res += this.map.get(s);
//         }
//     }
//     return res;
// };

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/map-sum-pairs/solution/jian-zhi-ying-she-by-leetcode-solution-j4xy/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

// 上面是错误的


var MapSum = function() {
    this.key = []
    this.val = []
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    if (this.key.includes(key)) {
        // this.val.splice(this.key.indexOf(key),1,val)
        this.val[this.key.indexOf(key)] = val
    } else {
        this.key.push(key)
        this.val.push(val)
    }
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let result = 0
    for (let i = 0; i < this.key.length; i++) {
        // 我主要是错在前缀，就必须是真地前缀
        // if(this.key[i].includes(prefix))
        // {
        //     result+=this.val[i]
        // }
        // console.log(this.key[i],prefix)
        // console.log(result)
        if (this.key[i].startsWith(prefix)) {
            result += this.val[i]
        }
    }
    return result
};

// 下面是官方的题解
// var MapSum = function() {
//     this.map = new Map();

// };

// MapSum.prototype.insert = function(key, val) {
//     this.map.set(key, val);
// };

// MapSum.prototype.sum = function(prefix) {
//     let res = 0;
//     for (const s of this.map.keys()) {
//         if (s.startsWith(prefix)) {
//             res += this.map.get(s);
//         }
//     }
//     return res;
// };

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/map-sum-pairs/solution/jian-zhi-ying-she-by-leetcode-solution-j4xy/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */