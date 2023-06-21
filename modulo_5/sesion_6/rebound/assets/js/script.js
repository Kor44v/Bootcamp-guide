
function horaChile(m=0){
    let hora = new Date();
    hora.setHours(hora.getHours()+m)
    return hora;
}

function horaZona(z=0){
    let hora = horaChile(z);

    document.getElementById('tiempo').innerHTML=`
    <h6>Chile</h6>
    ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()} `;
}

function horaZona1(z=0){
    let hora = horaChile(z);

    document.getElementById('tiempo2').innerHTML=`
    <h6>Chile</h6>
    ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()} `;
}
function horaZona2(z=0){
    let hora = horaChile(z);

    document.getElementById('tiempo4').innerHTML=`
    <h6>Chile</h6>
    ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()} `;
}

setTimeout(() => {
    setInterval(()=>{horaZona()}, 1000)
},1000);


setTimeout(() => {
    setInterval(()=>{horaZona1(2)}, 1000)
},1000);


setTimeout(() => {
    setInterval(()=>{horaZona2(4)}, 1000)
},1000);


//TODO: mejorar el funcionamiento con una funcion que haga un conjunto de todo


