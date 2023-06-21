
function actividadInjection (actividad){
    const {img,title,location} = actividad;
    const actContainer=document.getElementById('act');

    var info = `
    <img id="img" class="rounded w-100 img-fluid" src="${img}" alt="" >
    <div id="modal" class="mymodal w-100 rounded">
        <div class="mymodal-title text-center align-middle rounded">
            <h2>${title}</h2>
            <h5>${location}</h5>
        </div>
    </div>`

    actContainer.innerHTML=info;
}



function selectInjection(data){
    let options = `<option selected>Seleccione una actividad</option>`

    for(let i=0;i<data.length;i++){
        let miOpt=`<option value="${i}">${data[i].title}</option>`
        options +=miOpt;
    }
    document.getElementById('select').innerHTML=options
}



const actividades = [
    {
        img:'assets/img/Mountain-Trekking.jpg',
        title:'Trekking',
        location:'Villa Rica'
    },
    {
        img:'assets/img/lago-ranco.jpg',
        title:'Natación',
        location:'Lago Cochrane'
    },
    {
        img:'assets/img/barco.jpg',
        title:'Ferry',
        location:'Lago LLanquihue'
    }
]


selectInjection(actividades);



const select = document.getElementById('select');
select.addEventListener('change',function(){
    const index = select.value;
    actividadInjection(actividades[index])
    
    var img = document.getElementById('img')
    var modal = document.getElementById('modal')
    img.addEventListener('mouseover',()=>{
        modal.style.display='block';
    })
    modal.addEventListener('mouseleave',()=>{
        modal.style.display = 'none';
    
    })
})
