/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    let snippetends=[]
    let sumsnippetends=0
    for(let i=0;i<s.length;i++){
        let sniend=s.lastIndexOf(s[i])
        for(let j=i;j<=sniend;j++)
            // 出现其他字母的时候
            // 选择比较靠后的那个作为终点
            if(s[j]!=s[i])
                sniend=Math.max(s.lastIndexOf(s[j]),sniend)
        i=sniend
        if(snippetends.length==0){
            snippetends.push(sniend+1)
            sumsnippetends+=Number(snippetends)
        }
        else{
            snippetends.push(sniend-sumsnippetends+1)
            sumsnippetends+=sniend-sumsnippetends+1
        }
    }
    return snippetends
}; 

// 这道题，自己做的，第一遍也通过了，就是第一遍在sniend取取最大值那里，我特别搞笑
// 一直拿s.lastIndexOf(s[j])和s.lastIndexOf(s[i])进行比较，导致输出一长串，哈哈，脑袋瓦特了

// 这个看了教程发现可能受限于语言的不同，C++写的比较复杂，用的hash结构
// 但是思路是找到所有字母的最后界限，然后字符串变成了数字数组
// 然后第一个数，找到最后一个和它相等的数，然后依次类推