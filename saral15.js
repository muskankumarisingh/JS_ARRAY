var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var even_Count=0;
var odd_Count=0;
i=0;
while(i < elements.length){
    if (elements[i]%2==0){
        even_Count++
    }
    else{
        odd_Count++
    }
    i++
}
console.log(even_Count)
console.log(odd_Count)