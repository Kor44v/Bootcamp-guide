const ejercicios=['sentadillas','bancos','peso muerto','prensas']


document.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault();
    
    let semanas = document.getElementById('semanas').value;
    let dias = document.getElementById('dias').value;

});


function crearRutina(dias,semanas){
    let diasEntrenamiento = dias*semanas;
    
}