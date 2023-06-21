function Laptop(marca,modelo,precio,img){
    let _marca = marca;
    let _modelo = modelo;
    let _precio = precio; 
    let _img = img;

    Object.defineProperties(this,{
        marca:{
            get:function(){
                return _marca
            },
            set:function(new_marca){
                _marca = new_marca
            }
        },
        modelo:{
            get:function(){
                return _modelo
            },
            set:function(new_modelo){
                _modelo = new_modelo
            }
        },
        precio:{
            get:function(){
                return _precio
            },
            set:function(new_precio){
                _precio = new_precio
            }
        },
        img:{
            get:function(){
                return _img
            }
        }
    })
}

let laptop1 = new Laptop('Huawei','MateBook D 14',459990,' assets/img/800_800_B907B8797513D9C0EA01199CD048BFC5mp.png');
let laptop2 = new Laptop('ASUS TUF','A15',659990,'assets/img/2000393555055-1.jpg')


function laptopInj(laptop){
    let {marca,modelo,precio,img} = laptop
    let cardInj = document.getElementById('cardInj')

    let info = `
    <div class="col">
    <img src="${img}" class="card-img-top p-5">
    <h5 class="card-title ps-4">${marca} ${modelo}</h5>
    <p class="card-text ps-4 text-gray">Laptops</p>
</div>
<div class="card-body">
    <p class="card-text border-top border-bottom p-2">$${precio}</p>
    <a href="#" class="btn btn-primary">Comprar ahora</a>
    <a href="#" class="btn btn-light" id="cambio" >Ver una alternativa</a>
</div>`

cardInj.innerHTML = info;
}

laptopInj(laptop1)
let cambio = document.getElementById('cambio')

cambio.addEventListener('click',function(){
    laptopInj(laptop2)

})