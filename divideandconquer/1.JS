function binarySearch(str, l, r){
    var mid = Math.floor((l + r) / 2)
    if(str[mid] != str[mid - 1] && str[mid] != str[mid + 1]) return mid
    if((mid % 2 == 0 && str[mid] != str[mid + 1]) || (mid % 2 != 0 && str[mid] == str[mid + 1])){
        return binarySearch(str, l, mid)
    }else{
        return binarySearch(str, mid + 1, r)
    }
}
function driver(str){
    if(str[0] != str[1]) return 0
    if(str[str.length - 1] != str[str.length - 2]) return str.length - 1
    return binarySearch(str, 0, str.length - 1)
}
function main(){
    var str = "AABBCCDDEEFFGGHHIIJJKKLLMNN"
    console.log(driver(str))
}
main()