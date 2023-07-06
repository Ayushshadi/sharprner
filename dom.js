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
