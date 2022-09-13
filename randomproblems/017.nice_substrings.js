function solve(str){
    var count = 0
    for(var i = 0; i < str.length; i++){
        for(var j = i + 1; j < str.length; j++){
            if(parseInt(str.substr(i, j - i)) > 0){
                count += 1
            }
        }
    }
    return count
}
function driver(){
    var str = "0100"
    console.log(solve(str))
}
driver()

// function countSubStr(str, n) {
// 	let res = 0;
// 	for (let i = 0; i < n; i++) {
//     	if (str[i] == '1') {
//         	for (let j = i + 1; j < n; j++) {
//             	if (str[j] == '1')
//                 	res++;
//         	}
//     	}
// 	}
// 	return res;
// }
// let str = "0100"
// let n = str.length;
// console.log(countSubStr(str, n));
