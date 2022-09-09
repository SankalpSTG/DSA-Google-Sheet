function driver(X, Y){
    var count = 0
    for(var i = 1; i <= 109; i++){
        var Pn = X - i * Y
        if(Pn < 1) break
        count += 1
    }
    return count
}

function main(){
    var X = 4, Y = 1
    console.log(driver(X, Y))
}

main()