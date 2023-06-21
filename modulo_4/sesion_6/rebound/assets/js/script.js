let tragos = [
    {
        nombre:'Martini',
        precio: 2550   
    },
    {
        nombre:'Capuccino',
        precio: 1370   
    },
    {
        nombre:'Latte',
        precio: 1350    
    },
    {
        nombre:'Mojito',
        precio: 2290    
    },
    
];

let comidas = [
    {
        nombre:'Insalata de riso',
        desc:'',
        precio: 6750
    },
    {
        nombre:'Insalata ai cipolloti',
        desc:'',
        precio: 5990
    },
    {
        nombre:'Insalata caprese',
        desc:'',
        precio: 8250
    },
    
];
let costos = [];


function bebidasInj (){
    let div = document.getElementById('tragos')
    for (let i = 0; i<tragos.length;i++){
        let opt = `<div id="${tragos[i].nombre.toLowerCase()}" class="form-check border p-1 mb-0">
        <input class="form-check-input mx-1 mb-0" type="checkbox" value="${i}" id="${tragos[i].nombre}" onchange="setArray(this)">

        <div class="d-flex justify-content-between" for="${tragos[i].nombre}">
            <label class="form-check-label  w-100" for="${tragos[i].nombre}">
            ${tragos[i].nombre}
            </label>
            <label class="form-check-label" for="${tragos[i].nombre}">
                $${(tragos[i].precio.toLocaleString())}
            </label>
        </div>
    </div>`
    div.innerHTML += opt
}
};

function comidasInj(){
    let div = document.getElementById('comidas')
    for (let i = 0; i<comidas.length;i++){
        let opt = `<div class="form-check border p-1 mb-0">
        <input class="form-check-input mx-1 mb-0" type="checkbox" value="" id="${comidas[i].nombre}" onchange="setArrayComida(this)">
        <div class="d-flex justify-content-between">
            <label class="form-check-label" for="${comidas[i].nombre}">
                <h5 class="fw-bold">${comidas[i].nombre}</h5>
                <p>L'insalata di riso e un classico telle ricette estive. Veloce e facile da preparare i'nsalata di riso
                    dil riso si puo insaporire con fli ingredienti piu vari
                </p>
                <p>$${comidas[i].precio.toLocaleString()}</p>
            </label>
        </div>
    </div>`
    div.innerHTML += opt
    }
}


function setArray(element){
    const isChecked = document.querySelector(`input[type="checkbox"][id="${element.id}"]`).checked
        if(isChecked){
            let mytrago = tragos.find(trago=>trago.nombre == element.id)
            costos.push(mytrago)
        }else{
            let index =costos.findIndex(trago=>trago.nombre === element.id)
            costos.splice(index,1)
        }
    costosInj();
    console.log(costos);
};
function setArrayComida(element){
    const isChecked = document.querySelector(`input[type="checkbox"][id="${element.id}"]`).checked
        if(isChecked){
            let mycomida = comidas.find(comida=>comida.nombre == element.id)
            costos.push(mycomida)
        }else{
            let index =costos.findIndex(comida=>comida.nombre === element.id)
            costos.splice(index,1)
        }
    costosInj();
    console.log(costos);
};

function costosInj(){

    let productos = document.getElementById('productos')
    let total = document.getElementById('total');

    productos.innerHTML = "";
    costos.forEach(function(costo,index){
        let info = `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${costo.nombre}</td>
        <td>$${costo.precio.toLocaleString()}</td>
        </tr>
        `
        productos.innerHTML+=info;

    });
    let sumatoria = costos.reduce(function(total,item){    
        return total + item.precio;
    },0)
    total.innerHTML= Number(sumatoria).toLocaleString();

};


bebidasInj()
comidasInj()