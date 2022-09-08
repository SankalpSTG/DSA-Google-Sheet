/**
 Question Name: Antonio’s Store
Problem Statement
Antonio is a very successful businessman. Recently he bought a basketball Store. In the basketball Store, there are N containers, where each container can store at most K basketballs.

Initially ith. container contains A[i] balls. Now he bought M more basketballs from somewhere and wants to store them in these containers. He can store the jth ball (1<=j<=M) in any container. He cannot remove initial balls from the container.

Your task is to determine the minimum capacity K such he can store all the additional M balls into the containers.



Input Format



The first line contains two space-separated integers N and M.
The second line contains N space-separated integers, the array A.


Output Format



Print the minimum capacity K for that Antonio can store all the additional M balls into the containers


Constraints



1<=N<=105
1<=A[i],M<=109.


Sample Input 1



3 4

1 2 3

Sample Output 1



4



Explanation of Sample 1



For the given test case, we can set K=4 and then

Add 2 more basketballs in the first.
Add 2 more basketballs in the second


 */



function solve(n, m, arr){
    var highestVal = arr.reduce((total, curr) => {
        if(total > curr) return total
        return curr
    }, 0)
    var count = 0
    for(var i = 0; i < n; i++){
        count += arr[i]
        var difference = highestVal - arr[i]
        if(difference <= m){
            m -= difference
            arr[i] += difference
        }else{
            arr[i] += m
            m = 0
        }
    }
    if(m > 0){
        highestVal += Math.ceil(m / n)
    }
    return highestVal
}
function driver(){
    var n = 3 
    var m = 16
    var arr = [1, 2, 3]
    console.log(solve(n, m, arr))
}
driver()