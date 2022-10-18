/////////Q.16///////////
// Question Name: K divison
// Problem Statement
// N K
// Antonio asked Klaus to divide array A into K nonempty subsequence. Such that each element of the array should be part of exactly one subsequence. Now the Goodness of this division will be equal to

// Example:- For array A {2,4,3,6,1} dividing this array into two subsequence {2,4,1} and {3,6} the the Goodness of this division will be =(4-1)+(6-3)= 6.

// Now Antonion wants the goodness of the division to be the maximum possible.

// You have to help Klaus So that he remains a genius in front of Antonio.

// Your task is to determine the Maximum value of Goodness of the division.

// Note:-

// A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements.


// Input Format



// The first line contains two space-separated integers N and K.
// The second line contains N space-separated integers, the array A.


// Output Format



// Print the maximum value of Goodness of the division.


// Constraints



// 1<=K<=N<=105
// 1<=A[i]<=109


// Sample Input 1



// 6 2

// 2 4 3 6 1 3



// Sample Output 1



// 7



// Explanation of Sample 1



// For test case 1

// For getting maximum goodness one of the possible division is {2,4,3}, {6,1,3}

// And goodness = (4-2)+(6-1)=7

function getDifference(arr, i, j){
    var lowest = Number.MAX_VALUE, highest = Number.MIN_VALUE
    if(i == j - 1)return 0
    if(i == j - 2)return Math.abs(arr[i] - arr[j])
    for(var k = 0; k < i; k++){
        if(arr[k] < lowest) lowest = arr[k]
        if(arr[k] > highest) highest = arr[k]
    }
    console.log(`You know this ${highest - lowest}`)
    return highest - lowest
}
function recursion(arr, k, i){
    var difference = 0
    if(k == 0) return 0
    if(k == 1) return getDifference(arr, i, arr.length - 1)
    for(j = i + 1; j < arr.length; j++){
        var newDifference = getDifference(arr, i, j) + recursion(arr, k - 1, j)
        if(newDifference > difference) difference = newDifference
    }
    return difference
}
function driver(){
    K = 2
    var arr = [2, 4, 3, 6, 1, 3]
    console.log(recursion(arr, K, 0))
}
driver()



// function getGoodness(arr, i){
//     var lowest = 10000000000000000000000000, highest = -10000000000000000000000000
//     for(var j = 0; j < i; j++){
//         if(arr[j] < lowest) lowest = arr[j]
//         if(arr[j] > highest) highest = arr[j]
//     }
//     var diff1 = highest - lowest
//     lowest = 10000000000000000000000000
//     highest = -10000000000000000000000000
//     for(var j = i; j < arr.length; j++){
//         if(arr[j] < lowest) lowest = arr[j]
//         if(arr[j] > highest) highest = arr[j]
//     }
//     var diff2 = highest - lowest
//     return diff1 + diff2
// }
// function solve(arr){
//     var sum = 0
//     var maxGoodness = 0
//     for(var i = 2; i < arr.length - 2; i++){
//         var goodness = getGoodness(arr, i)
//         if(goodness > maxGoodness) maxGoodness = goodness
//     }
//     return maxGoodness
// }
// function driver(){
//     K = 2
//     var arr = [2, 4, 3, 6, 1, 3]
//     console.log(solve(arr))
// }
// driver()