//iniciliza el usuario y recupera (si existe) el carrito crea uno.
try{
    _usuario = JSON.parse(sessionStorage.getItem("usuario"));
    alias[0].children[0].innerText="Hola "+ _usuario.user;
    mi_carrito = new carrito();
    if (_usuario != undefined){
        console.log(JSON.parse(localStorage.getItem(_usuario.user)));
       mi_carrito.cargar();
       console.log(mi_carrito)
    }
    

} catch (error) {
    console.error(error);
    mi_carrito = new carrito();
}
/*
function buscar_carrito(){
    if (_usuario != undefined){
        console.log("Cargar carrito");
        try{
            mi_carrito = JSON.parse(localStorage.getItem(_usuario.user));
            
        }catch(error){

        }
    }
    else{
        //let mi_carrito = new carrito();
        console.log("carrito por defecto");
    }

}
buscar_carrito();
*/