// fetch de archivos json
fetch('../JS/productos.json').then((res)=>res.json()).then((_data) => {
    _data.forEach(({id,nombre,precio,stock,image})=>{
        productos.push(new producto(id,nombre,precio,stock,image));
        
    })
});
//iniciliza el usuario y recupera (si existe) el carrito crea uno.
try{
    
    _usuario = JSON.parse(sessionStorage.getItem("usuario"));
    alias[0].children[0].innerText="Hola "+ _usuario.user;
    mi_carrito = new carrito();
    if (_usuario != undefined){
        console.log(JSON.parse(localStorage.getItem(_usuario.user)));
       mi_carrito.cargar();
    }
    

} catch (error) {
   mi_carrito = new carrito();
}

/*------------------------------------------------------
Sección de codigo destinada a la funcionalidad del login de usuario y la creacion de nuevos usuarios.
-------------------------------------------------------*/

//login button event
login_btn?.addEventListener("click",logIn);
//Nuevo usuario event
new_btn?.addEventListener("click",()=>{ 
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.getElementsByTagName("body")[0].style.marginRight = "20px";
    new_user.className = "usarioContActivo";
});
//Cierre de formulario usuario
close_form?.addEventListener("click",()=>{
    document.getElementsByTagName("body")[0].style.marginRight = "0";
    document.getElementsByTagName("body")[0].style.overflowY = "visible";
    new_user.className = "usarioCont";
})
//submit event del formulario nuevo usuario.
n_user_form?.addEventListener("submit",(e)=>{
    e.preventDefault();
    crear_usuario();
})


function crear_usuario(){
    // verificar que todos los datos son correctos
    let {_errores, _usuario} = validarFormulario();
    // si errores
    if (_errores.length>0){
        _errores.forEach(_error=>{
            swal(_error);
        })
    }
    // si correctos..
    else{
        // crear nuevo usuario
        usuarios.push(new usuario(..._usuario));
        // Continuar con dar aviso y regresar al shop.
        console.log(usuarios);
        swal("Te hemos enviado un correo para verificar tu cuenta")
        .then((value) => {
            swal({
                title: "Bienvenido!",
                text: "Gracias por formar parte de BonBroderie",
                icon: "success",
                button: "Continuar",
                })
            .then((value) => {
                // loggear nuevo usuario
                let {email,pass} = usuarios[usuarios.length-1];
                loggear(email,pass);
            }); 
        }); 
    }
}
// login de usuario existente
function logIn(){

    no_bot.checked &&
        loggear(formulario.children[1].value,formulario.children[3].value);
    
}
// funcion de loggeo gral
function loggear(_email,_password){

    let found = false;
        usuarios.forEach((_usuario) =>{
            if ((_usuario.email == _email)&& (_usuario.pass == _password)){
                sessionStorage.setItem("usuario",JSON.stringify(_usuario));
                found = true;
                Toastify({
                    text: `Bienvenido/a ${_usuario.user}`,
                    duration: 1000,
                    gravity: "top",
                    position: "center",
                    style: {
                      background: "rgb(229, 197, 185)",
                    }
                  }).showToast();
                  setTimeout(() => {
                    window.location.href='../pages/Shop.html';
                  }, 1500);
            }
                
        })
        !found && Toastify({
            text: "Usuario o contraseña erroneos",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
                background: "rgb(229, 197, 185)",
            }
            //onClick: function(){} // Callback after click
          }).showToast();
}
// funcion para validar el formulario de nuevo usuario
function validarFormulario(){
    let _usuario = [];
    let _errores = [];
    usuarios.forEach(({user,email}) =>{
        new_usuario.value.toLowerCase() == user && _errores.push("Este usuario ya esta en uso");
        new_email.value == email && _errores.push("Ya existe una cuenta con este email.");
    });
    if (_errores.length==0){
        _usuario.push(new_usuario.value.toLowerCase());
        _usuario.push(new_password.value);
        _usuario.push(new_email.value);
        _usuario.push(new_nombre.value);
        _usuario.push(new_apellido.value);
        _usuario.push(new_telefono.value);
        _usuario.push(new_DNI.value);
        _usuario.push(new_direccion.value);
    }
    return {_errores, _usuario};
}