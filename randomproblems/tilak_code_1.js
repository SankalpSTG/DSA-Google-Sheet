// function driver(arr, N) {
//     var M = 1000000007;
//     let x = 2;
//     let a = Math.pow(x, N);
//     let b = a % M;
//     return b;
//     var total = 1
//     for (var i = 0; i < N; i++) {
//         total *= (arr[i] - i)
//     }
//     return total;
// }

// function main() {
//     var arr = [2, 3]
//     var N = 2
//     console.log(driver(arr, N))
// }
// main()

function driver(arr, N){
    arr.sort((a, b) => a - b)
    var minSum = 0
    var maxSum = 0
    for(var i = 0; i < 4 && i < N; i++){
        minSum += arr[i]
        maxSum += arr[N - 1 - i]
    }
    return [minSum, maxSum]
}
function main(){
    var arr = [1, 3, 5, 7, 9]
    console.log(driver(arr, arr.length))
}
main()