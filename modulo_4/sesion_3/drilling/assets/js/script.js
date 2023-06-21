let check = document.getElementById('check');
let link = document.getElementById('link')
let codigo = document.getElementById('codigo');
let flag = false;

check.addEventListener('change',()=>{
    if(check.checked){
            console.log('check1')
            flag = true;

    }else{

        flag=false
    }
});

link.addEventListener('click',(event)=>{
    event.preventDefault();
    if(flag){
        console.log('check2')
        let info= `<h1>V3UE5Xp8 </h1>`
        
        console.log('check3')
        codigo.innerHTML = info;
    }
    
    else{
        alert('Necesitas aceptar los términos y condiciones.')
        info ="";

    }
})



//TODO: por que no se borra el codigo cuando lo desmarco?