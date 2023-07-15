var form = document.getElementById('addForm');
var itemlist=document.getElementById('items');
form.addEventListener('submit',additem);
function additem(e)
{
    e.preventDefault();   
    var mo=document.getElementById('money').value;
    var de=document.getElementById('detail').value;
    var ty=document.getElementById('type').value;
    
   
    let userdata={
        mo,
        de,
        ty 
    }
        localStorage.setItem(userdata.de,JSON.stringify(userdata));
    //user item dega to store karna hoga
    
    var newitem=mo+' '+de+' '+ty;
    //list create karna hai
    var li=document.createElement('li');

    //li ko class name dena hai
    li.className='list-group-item';
    
    //li ko name dena hai jo user ne bola hai
    li.appendChild(document.createTextNode(newitem));

    //delete btn bhi bana hai
    var deletebtn=document.createElement('button');

    //delete btn ko class name dena hai
   deletebtn.className='btn btn-danger btn-sm float-right delete';

    
    //delete btn ko name dena hai jo user ne bola hai
   deletebtn.appendChild(document.createTextNode('X'));

    //delete btn ko li m add karna hai
    li.appendChild(deletebtn);
    deletebtn.addEventListener('click',function(){
        li.style.display='none';
       localStorage.removeItem(userdata.de);
    });
    var editbtn=document.createElement('button');

    //delete btn ko class name dena hai
   editbtn.className='btn btn-success btn-sm float-right delete';

    
    //delete btn ko name dena hai jo user ne bola hai
   editbtn.appendChild(document.createTextNode('Edit'));
   editbtn.addEventListener('click',function(){
    document.getElementById('money').value=userdata.mo;
    document.getElementById('detail').value=userdata.de;
    document.getElementById('type').value=userdata.ty;
    li.style.display='none';
    localStorage.removeItem(userdata.de);
});
    //delete btn ko li m add karna hai
    li.appendChild(editbtn);
    //jo new item hai usko list m add karna hai
    itemlist.appendChild(li);
}
var ids=[];
for(var i=0;i<localStorage.length;i++)
{
    ids.push(localStorage.key(i));
}
window.onload=function()
{
for(var i=0;i<ids.length;i++)
{
    var c=JSON.parse(localStorage.getItem(ids[i]));
    var n= c.mo+' '+c.de+' '+c.ty;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(n));

    //delete btn bhi bana hai
    var deletebtn=document.createElement('button');

    //delete btn ko class name dena hai
   deletebtn.className='btn btn-danger btn-sm float-right delete';

    
    //delete btn ko name dena hai jo user ne bola hai
   deletebtn.appendChild(document.createTextNode('X'));

    //delete btn ko li m add karna hai
    li.appendChild(deletebtn);
    deletebtn.addEventListener('click',function(){
        li.style.display='none';
       localStorage.removeItem(c.de);
    });
    var editbtn=document.createElement('button');

    //delete btn ko class name dena hai
   editbtn.className='btn btn-success btn-sm float-right delete';

    
    //delete btn ko name dena hai jo user ne bola hai
   editbtn.appendChild(document.createTextNode('Edit'));
   editbtn.addEventListener('click',function(){
    document.getElementById('money').value=c.mo;
    document.getElementById('detail').value=c.de;
    document.getElementById('type').value=c.ty;
    li.style.display='none';
    localStorage.removeItem(c.de);
});
    //delete btn ko li m add karna hai
    li.appendChild(editbtn);
    //jo new item hai usko list m add karna hai
    itemlist.appendChild(li);
    console.log(c.mo);
}
}