// Given array A, help Antonio in finding the number of good elements in the array.
// Input Format
// First line contains a single integer N denoting the size of array A.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format
// Prin the number of good elements in the array.
// Constraints
// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1
// 3
// 2 2 4
// Sample Output 1;
// 2
// Explanation of Sample 1
// The first element and second elements are good elements as. 2 divides the first element of the ar
// element of the array. 2 divides the second element of the array. And 2 divides the third element of the array.
// The third element is not good because 4 is not divisible by 2.

function solve(arr, n){
    var goodElements = []
    for(var i = 0; i < arr.length; i++){
        var isGood = true
        for(var j = 0; j < arr.length; j++){
            if(i != j){
                if(arr[j] % arr[i] > 0){
                    isGood = false
                    break
                }
            }
        }
        if(currSum == 0){
            goodElements.push(arr[i])
        }
    }
    return goodElements.length
}
function driver(){
    var arr = [2, 2, 4]
    var n = arr.length
    console.log(solve(arr, n))
}
driver()