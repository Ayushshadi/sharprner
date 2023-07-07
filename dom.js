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
var itemlist= document.querySelector('#items');
//parentelement
//console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='#f4f4f4';

//firstchild
itemlist.firstChild.textContent='hello 1';

//firstelementchild
itemlist.firstElementChild.style.backgroundColor='#f3f3f3';

//lastelementchild
itemlist.lastElementChild.textContent='ayush';

//nextsibling
console.log(itemlist.nextSibling);

//nextelementsibling
console.log(itemlist.nextElementSibling);

//preivoussibling
console.log(itemlist.previousSibling);

//preivouselementsibling
console.log(itemlist.previousElementSibling);
//create element

//create a div
var newdiv=document.createElement('div');

//add class
newdiv.className='ayu';

//add id
newdiv.id='ayu12';

//add attribute
newdiv.setAttribute('title','shadi');

//create text node
var textnode=document.createTextNode('ayush shadi');

//add text to div
newdiv.appendChild(textnode);

//add to document
var cont=document.querySelector('header .container');
var h1=document.querySelector('header h1');
cont.insertBefore(newdiv,h1);   
newdiv.style.fontSize='30px';
