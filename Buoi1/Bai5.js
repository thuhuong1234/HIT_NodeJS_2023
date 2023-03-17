

async function Cau5(input){
    try{
        let json1= await fetch(input);
        let res= await json1.json();
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
// thành công
Cau5('https://jsonplaceholder.typicode.com/users');
//lỗi

Cau5('https://rerejsonplaceholder.typicode.com/users')