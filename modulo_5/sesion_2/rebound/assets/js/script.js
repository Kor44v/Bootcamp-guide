let users=[]
let usersV = []

class User{
    constructor(correo,psw){
        this._correo = correo;
        this._psw = psw;
    }
    get correo(){
        return this._correo
    }
    get psw(){
        return this._psw
    }
    set psw(new_psw){
        this._psw=new_psw
    }
}

class UserVip extends User{

    constructor(correo,psw,nombre){
        super(correo,psw)
        this._nombre = nombre
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(new_nombre){
        this._nombre = new_nombre
    }
}


let form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault()
    let mail  = document.querySelector('#mail').value
    let psw = document.getElementById('psw')

    let user = users.push(new User(mail,psw.value));
    console.log(user)
    alert(`
    Bienvenido Usuario${users.indexOf(mail)}

    Email:${mail}
    Contraseña:${psw}
    
    `)

});

let form1 = document.querySelector('#form1');

form1.addEventListener('submit',function(event){
    event.preventDefault();
    let nombreV = document.getElementById('name1').value
    let mailV = document.getElementById('mail1').value
    let pswV = document.getElementById('psw1').value

    usersV.push(new UserVip(nombreV,mailV,pswV))
    console.log(usersV)
    alert(`
    Bienvenido ${nombreV}


    Usuario:${nombreV}
    Email:${mailV}
    Contraseña:${pswV}
    
    `)
});

