var list1=[1,2,3,4,5,6]
var list2=[2,3,1,0,6,7]
i=0
a=[]
while (i<list1.length){
    if (!list2.includes(list1[i])){
        a.push(list1[i])
    }
    i++
}
console.log(a)


/*var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
elements=[]
for(var i of list1){
if (!list2.includes(i)){
elements.push(i)
}
}
console.log(elements);*/