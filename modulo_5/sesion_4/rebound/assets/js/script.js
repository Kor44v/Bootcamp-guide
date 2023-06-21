const users =[];

function modalInj(Arr){
    for (user of Arr){
        let {name,email,phone} = user
        let info = `
        Nombre:${name} <br>
        Email:${email}<br>
        Teléfono:${phone}<br>
        `
        document.getElementById('modaltest').innerHTML=info;
    }

}


let form = document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let lastName=document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let note = document.getElementById('note').value;


    users.push({name,lastName,phone,email,note});

    console.log(users)
    modalInj(users)
    myModal.show()
    
})

const myModal = new bootstrap.Modal(document.getElementById('myModal'))



