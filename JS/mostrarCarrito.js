// eventos para mostrar el carrito
btnCarrito.addEventListener("click", activar);
fueraCarritoBtn[0].addEventListener("click", desactivar);
cerrarCarrito.addEventListener("click", desactivar);

// Intenta cargar el usuario si es que matiene la sesión iniciada.

function activar() {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    miCarrito.className = "miCarritoAbierto";
    fondo.className = "fueraCarritoActivo";
    renderizar();
}

function desactivar() {
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    miCarrito.className = "miCarrito";
    fondo.className = "fueraCarrito";
}

function renderizar(){
    tableroCarrito.innerHTML="";
    // plantilla html para objetos del carrito
    mi_carrito.items.forEach( _item =>{
        let contenedor = document.createElement("div");
        contenedor.innerHTML= `<div class="carritoCont">
                                <img src=${_item[0].image} alt="" class="carritoImg">
                                <div>
                                    <p>${_item[0].nombre}</p>
                                    <h3>$${_item[0].precio}</h3>
                                    <div class="carritoContInc">
                                        <button class="restarBtn" data-id="${_item[0].id}"><i class="far fa-minus-square"></i></button>
                                        <div><p>${_item[1]}</p></div>
                                        <button class="sumarBtn" data-id="${_item[0].id}"><i class="far fa-plus-square"></i></button>
                                    </div>
                                </div>
                                <button class="eliminarBtn" data-id="${_item[0].id}"><i class="far fa-trash-alt"></i></button>
                            </div>
                            <div class="divisor"></div>`;
        tableroCarrito.appendChild(contenedor);     
    })
    mi_carrito.ticket();
    mi_carrito.guardar();

    let btnsSumar = document.getElementsByClassName("sumarBtn");
    agregar_eventos(btnsSumar);
    let btnsRestar = document.getElementsByClassName("restarBtn");
    agregar_eventos(btnsRestar);
    let btnsEliminar = document.getElementsByClassName("eliminarBtn");
    agregar_eventos(btnsEliminar);
}



