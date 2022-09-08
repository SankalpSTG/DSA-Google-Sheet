// DIVISIBILITY BY K
// Problem Statement
// Amy has an array A of N integers.

// In one operation she can select a non-empty subsequence of array A and increase or decrease each element of the array by 1.

// Find the minimum number of operations she needs to make each element of the array A, divisible by K.

// You are given T independent test cases.



// Constraints



// 1 <= T <= 10
// 1 <= N <= 105
// 2 <= K <= 105
// 0 <= Ai <= 109
// All input values are integers.


// Input Format



// First-line contains T.
// First line of each test case consists of two space separated integers N and K.
// Second line of each test case has N space separated integers denoting the array A.


// Output Format



// Print in a newline for each test case a single integer denoting the minimum number of operations she needs to make each element of the array divisible by K.


// Sample Input 1



// 1

// 4 3

// 4 7 10 13 3 6 2
// 3 6 9   12 3 6 3
// 2


// Sample Output 1



// 2



// Explanation of Sample 1



// She selects the subsequence, {A1, A3} and decrease each by 1. So, A = [3, 3, 5, 2]

// Then, she selects the subsequence, {A3, A4} and increase each by 1. So, A = [3, 3, 6, 3]

// Now each element of the array is divisible by 3.

function solve(n, k, arr){
    var arr = arr.map((value) => {
        var diff = value % k
        if(diff > k - diff) return k - diff
        return -(diff)
    })
    var count = 0
    for(var i = 0; i < arr.length; i++){
        if(i != 0 && arr[i] == arr[i - 1]) continue;
        count += Math.abs(arr[i])
    }
    return count
    // return arr.reduce((total, curr) => total + curr, 0)
}
function driver(){
    var n = 7
    var k = 3
    var arr = [4, 7, 10, 2, 3, 6, 13]
    console.log(solve(n, k, arr))
}
driver()