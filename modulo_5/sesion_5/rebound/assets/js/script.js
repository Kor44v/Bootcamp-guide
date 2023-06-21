let total = 123000
let totalVenta=0;
let totalDesc=0;


const codigoDescto=[
    {id:1, code:"DSC123", precio_dcto:1000},
    {id:2, code:"VUE2023", precio_dcto:5000},
    {id:3, code:"PROFE2023", precio_dcto:10000},
]

const envios = [
    {id:1, envio: "Envío express", precio:5000},
    {id:2, envio: "Envío normal", precio:0},
]



$(function(){

$('#envio').change(()=>{
valorEnvio()
})
$('#codigo').blur('click',function(){
    let codigo = $('#codigo').val();
    let descuento = codigoDescto.find(code=>code.code==codigo)

    if(descuento){
        totalDesc= descuento.precio_dcto;
        console.log(totalDesc)
        valorEnvio();
    }else{
        totalDesc=0;
        valorEnvio()
    }
});

})

function valorEnvio(){

    let opcionEnvio =  $('#envio').val()
    let envio = envios.find(envio=>envio.id == opcionEnvio)

    totalVenta = (total + envio.precio)-totalDesc
    console.log(totalVenta)

    $("#totalF").text(Number(totalVenta).toLocaleString("es-CL"))

}