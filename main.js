var form = document.getElementById('addForm');
var itemlist=document.getElementById('items');

//submit button click hone ke bade wala event
form.addEventListener('submit',additem);

//item delete karna hai
itemlist.addEventListener('click',removeitem);

//add fuction
function additem(e)
{
    e.preventDefault();
    
    //user item dega to store karna hoga
    var newitem=document.getElementById('item').value;

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

    //jo new item hai usko list m add karna hai
    itemlist.appendChild(li);
}

function removeitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('sahi m?'))
        {
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
