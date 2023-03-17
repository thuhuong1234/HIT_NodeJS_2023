let arrA = [1, 7, 4, 2, 3];
let arrB = [5, 2, 6, 3, 1];
//nối mảng
var newArr=arrA.concat(arrB)
//tìm ptu trung
var filter=newArr.filter(function(item,index){
    return newArr.indexOf(item) !==index
})
//sắp xếp
console.log(filter.sort((a,b)=>a-b))
