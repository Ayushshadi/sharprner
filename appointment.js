var form = document.getElementById('addForm');
var itemlist=document.getElementById('items');
form.addEventListener('submit',additem);
function additem(e)
{
    e.preventDefault();   
    var na=document.getElementById('name').value;
    var m=document.getElementById('email').value;
    var no=document.getElementById('number').value;
    
   
    let userdata={
        na,
        m,
        no 
    }
        //Adding the data into server
        axios.post("https://crudcrud.com/api/36ffa99187d64437acf27a517be9508c/appointment",userdata)
        .then((response)=>{
            show(response.data)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>";
            console.log(err);
        })
    }
window.onload=function()
{
    axios.get("https://crudcrud.com/api/36ffa99187d64437acf27a517be9508c/appointment")
      .then(res =>{
        for(var i=0;i<res.data.length;i++)
        {
            show(res.data[i]);
        }
      })
      .catch(err=>{
        document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>";
        console.log(err);
      }); 
}
function show(userdata)
{
    var newitem=userdata.na+' '+userdata.m+' '+userdata.no;
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
       axios
    .delete("https://crudcrud.com/api/36ffa99187d64437acf27a517be9508c/appointment/"+userdata._id)
    .then(res=>alert('done'))
    .catch(err=>console.log(err));
});
var editbtn=document.createElement('button');

//delete btn ko class name dena hai
editbtn.className='btn btn-success btn-sm float-right delete';


//delete btn ko name dena hai jo user ne bola hai
editbtn.appendChild(document.createTextNode('Edit'));
editbtn.addEventListener('click',function(){
document.getElementById('name').value=userdata.na;
document.getElementById('email').value=userdata.m;
document.getElementById('number').value=userdata.no;
li.style.display='none';
 axios
    .delete("https://crudcrud.com/api/36ffa99187d64437acf27a517be9508c/appointment/"+userdata._id)
    .then(res=>alert('done'))
    .catch(err=>console.log(err));
});
//delete btn ko li m add karna hai
li.appendChild(editbtn);
//jo new item hai usko list m add karna hai
itemlist.appendChild(li);
}
