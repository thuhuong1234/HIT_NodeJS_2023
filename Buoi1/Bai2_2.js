let arrA = [1, 7, 4, 2, 3,5,3,3,3,4,2,4,6,1,5];
let arrB = [5, 2, 6, 3, 1];
let arrC = [];
var newArrA=[];
var newArrB=[];
    newArrA=arrA.filter(function(item,index){
        return arrA.indexOf(item) ===index
    })

    newArrB=arrB.filter(function(item,index){
        return arrB.indexOf(item) ===index
    })

    for(let i=0; i<newArrA.length ; i++){
        for(let j=0; j<newArrB.length ; j++){
            if(newArrA[i]===newArrB[j]){
                arrC.push(newArrA[i]);
            }
        }
    }
    console.log(arrC);