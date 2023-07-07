var form = document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

//submit button click hone ke bade wala event
form.addEventListener('submit',additem);

//item delete karna hai
itemlist.addEventListener('click',removeitem);

//filter ke liye func call karna hoga
filter.addEventListener('keyup', filteritem);

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
function filteritem(e)
{
    //text lena hoga user ka
    var text =e.target.value.toLowerCase();

    //list  lene hoge items compare karne ke liye
    var items = itemlist.getElementsByTagName('li');

    //convert karna hoga array m
    Array.from(items).forEach(function(item)
    {
        //jo items present hai vo check karna hoga
        var itemname= item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else
        {
            item.style.display='none';
        }
    });
}
