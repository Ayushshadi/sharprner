function test(e)
{
    e.preventDefault();
    const uname = document.getElementById('name').value;
    const umail =document.getElementById('mail').value;
    const unum = document.getElementById('number').value;
    
   
    let userdata={
        uname,
        umail,
        unum 
    }
        localStorage.setItem(userdata.umail,JSON.stringify(userdata));
        display(userdata);
        function display(userdata)
        {
            var parr= document.getElementById('list');
            var child= document.createElement('li');
            child.textContent=userdata.uname+' '+userdata.umail+' '+userdata.unum;
            parr.appendChild(child);
             var delbtn=document.createElement('button');
            delbtn.style.backgroundColor='red';
            delbtn.textContent='X';
            delbtn.addEventListener('click',function(){
                child.style.display='none';
                localStorage.removeItem(userdata.umail);
            });
            child.appendChild(delbtn);
              var editbtn=document.createElement('button');
            editbtn.style.backgroundColor='green';
            editbtn.textContent='edit';
            editbtn.addEventListener('click',function(){
                document.getElementById('name').value=userdata.uname;
                document.getElementById('mail').value=userdata.umail;
                document.getElementById('number').value=userdata.unum;
                child.style.display='none';
                localStorage.removeItem(userdata.umail);
            });
            child.appendChild(editbtn);
        }

}   
