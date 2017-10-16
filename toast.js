document.addEventListener('DOMContentLoaded', ()=>{
   if(!Notification){
       alert('Your browser notifications are not allowed! Please try another one... ');
       return;
   }
   if(Notification.permission !== 'granted'){
       Notification.requestPermission();
       return;
   }
});


function toast() {
    //create toast div
    let div = document.createElement('DIV');
    div.id = 'toast';

    //assgine class that contain css to display the toast and animation of toast
    div.className = 'show';

    //create a text node contains msg to be displayed in toast
    let msg = document.getElementById('inputMsg').value;
    let text = document.createTextNode(msg);
    div.appendChild(text);
    document.body.appendChild(div);

    setTimeout(()=> {
        //3 seconds after, className will be replace 'show' by ''(hidden) and be remove from body
        div.className = div.className.replace('show', '');
        div.parentNode.removeChild(div);
    }, 5000);
}

