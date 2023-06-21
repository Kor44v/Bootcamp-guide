
function injData(data,num){
    let injCard=document.getElementById(`injCard${num}`);
    let {name,height,mass} = data

    let info = `
    <div class="row box m-1">
        <div class="card card2" style="width: 16rem; height:100px">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">
                    Altura: ${height} cm
                    Peso: ${mass} kg
                </p>
            </div>
        </div>
    </div>
    `
    injCard.innerHTML += info;
}

async function* personajesReq(n1,n2) {


    let url = "https://swapi.dev/api/people/"

    for(let i=n1; i<=n2;i++){
        try {
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }
        catch (e) {
            console.log(e);
        }
    }
}



let myReq1 = personajesReq(1,5);
document.getElementById('bodyCard1').addEventListener('mouseenter', async function(){

    let data = await myReq1.next();
    console.log(data)
    if(data.value){
        injData(data.value,1);
    }

})

let myReq2 = personajesReq(6,11);
document.getElementById('bodyCard2').addEventListener('mouseenter', async function(){

    let data = await myReq2.next();
    console.log(data)
    if(data.value){
        injData(data.value,2);
    }

})

let myReq3 = personajesReq(12,16);
document.getElementById('bodyCard3').addEventListener('mouseenter', async function(){

    let data = await myReq3.next();
    console.log(data)
    if(data.value){
        injData(data.value,3);
    }

})
