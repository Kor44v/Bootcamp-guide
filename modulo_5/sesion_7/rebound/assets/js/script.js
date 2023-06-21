async function tempTransform(g){
    try {
        let response = await calculo(g);
        console.log(response)
    } catch (error) {
        console.log('la respuesta no se puede mostrar.')
    }
}


const calculo = (grados)=>{
    return new Promise((resolve)=>{
        let c = (5/9) * (grados - 32);
        htmlInj(c)
    resolve(c);
    })
}

function htmlInj(result){
    document.getElementById('conv').innerHTML=result+'°C'
}

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    let grados = document.getElementById('grados').value
    tempTransform(grados);
})