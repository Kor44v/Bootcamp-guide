let nombres =[];
let submit = document.getElementById('agregar-btn')



function arrayInj(){
    let nombresDiv = document.getElementById('nombre')

    nombresDiv.innerHTML = nombres
};

function agregarElemento(element){
    let text = element
    nombres.push(text);
    
    arrayInj();
}
function quitarElemento(element){
    let text = element
    let index = nombres.indexOf(element)
    if(index!== -1){
        nombres.splice(index,1);
    }

    arrayInj();

}

