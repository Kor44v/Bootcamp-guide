let select0 = document.getElementById('form0');
let origenInj = document.getElementById('origen');
let select1 = document.getElementById('form1');
let destinoInj = document.getElementById('destino');
let fechaOrigen = document.getElementById('inputDate0')
let fechaDestino = document.getElementById('inputDate1')



function getSelect (sel,inj){
    const name = sel.options[sel.selectedIndex].text
    inj.innerHTML = name;
};

function optOriginInjection (lugar){
    let options = `<option selected value="null">Seleccione una ciudad de origen</option>`
    for(var i = 0;i<lugar.length;i++){

        let myOption = `<option value="${i}">${lugar[i]}</option>`
        options += myOption
    }
    if(lugar == origenes){
        select0.innerHTML = options;
    }else{
        select1.innerHTML= options;
    }
}

fechaOrigen.addEventListener('change',function(){
    let input = fechaOrigen.value;
    let fecha = new Date(input)

    let fechaInj = document.getElementById('fecha0')
    fechaInj.innerHTML = fecha.toLocaleDateString();
})
fechaDestino.addEventListener('change',function(){
    let input = fechaDestino.value;
    let fecha = new Date(input)

    let fechaInj = document.getElementById('fecha1')
    fechaInj.innerHTML = fecha.toLocaleDateString();
})

select0.addEventListener('change',()=>{

    // getSelect(select0,origenInj)
    validarEscala()
});


select1.addEventListener('change', ()=>{
    // getSelect(select1,destinoInj);
    validarEscala()

});



function validarEscala(){

//TODO:la condicion no funciona bien y además preguntar por qué no se utilizar el 100% del height
    if(valorS1 === '0' && select1.value === '0'){
        let escala = document.getElementById('escala')
        let info = ` <h4>¡Ojo! el vuelo tiene escalas</h4>`
        escala.innerHTML=info
    }else if (select0.value == 1 && select1.value == 1){
        let escala = document.getElementById('escala')
        let info = ` <h4>¡Ojo! el vuelo tiene escalas</h4>`
        escala.innerHTML=info
    }else{
        
        let escala = document.getElementById('escala')
        let infoClear = ` <h4>El vuelo no tiene escalas</h4>`
        escala.innerHTML=infoClear
    }


}
console.log(typeof(select0.value))



const origenes = [
    'Chicago,USA',
    'Boston,USA',
    'Texas,USA'
];
const destinos =[
    'Venecia,IT',
    'Paris,FR',
    'Oslo,NO'
];

optOriginInjection(origenes);
optOriginInjection(destinos);