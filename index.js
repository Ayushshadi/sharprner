function test(e)
{
var n=document.getElementById('fname').value;
var e=document.getElementById('mail').value;
var nu=document.getElementById('number').value;


localStorage.setItem('fname',n);
localStorage.setItem('mail',e);
localStorage.setItem('number',nu);

}
