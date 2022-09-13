function checkCondition(a1, b1, a2, b2){
    return (a1 - b2) <= (b1 - a2)
}
function solve(A, B){
    var count = 0
    for(var i = 0; i < A.length; i++){
        for(var j = i + 1; j < A.length; j++){
            count += checkCondition(A[i], B[i], A[j], B[j]) ? 1 : 0
        }
    }
    return count
}
function driver(){
    var A = [20, 15, 9, 8]
    var B = [10, 12, 10, 14]
    console.log(solve(A, B))
}
driver()