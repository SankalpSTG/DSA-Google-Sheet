function recursion(sum, l, r, x, y, i){
    if(sum >= x && sum <= y) return 1
    if((l + i) > r) return 0
    var whenIChose = recursion(sum + (l + i), l, r, x, y, i + 1)
    var whenINotChose = recursion(sum, l, r, x, y, i + 1)
    if(whenIChose == 1 || whenINotChose == 1) return 1
    return 0
}
function driver(l, r, queries){
    var res = []
    queries.forEach(query => {
        res.push(recursion(0, l, r, query[0], query[1], 0))
    });
    return res
}
A = [1, 2, 3]
000
003
020
023
100
103
120
123

X   Y
6   7
9   9
function main(){
    var queries = [[6, 7], [9, 9]]
    var l = 1, r = 3
    console.log(driver(l, r, queries))
}

main()