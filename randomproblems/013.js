// Super String
// Problem Statement :
// You are given a String  s of length N  you need to print a new string t of size N formed by using characters of string s such that
// The character of the i’th index of string “t” is the smallest lexicographical character in the given range of [0-k] inclusive and delete it from string s.
// Example: s=”adbc” k=3
// String t = “abcd”
// s=”adbc” smallest element within range is “a” -> String t=”a”
// s=”dbc” smallest element within range is “b”  -> String
function smallestChar(string, k){
    var charOrder = 1000
    var position = -1
    for(var i = 0; i < string.length && i <= k; i++){
        if(string.charCodeAt(i) < charOrder){
            charOrder = string.charCodeAt(i)
            position = i
        }
    }
    return position
}
function solve(string, k){
    var newstr = ""
    while(string.length > 1){
        var position = smallestChar(string, k)
        newstr += string[position]
        string = string.slice(0, position) + string.slice(position + 1)
    }
    newstr += string
    return newstr
}
function driver(){
    var string = "adbc"
    var k = 2
    console.log(solve(string, k))
}
driver()
