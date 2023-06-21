
let intereses =[];


fetch("assets/database/intereses.json")
    .then(resp=>resp.json())
    .then(data=>{
        intereses=data;
    })
    .catch(err=>console.log(err))

document.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault();
    let cuotas = document.getElementById("numCuotas").value;

    let expression = /^[\d]+$/

    if(!expression.test(cuotas)){
        console.log('Input invalido')
        return;
    }
    if(cuotas<0|| cuotas>24){
        alert('las cuotas deben ser entre 1 y 24')
        return;
    }
    let interesesObj = intereses.find(i=>i.cuotas ==cuotas)
        console.log(interesesObj);
    let resultado = calcularInteres(1_000_000,cuotas, interesesObj.interes_mensual)

        console.log(resultado);
    
        document.getElementById('textInj').innerHTML="El valor mensual a pagar correspodne a $"+resultado.toLocaleString("es-cl")+" ,con un interés de interés es de "+interesesObj.interes_mensual

});

function calcularInteres(monto,cuotas, interes){
    //const M = (P * ir) / (1 - Math.pow(1 + ir, -n));
    const cuotaMensual =(monto*interes) /(1- Math.pow(1+ interes, -cuotas))
    return cuotaMensual;
}



