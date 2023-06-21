let checkbox = document.getElementById('checkbox');
var flagCheck=false;
let inputCheck = document.getElementById('inputCheck');
let submit = document.getElementById('btns');


inputCheck.addEventListener('click',function(){
    if(!checkbox.checked){
        alert('Necesitas aceptar términos y condiciones.')
    }else{
        flagCheck = checkbox.checked;
}    
});

console.log(flagCheck)


submit.addEventListener('click', function(event) {
    event.preventDefault();
    if (!checkbox.checked) {
        alert('Necesitas aceptar términos y condiciones.');
    } else {
        alert('Gracias por suscribirte ')
    }
});

//TODO: Falta mandar el mensaje de gracias por suscribirte al enviar el submit