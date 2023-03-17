let arr=[1, 7, 4, 2, 3, 1, 2, 2, 9, 3]

//sắp xếp
console.log(arr.sort((a,b)=>a+b))

// xóa ptu
var filter=arr.filter(function(item,index){
    return arr.indexOf(item) ===index
})
console.log(filter)