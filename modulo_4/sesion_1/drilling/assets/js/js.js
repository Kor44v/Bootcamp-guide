const fecha = new Date();


function getFecha(){

    document.getElementById('main-content').innerHTML = `
    <h1>!Apresúrese¡</h1>
        <h3>El plazo maximo para inscribirse es solo 2 días de la siguiente fecha:</h3>
        <span id="fecha">${fecha.toLocaleDateString()}</span>
        
    `
}
getFecha();