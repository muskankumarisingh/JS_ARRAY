/*var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100];
var i =0;
var l=0;
var c=0;
var d=0;
while (i<kitna_paisa_hai.length){
    if (i>=10000000){
        c=c+1
    }
else if(i>=100000){
    l=l+1
}
else{
    d=d+1
}
i=i+1
}
console.log(c);
console.log(l);
console.log(d);*/



var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]


var count_of_crorepati=0;
var count_of_lakhpati=0;
var count_of_dilwale=0;
for( var  i of kitna_paisa_hai){
if(i>= 10000000){
count_of_crorepati+=1
}
else if(i>=100000){
count_of_lakhpati+=1
}
else{
count_of_dilwale+=1
}
}


console.log(count_of_crorepati);
console.log(count_of_lakhpati);
console.log(count_of_dilwale);