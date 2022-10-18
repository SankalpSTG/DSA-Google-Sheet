var x = "abc"
function recursion(x, i, createdString){
    if(i == x.length){
        return [createdString]
    }
    y = []
    y.push(...recursion(x, i + 1, createdString))
    y.push(...recursion(x, i + 1, createdString + x[i]))
    return y
}
var a = recursion(x, 0, "")
console.log(a)