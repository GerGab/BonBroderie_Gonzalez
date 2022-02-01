// asignación de eventos y detección de click.

for (var i = 0; i < btnsProductos.length; i++) {
    btnsProductos[i].addEventListener("click", function () {
        prod_id = this.id;
        productos.forEach(function(_producto) {
            if (_producto.id == prod_id){
                mi_carrito.agregar(_producto,1);
                activar();
            }
        });
    });
}

function agregar_eventos (btn_array){
    for (var i = 0; i < btn_array.length; i++) {
        btn_array[i].addEventListener("click", function () {
            prod_id = this.getAttribute('data-id');
            accion = this.getAttribute('class');
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



// modelo de clase a implementar para los productos
class producto{
    constructor(_id,_nombre,_precio,_stock_inicial,_scr_image){
        this.id = _id;
        this.nombre = _nombre;
        this.precio = _precio;
        this.stock = _stock_inicial;
        this.image = _scr_image;
    }

    reponer_stock(_cantidad){                                           // función a ser utilizada por el administrador para completar stock
        this.stock = this.stock + _cantidad;
    }

    retirar_stock(_cantidad){                                           //  función para descontar el producto del stock
        if (_cantidad <= this.stock) {this.stock = this.stock - _cantidad; return true}
        else{alert("La cantidad introducida es mayor que el stock actual."); return false}
    }
}
// modelo de clas de carrito para llevar control de los productos seleccionados.
class carrito{
    constructor(){
        this.items = [];
    }
//  agregar producto al carrito
    agregar (_producto,_cantidad){  
        
        if (this.items.length != 0){
            let found = false;
            this.items.forEach((_item) => {
                if (_item[0]==_producto){
                    if (_cantidad<0 || (_producto.stock>_item[1])){
                        _item[1]+=_cantidad;
                        if (_item[1]==0){
                            this.quitar(_item[0]);
                        }
                    }
                    found = true;
                }
            });
            if (!found){
                this.items.push([_producto,_cantidad]);
            }
        }
        else{
            this.items.push([_producto,_cantidad]);
        }
    }


    quitar (_producto){
        this.items.forEach((_item) => {
            if (_item[0]==_producto){
                    this.items.splice(this.items.indexOf(_item), 1);
                }                  
        })
    }

    ticket (){                                  // consultar el total del carrito
        let total =0;
        this.items.forEach((_item) => {
            total += _item[0].precio * _item[1];
            subTotal.innerText=`Subtotal: $${total}`;
        })
    }
}
// agregado de cada producto al array productos
let productos = []
// Creación de 4 productos usando la clase "producto"
productos.push(new producto(13001,"HILOS SUMMER",10,10,"../images/Shop/HilosVerano.jpeg"));
productos.push(new producto(13002,"HILOS WINTER",10,10,"../images/Shop/HilosInvierno.jpg"));
productos.push(new producto(13003,"HILOS SPRING",10,10,"../images/Shop/HilosPrimavera.jpeg"));
productos.push(new producto(13004,"HILOS AUTUMN",10,10,"../images/Shop/HilosOtoño.jpeg"));
productos.push(new producto(12001,"TELAS",50,20,"../images/Shop/Telas.jpg"));
productos.push(new producto(11001,"TIJERAS",200,15,"../images/Shop/Tijera.jpeg"));
productos.push(new producto(14001,"BASTIDOR BAMBÚ",10,20,"../images/Shop/BastidorBambu.jpeg"));
productos.push(new producto(15001,"BASTIDOR FLEXI",10,20,"../images/Shop/BastidorFlexi.jpeg"));
// creación de carrito
const mi_carrito = new carrito();


