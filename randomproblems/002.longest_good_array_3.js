function driver(X, Y){
    var answer = 0
    for(var j = 1; j <= 110; j++){
        var summ = 0
        var count = 0
        var Pn = X - j * Y
        for(var i = j; i <= Pn; i++){
            summ += i
            count += 1
            if(summ >= Pn) break
        }
        if(Pn == summ){
            if(answer < count){
                answer = count
            }
            break
        }
    }
    return answer
}
function main(){
    var X = 5, Y = 1
    console.log(driver(X, Y))
}

main()