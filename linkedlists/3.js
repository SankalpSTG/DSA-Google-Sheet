function newNode(val){
    return {
        data : val,
        next : null
    }
}
function solve(node, N){
    if(node == null) return N - 1
    N = solve(node.next, N)
    if(N == 0) {
        console.log(node.data)
        return -1
    }else{
        return N == -1 ? -1 : N - 1 
    }
    
}
function driver(){
    var head = newNode(1)
    var temp = newNode(2)
    head.next = temp
    var temp2 = newNode(3)
    temp.next = temp2
    temp = temp.next
    var temp2 = newNode(4)
    temp.next = temp2
    temp = temp.next
    var temp2 = newNode(5)
    temp.next = temp2
    temp = temp.next
    var temp2 = newNode(6)
    temp.next = temp2
    temp = temp.next
    var temp2 = newNode(7)
    temp.next = temp2
    temp = temp.next
    var temp2 = newNode(8)
    temp.next = temp2
    temp = temp.next
    var temp2 = newNode(9)
    temp.next = temp2
    temp = temp.next
    var temp2 = newNode(10)
    temp.next = temp2
    temp = temp.next

    var N = 5
    N = solve(head, N)
    if(N != -1) console.log(-1)
}
driver()
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10