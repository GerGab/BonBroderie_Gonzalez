// Clase usuario, a guardar en un array o dict.
const formulario = document.getElementById("ingresar");
const no_bot = document.getElementById("no_bot");
const login_btn = document.getElementById("loginBtn");
const new_btn = document.getElementById("newBtn");

class usuario{
    constructor(_usuario,_password,_email,_nombre,_apellido,_DNI,_domicilio){
        this.user = _usuario;
        this.pass = _password;
        this.email = _email;
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.DNI = _DNI;
        this.domicilio = _domicilio;
    }

}

//login button event

login_btn.addEventListener("click",logIn);

function logIn(){

    if (no_bot.checked){
        let found = false;
        usuarios.forEach((_usuario) =>{
            if ((_usuario.email == formulario.children[1].value)&& (_usuario.pass == formulario.children[3].value)){
                sessionStorage.setItem("usuario",JSON.stringify(_usuario));
                found = true;
                window.location.href='../pages/Shop.html';
            }
                
        })
        if (!found){ () => alert("Usuario o contraseña incorrectos.");}
    }
    
}

// usuario creado por default
const usuarios = []
usuarios.push(new usuario("anitaBon","1234","animail@gmail.com","Ana","Bonessa","99250250","Calle Falsa 1234"));
usuarios.push(new usuario("Ger","1234","germail@gmail.com","German","Gonzalez","99250250","Calle Falsa 1234"));


