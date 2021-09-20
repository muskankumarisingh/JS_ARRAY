var arr1=[1,2,3]
var arr2=["a","b","c"]
var newList=[]
for(i of arr1){
  newList.push(i)
  if (i==2){
    for(j of arr2){
        newList.push(j)
    }
  }
}
console.log(newList);