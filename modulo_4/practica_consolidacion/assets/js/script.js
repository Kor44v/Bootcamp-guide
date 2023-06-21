let gastos=[];
function getPresupuesto(element){
    const presupuesto = element.value
    let presupuestoinj = document.getElementById('presupuestoTab')
    presupuestoinj.innerHTML = Number(presupuesto).toLocaleString();
}

function addGasto(element,num){
    let gastoName = element.value
    let gastoNum = Number(num.value)
    gastos.push({nombre:gastoName,precio:gastoNum});
    gastosInj();
    
}
function gastosInj(){
    let datainj = document.getElementById('data')
    let gastosSum = document.getElementById('gastoSum')
    datainj.innerHTML="";
    gastos.forEach(function(gasto,index){
        let info=`
        <tr >
        <th scope="row">${index+1}</th>
        <td>${gasto.nombre}</td>
        <td>$<span>${gasto.precio}</span></td>
        <td><i class="bi bi-trash-fill" onclick="eliminarProducto(${index})"></i></td>
        </tr>
        `
        datainj.innerHTML+=info;
    });
    let sumatoria = gastos.reduce(function(total,item){
        return total + item.precio
    },0);
    gastosSum.innerHTML= Number(sumatoria).toLocaleString();
    let resultado = (presupuesto.value - sumatoria)
    let resultadoinj = document.getElementById('resultadoInj')
    resultadoinj.innerHTML=resultado;
};


function eliminarProducto(element){
    gastos.splice(element,1)
    console.log(gastos)
    gastosInj();
}

