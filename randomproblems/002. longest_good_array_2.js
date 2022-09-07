function driver(X, Y){
    var acc = 0
    var arr = []
    for(var i = 1; i < 109; i++){
        acc += i
        if(acc + Y * i == X || acc + Y * 1 == X){
            arr.push(i)
        }
    }
    return arr[arr.length - 1]
}
function main(){
    var X = 4, Y = 1
    console.log(driver(X, Y))
}

main()