function solve(s, t){
    var i = 0
    var j = 0
    while(i < s.length && j < t.length){
        if(s[i] == t[j]){
            i += 1
        }
        j += 1
    }
    if(i == s.length) return true
    return false
}
function driver(){
    s = "abc"
    t = "ahbgdc"
    console.log(solve(s, t))
}
driver()