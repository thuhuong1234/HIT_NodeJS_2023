
let users = [
    { id: 1, name: 'Hung', age: 17, role: 'admin' },
    { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
    { id: 65, name: 'Dung', age: 21, role: 'user' },
    { id: 87, name: 'Quy', age: 99, role: 'user' },
    { id: 123, name: 'Chi', age: 8, role: 'user' },
];
//for
function Arr2(user){
  let arr2=[];
  for(let i=0; i<user.length; i++){
    let arr={};//obj
    arr[user[i].id.toString()]=user[i];
    arr2.push(arr)
  }
  console.log(arr2);
}
Arr2(users)

//map
function myFunction(user){
  let user1={};
  user1[user.id]=user
  return user1
}
var newArr=users.map(myFunction)
console.log(newArr)