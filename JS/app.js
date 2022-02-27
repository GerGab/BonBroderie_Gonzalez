/*---------------------------
Creación de productos y stock
-----------------------------*/
// fetch de archivos json
let productos_n = JSON?.parse(localStorage.getItem("productos")) || [];         // intenta cargar el stock desde el localStorage (a falta de backend)
if (productos_n.length==0){                                                    // si productos esta vacio carga el archivo json de la carpeta
    fetch('../JS/productos.json').then((res)=>res.json()).then((_data) => {
        _data.forEach(({id,nombre,precio,stock,image})=>{
            productos.push(new producto(id,nombre,precio,stock,image));
            });
    });
    localStorage.setItem("productos",JSON.stringify(productos));            // carga el stock en el localStorage
}else{
    productos_n.forEach(({id,nombre,precio,stock,image}) =>{
        productos.push(new producto(id,nombre,precio,stock,image));
    })
}
console.log(productos);

//iniciliza el usuario y recupera (si existe) el carrito o crea uno.

_usuario = JSON?.parse(sessionStorage.getItem("usuario"))|| usuarios[0];
let {user} = _usuario;
(user!="invitado") &&
    (alias[0].children[0].innerText="Hola "+ user);
    mi_carrito = new carrito();
try{
    mi_carrito = new carrito();
    mi_carrito.cargar();
}
catch{
    mi_carrito = new carrito();
}
/*--------------------------------------------------
Resolución de la compra
----------------------------------------*/
function estado_flag(_bool){
    flag = _bool;
    localStorage.setItem("flag",JSON.stringify(flag));
}
// deteccion de pago
(window.location.href.search("status=approved")!=-1 & flag) && concretarCompra();
(window.location.href.search("status=in_process")!=-1 & flag) && esperaConfirmacion();
(window.location.href.search("status=rejected")!=-1 & flag) && cancelacion();
function concretarCompra (){
    estado_flag(false);
    console.log("cerrar");
    swal({
        title: "Gracias por tu compra!",
        text: "Esperamos que vuelvas pronto!",
        icon: "success",
        button: "Continuar",
        })
    .then((value) => {
        // vaciar el carrito
        mi_carrito.cerrarCompra();
        // guardar el ajuste del stock
        localStorage.setItem("productos",JSON.stringify(productos));  
    }); 

}
function esperaConfirmacion(){
    estado_flag(false);
    swal({
        title: "Gracias por tu compra!",
        text: "El pago se esta procesando, pronto nos pondremos en contacto contigo",
        icon: "info",
        button: "Continuar",
        })
}
function cancelacion(){
    estado_flag(false);
    swal({
        title: "Parece que algo salio mal",
        text: "Por favor intenta realizar el pago nuevamente",
        icon: "error",
        button: "Continuar",
        })
}

/*------------------------------------------------------
Sección destinada a la funcionalidad del carrito
-------------------------------------------------------*/
// asignación de eventos a btns de producto
for (let i = 0; i < btnsProductos.length; i++) {
    btnsProductos[i].addEventListener("click", function () {
        let prod_id = this.id;
        productos.forEach(function(_producto) {
            if (_producto.id == prod_id){
                if (_producto.stock>0){
                    mi_carrito.agregar(_producto,1);
                    activar();
                }
                else{
                    swal({
                        title: "Te pedimos disculpas!",
                        text: "en este momento no hay stock de este producto",
                        icon: "info",
                        button: "Continuar",
                        })
                }
            }
        });
    });
}

// asignación de eventos a botones de carrito
function agregar_eventos (btn_array){
    for (let i = 0; i < btn_array.length; i++) {
        btn_array[i].addEventListener("click", function () {
            let prod_id = this.getAttribute('data-id');
            let accion = this.getAttribute('class');
            productos.forEach(function(_producto) {
                if (_producto.id == prod_id){
                    switch (accion){
                        case "sumarBtn":
                                mi_carrito.agregar(_producto,1);
                                activar();
                            break;
                        
                        case "restarBtn":
                                mi_carrito.agregar(_producto,-1);
                                activar();
                        break;

                        case "eliminarBtn":
                                mi_carrito.quitar(_producto);
                                activar();
                            break;
                        
                    }
                    
                }
            });
        });
    }  
}
btnComprar.addEventListener("click",()=>{
    if (mi_carrito.items.length!=0){
        let{user} = _usuario;
        (user=="invitado") ? login_usuario() : comprar(mi_carrito);
    }else{
        console.log("carrito vacio");
    }
});
function login_usuario(){
    swal("Por favor inicia sesión o crea una cuenta para continuar")
    .then((value) =>{
        window.location.href='../pages/Usuario.html';
    });
}
async function comprar({total}){
    
    estado_flag(true);
    let preference = {
		items: [
			{
				"title": "Mi Carrito",
				"unit_price": total,
				"quantity": 1,
                "picture_url": "../images/HilosPrimavera.jpeg"
               
			},
		],
		back_urls: { // Los URL se devuelven de esta manera dinámica por no conocer a ciencia cierta cual será el host, con backend se establecería la ruta exacta deseada.
			"success": window.location.href.replace(window.location.search,""),
			"failure": window.location.href.replace(window.location.search,""),
			"pending": window.location.href.replace(window.location.search,"")
		},
		auto_return: "approved",
        external_reference: "bonbroderie123456",
	};
    const resp = await fetch(`${base_URL}access_token=${access_token}`,
    {
        method : 'POST',
        body : JSON.stringify(preference),
        header: "Content-Type: application/json"
    }).catch((err) =>{console.log(err)})
    const {sandbox_init_point:link} = await resp.json();
    window.location.href = link;
    
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
    let {_errores, n_usuario} = validarFormulario();
    // si errores
    if (_errores.length>0){
        _errores.forEach(_error=>{
            swal(_error);
        })
    }
    // si correctos..
    else{
        // crear nuevo usuario
        usuarios.push(new usuario(...n_usuario));
        // Continuar con dar aviso y regresar al shop.
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
                _usuario.user=="invitado" && mi_carrito.guardar(usuarios[usuarios.length-1]);
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
                    window.location.href='../pages/shop.html';
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
    let n_usuario = [];
    let _errores = [];
    usuarios.forEach(({user,email}) =>{
        new_usuario.value.toLowerCase() == user && _errores.push("Este usuario ya esta en uso");
        new_email.value == email && _errores.push("Ya existe una cuenta con este email.");
    });
    if (_errores.length==0){
        n_usuario.push(new_usuario.value.toLowerCase());
        n_usuario.push(new_password.value);
        n_usuario.push(new_email.value);
        n_usuario.push(new_nombre.value);
        n_usuario.push(new_apellido.value);
        n_usuario.push(new_telefono.value);
        n_usuario.push(new_DNI.value);
        n_usuario.push(new_direccion.value);
    }
    return {_errores, n_usuario};
}
