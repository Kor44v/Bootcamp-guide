

function User(nombre,correo,trabajo,telefono,mi){
    let _nombre = nombre;
    let _correo = correo;
    let _trabajo = trabajo;
    let _telefono = telefono;
    let _mi = mi;

    Object.defineProperties(this,{
        nombre:{
            get:function(){
                return _nombre
            },
            set:function(new_name){
                _nombre = new_name
            }
        },
        correo:{
            get:function(){
                return _correo
            }
        },
        trabajo:{
            get:function(){
                return _trabajo
            },
            set:function(new_trabajo){
                _trabajo = new_trabajo
            }
        },
        telefono:{
            get:function(){
                return _telefono
            },
            set:function(new_telefono){
                _telefono = new_telefono
            }
        },
        mi:{
            get:function(){
                return _mi
            },
            set:function(new_mi){
                _mi = new_mi
            }
        }
    })
    
};


let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let fnombre =nombre.value
    let fcorreo =correo.value
    let ftrabajo =trabajo.value
    let ftel =tel.value
    let fmi =mi.value
    let persona = new User(fnombre,fcorreo,ftrabajo,ftel,fmi)
    console.log(persona)
    injCard(persona);
});

function injCard(persona){
    let cardInj = document.getElementById('card')
    let nombre = persona.nombre;
    let correo = persona.correo;
    let trabajo = persona.trabajo;
    let telefono = persona.telefono;
    let mi = persona.mi;
    

    let info = `
    <div class="card mb-3 mt-5 p-5">
    <div class="row g-0">
        <div class="col-md-4">
            <div class="col-6 text-center">
                <img src="./assets/img/imagen-perfil-sin-foto.jpg" class=" img-fluid rounded-circle" height="10px">
                <h3  class="fs-5 mt-2">${nombre}</h3>
                <h3 class="fs-5">${trabajo}</h3>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <div class="col border-bottom mb-4">
                    <h5 class="card-title ">Información</h5>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5 class="card-title">Email</h5>
                        <p class="card-text">${correo}</p>

                    </div>
                    <div class="col-6">
                        <h5 class="card-title">
                            Phone
                        </h5>
                        <p class="card-text">${telefono}</p>
                    </div>

                </div>
                <div class="col border-bottom mt-4">
                    <h5 class="card-title"> Sobre mí</h5>
                </div>
                <p class="card-text">${mi}</p>
            </div>
        </div>
    </div>
</div>
    `

    cardInj.innerHTML = info;
}
