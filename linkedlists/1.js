function newNode(val){
    return {
        data : val,
        next : null
    }
}
function solve(head){
    var p = head
    var q = head
    while(q != null && q.next != null){
        p = p.next
        q = q.next
        q = q.next
    }
    return p.data
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
    // var temp2 = newNode(5)
    // temp.next = temp2
    // temp = temp.next
    console.log(solve(head))
}

function solve(arr){
    return arr[Math.floor(arr.length / 2)]
}
function driver2(){
    var arr = [1, 2, 3, 4, 5]
    console.log(solve(arr))
}
driver2()