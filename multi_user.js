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
        }
}   