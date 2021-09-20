/*elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum_odd_numbers=0;
var sum_even_numbers=0;
for(var i of elements){
if(i%2 ===0){
sum_even_numbers+=i
}
else{
sum_odd_numbers+=i
}
}
console.log((sum_even_numbers+sum_odd_numbers)/2);*/



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum_even_numbers=0;
var sum_odd_numbers=0;
var i = 0;
while(i<elements.length){
    if(elements[i]%2==0){
        sum_even_numbers=sum_even_numbers+elements[i]
        avg_even=sum_even_numbers/4
    }
    else{
        sum_odd_numbers=sum_odd_numbers+elements[i]
        avg_odd =sum_odd_numbers/7;
    }
    i++
}
console.log(avg_even)
console.log(avg_odd)
