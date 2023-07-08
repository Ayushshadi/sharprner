function test(e)
{
var n=document.getElementById('fname').value;
var e=document.getElementById('mail').value;
var nu=document.getElementById('number').value;


localStorage.setItem('fname',n);
localStorage.setItem('mail',e);
localStorage.setItem('number',nu);

}
const emp = {
    age: 26,
    firstName: "Yash",
    lastName: "Prasad"
}
let obj=JSON.stringify(emp);
localStorage.setItem('obj',obj);    

let geet = JSON.parse(localStorage.getItem('obj'));
console.log(geet);
