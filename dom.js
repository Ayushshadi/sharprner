var head=document.getElementById('header-title');
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var item=document.getElementsByClassName('title');
item[0].style.fontWeight= 'bold';
item[0].style.backgroundColor='green';
var list=document.getElementsByClassName('list-group-item');
list[2].style.backgroundColor='green';
for(var i=0;i<list.length;i++)
{
    list[i].style.fontWeight='bold';
}
var list=document.querySelector('.list-group-item:nth-child(2)');
list.style.backgroundColor='green';
var list3=document.querySelector('.list-group-item:nth-child(3)');
//list3.style.visibility='hidden';
var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='red';
    even[i].style.backgroundColor='blue';
}
