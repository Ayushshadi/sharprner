var form = document.getElementById('addForm');
var itemlist=document.getElementById('items');
form.addEventListener('submit',additem);
function additem(e)
{
    e.preventDefault();   
    var name=document.getElementById('name').value;
    var des=document.getElementById('des').value;
    var price=document.getElementById('price').value;
    var quan=document.getElementById('Qua').value;
    
   
    let userdata={
        name,
        des,
        price,
        quan
    }
    show(userdata);
        //Adding the data into server
        axios.post("https://crudcrud.com/api/b48a1d206b37469e802db7ee8700e3cf/dukan",userdata)
        .then((response)=>{
           // show(response.data)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>";
            console.log(err);
        })
    }
window.onload=function()
{
    axios.get("https://crudcrud.com/api/b48a1d206b37469e802db7ee8700e3cf/dukan")
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
    var newitem=userdata.name+' '+userdata.des+' '+userdata.price+' '+userdata.quan;
//list create karna hai
var li=document.createElement('li');

//li ko class name dena hai
li.className='list-group-item';

//li ko name dena hai jo user ne bola hai
li.appendChild(document.createTextNode(newitem));


var buy1=document.createElement('button');
buy1.className='btn btn-sm m-4';
buy1.appendChild(document.createTextNode('buy 1'));
buy1.addEventListener('click',function(){
    userdata.quan=userdata.quan-1;
    axios
  .put('https://crudcrud.com/api/b48a1d206b37469e802db7ee8700e3cf/dukan/'+userdata._id,{
    name: userdata.name,
    des: userdata.des,
    price: userdata.price,
    quan: userdata.quan
  })
  .then(res=>window.location.reload(true))
  .catch(err=>console.log(err));

});
li.appendChild(buy1);
var buy2=document.createElement('button');
buy2.className='btn btn-sm m-4';
buy2.appendChild(document.createTextNode('buy 2'));
buy2.addEventListener('click',function(){
    userdata.quan=userdata.quan-2;
    axios
  .put('https://crudcrud.com/api/b48a1d206b37469e802db7ee8700e3cf/dukan/'+userdata._id,{
    name: userdata.name,
    des: userdata.des,
    price: userdata.price,
    quan: userdata.quan
  })
  .then(res=>window.location.reload(true))
  .catch(err=>console.log(err));

});
li.appendChild(buy2);
var buy3=document.createElement('button');
buy3.className='btn btn-sm m-4';
buy3.appendChild(document.createTextNode('buy 3'));
buy3.addEventListener('click',function(){
    userdata.quan=userdata.quan-3;
    axios
  .put('https://crudcrud.com/api/b48a1d206b37469e802db7ee8700e3cf/dukan/'+userdata._id,{
    name: userdata.name,
    des: userdata.des,
    price: userdata.price,
    quan: userdata.quan
  })
  .then(res=>window.location.reload(true))
  .catch(err=>console.log(err));
});
li.appendChild(buy3);
itemlist.appendChild(li);

}
