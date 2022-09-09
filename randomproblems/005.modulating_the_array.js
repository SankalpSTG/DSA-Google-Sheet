// MODULATING THE ARRAY
// Problem Statement
// Amy has an array A, of N integers. She also has an integer K, such that 0 <= K <= MIN (A1, A2, …, AN). Here MIN denotes the Minimum of the array.

// She wants to “modulate” the array with positive integer M. “Modulating” an array with M, for each i between 1 to N, she converts Ai = (Ai – K) % M.

// For example, if N = 3, K = 1 and A = [ 2, 5, 3] then after modulating the array with M = 2 it becomes A = [ 1, 0, 0].

// She was given Q queries. In each query she has index of the array A, X and Y (1<=X, Y<=N, X may be equal to Y) and is ask to find how many positive values of M exists such that after modulating the array with M, AX becomes equal to AY. If infinite such values of M exists print -1.

// Since she is busy in her job interview, she asks you to help her answer the queries.

// NOTE: Queries are independent of each other.



// Constraints



// 1 <= N <= 105
// 1 <= Ai <= 109
// 0 <= K <= MIN (A1, A2, …, AN)
// 1 <= Q <= 50
// 1 <= X, Y <= N
// All input values are integers.


// Input Format



// First-line contains three space separated integers N, K and Q.
// Second line contains N space separated integers denoting the array A.
// Next Q lines each contains two space separated integers X and Y.


// Output Format



// Print in a newline for each query a single integer denoting how many positive values of M exists such that after modulating the array with M, AX becomes equal to AY. If infinite such values of M exists print -1.


// Sample Input 1



// 3 1 2

// 2 5 3

// 2 3

// 1 1



// Sample Output 1



// 2

// -1



// Explanation of Sample 1



// For 1st query M = 1, 2 are possible values. Considering M = 1, A = [ 0, 0, 0], M = 2 is shown in the statement.

function driver(arr, X, Y, K){
    if(X == Y) return -1
    if(arr[X - 1] == arr[Y - 1]) return -1
    arr[X - 1] -= K
    arr[Y - 1] -= K
    var count = 0
    for(var i = 1; i <= arr[X - 1] && i <= arr[Y - 1]; i++){
        if(arr[X-1] % i == arr[Y-1] % i) count += 1
    }
    return count
}
function main(){
    var arr = [2, 5, 3]
    var X = 2, Y = 3, K = 1
    console.log(driver(arr, X, Y, K))
}
main()

// Ai = (Ai – K) % M.
// (2 - 1) % 1 = 2 % 4 = 0
// (2 - 1) % 1 = 2 % 3 = 0

// 2
// -1
// N K Q
// 3 1 2

// 2 5 3

// 2 3

// 1 1
