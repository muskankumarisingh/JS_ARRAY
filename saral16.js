/*var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum_odd_numbers=0
var sum_even_numbers=0
for(var i of elements){
if(i%2 ===0){
sum_even_numbers+=i
}
else{
sum_odd_numbers+=i
}
}
console.log(sum_odd_numbers);
console.log(sum_even_numbers);*/

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum_odd_numbers=0;
var sum_even_numbers=0;
var i= 0;
while(i<elements.length){
    if (elements[i]%2==0){
        sum_even_numbers=sum_even_numbers+elements[i]
    }
    else{
        sum_odd_numbers=sum_odd_numbers+elements[i]
    }
    i++
}
console.log(sum_even_numbers)
console.log(sum_odd_numbers)
