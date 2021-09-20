/*var n = [10, 11, 12, 13, 14, 17, 18, 19]
var number =30;
output=[]
for(var i of n){
for(var j of n){
if (i+j === number){
output.push([i,j])
}
}
}
console.log(output);*/



var num = [10, 11, 12, 13, 14, 17, 18, 19];
var number = 30;
a=[]
var i = 0;
while(i<number.length){
    var j = i;
    while(j<num.length){
        if (num[i]+num[j]==number){
            a.push([num[i],num[j]])
            j++
        }
    }
    i++
}
console.log(a)