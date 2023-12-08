const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


//i got this graph from the graph that was on the slide
var a = [
    [[2,1],[3,4],[1,2]],
    [[2,6],[4,10],[5,2]],
    [[0,9],[4,8]],
    [[2,2]],
    [[3,7],[6,1]],
    [[7,3]],
    [[5,2],[4,4]],
    [[6,1]]
];//the first items that are a pair says what node to go to, the second says the price
var b = [[[1,-2]],
[[0,1]]]
var c = [[[1,-1]],
[[2,0]],
[[3,0]],
[[4,0]],
[[5,0]],
[[6,0]],
[[7,0]],
[[8,0]],
[[0,0]]]
assert(hasCycle(JSON.parse(JSON.stringify(a))) == false)
assert(hasCycle(JSON.parse(JSON.stringify(b))) == true)
assert(hasCycle(JSON.parse(JSON.stringify(c))) == true)
