/**
 * @param {number} m
 * @param {number} n
 */
// 这一道题，跟上次那个随机数组是完全不一样的
// 是吧二维的一个矩阵，对应到一维里面
var Solution = function(m, n) {
    this.m = m
    this.n = n
    this.total = m * n
        // 总共有m*n个0
    this.map = new Map()
        // 用来记录被修改过的映射
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
    // 怎么找一个随机数(i,j)
    // Math.random不行？
    // 这里要返回的不是重置后的数组，而是选中的随机值(i,j)
    const x = Math.floor(this.total * Math.random())
        // x是在0-total里面随便选择的一个值
        // 从剩下的0里选一个x替换为1
    this.total--
        // this.total显然是最后一个0的位置
        // 0的数目减少1
        const idx = this.map.get(x) || x
            // 如果x不在map里面，那么idx=x
            // 如果x已经在里面了(之前修改过x，那么修改最后一个0)，那么idx就等于变换x的时候剩下的0的个数
    this.map.set(x, this.map.get(this.total) || this.total)
        // 如果最后一个0被修改过了，那么就修改最后一个0修改的时候的最后一个0，否则就是最后一个0
        // 把x记录到map里面，就可以得到x,this.total 改变了x，这时候有this.total个0
        // console.log(this.map)
    return [Math.floor(idx / this.n), idx % this.n]
        // 这里是因为idx=i*n+j
        // 这里可以自己做个测试，假如m=2,n=3
        // 假如得到x=3，那么idx=3
        // map里面，存了(3,5)
        // 假如得到2
        // 那么idx=2
        // map里面，(2,4)
        // 又得到3
        // 那么idx=5
        // map里面，变成(3,3)
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
    // 这
    this.total = this.m * this.n
    this.map.clear()
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */