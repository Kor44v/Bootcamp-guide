function getHora(){
    var hora = new Date()
    console.log(hora.toLocaleTimeString())

    document.getElementById('hora').innerHTML = `
        Hora:<br>
        ${hora.toLocaleTimeString()}
    `
    document.getElementById('fecha').innerHTML = `
    
        Fecha: <br>
        ${hora.toLocaleDateString()}
    `
}
getHora()

function vuelos(){
    let terminal= Math.floor(Math.random()*10)+1;
    console.log(terminal)

    let vuelo = Math.floor(Math.random()*10000)+1;

    document.getElementById('nvuelo').innerHTML=`
    <h1>El vuelo mas proximo:</h1>
    <h3 id="nvuelo"> Número de vuelo: ${vuelo} </h3>
    <h3 id="terminal"> terminal: ${terminal}</h3> 
    `
}
vuelos()

