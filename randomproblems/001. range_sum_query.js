function driver(l, r, queries){
    var sum = 0
    var res = []
    for(var i = l; i <= r; i++){
        sum += i
    }
    queries.forEach(query => {
        if(sum >= query[0] || l >= query[0]) res.push(1)
        else res.push(0)
    });
    return res
}

function main(){
    var queries = [[6, 7], [9, 9]]
    var l = 1, r = 3
    console.log(driver(l, r, queries))
}

main()