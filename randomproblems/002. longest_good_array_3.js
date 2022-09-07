function driver(X, Y){
    var answer = 0
    for(var j = 1; j <= 110; j++){
        var summer = 0
        var count = 0
        var Pn = X - j * Y
        for(var i = j; i <= 109; i++){
            summer += i
            count += 1
            if(summer >= Pn) break
        }
        if(Pn == summer){
            answer = count
            break
        }
    }
    return answer
}

function main(){
    var X = 4, Y = 1
    console.log(driver(X, Y))
}

main()