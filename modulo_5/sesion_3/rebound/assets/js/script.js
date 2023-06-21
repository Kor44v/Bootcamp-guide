const extras =[];

let ingredientesExtra = document.getElementById('ingredientesExtra')
let ingredientes = document.getElementById('ingredientes')
let checks = document.querySelector('#checks')


document.getElementById('propina').addEventListener('submit',function(event,propina='1000'){
    event.preventDefault();

    let propinaValue = document.getElementById('propinaValue').value 

    document.getElementById('propinaInj').innerHTML = propinaValue || propina

    if(propinaValue){
        alert(`Su propina de $${propinaValue} ha sido enviada`)
    }else{
        alert('Aun no se ha definido una propina ')
    }
    

})

checks.addEventListener('change',function(event){
    console.log(event.target.id)
    if(event.target.checked){
        extras.push(event.target.id)
    }else{
        let extra = extras.find(i=>i==event.target.id)
        extras.splice(extra,1)
        
    };
    
    if(extras.length>3){
        ingredientesExtra.innerHTML = extras.slice(3).join(", ");

    }else{
        ingredientes.innerHTML= extras.slice(0,3).join(', ')
    };


    if(extras.length >=3){
        let quantExtra = (extras.length -3)*800
        document.getElementById('precioExtra').innerHTML = quantExtra;
    }
});

