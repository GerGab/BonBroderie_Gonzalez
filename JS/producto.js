// Información del Script:
// El Script implementa un borrador de las clases y funciones básicas del Shop Online como ajustar stocks y calcular totales de compra.
// Muchas partes de este código no serán reutilizadas una vez que se pueda implementar la interacción con HTML dado que las llamadas por prompt
// y el hecho de tener que completar los productos a mano serán automaticos mediante botones y otros medios interactivos.

// modelo de clase a implementar para los productos
class producto{
    constructor(_id,_nombre,_precio,_stock_inicial){
        this.id = _id;
        this.nombre = _nombre;
        this.precio = _precio;
        this.stock = _stock_inicial;
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
        this.total = 0;
    }

    agregar (_producto,_cantidad){              //  agregar producto al carrito
        this.items.push([_producto,_cantidad]);
        alert("producto agregado al carrito!");
    }

    quitar (_producto){                         // función no utilizada por ahora.
    }

    ticket (){                                  // consultar el total del carrito
        this.items.forEach((_item) => {
            this.total = this.total + _item[0].precio * _item[1];
        })
    }
}

// Creación de 4 productos usando la clase "producto"
const prod_1 = new producto(12001,"tela",50,20);
const prod_2 = new producto(11001,"tijera",200,15);
const prod_3 = new producto(13001,"hilos_summer",10,20);
const prod_4 = new producto(13002,"hilos_winter",10,20);
// agregado de cada producto al array productos
let productos = [prod_1,prod_2,prod_3,prod_4];

// funcion simulada de agregar al carrito de compras
function agregar_carrito(){
    
    mi_carrito = new carrito;
    let done = false;
    while (!done){
        let seleccion = prompt("Que producto desea agregar al carrito? \n - tela \n - tijera \n - hilos_summer \n - hilos_winter");
        let exists = false;
        productos.forEach(function(_producto) {                                         // bucle en el array de productos (no necesario a posteriori)
            if (seleccion == _producto.nombre) {
                alert("El stock del producto seleccionado es: "+_producto.stock)
                let cantidad = prompt("Que cantidad desea agregar al carrito?");
                if (cantidad>0){
                    hay_stock = _producto.retirar_stock(cantidad);                          // verifica que la cantidad solicitada sea mayor que el stock.
                    if (hay_stock) {mi_carrito.agregar(_producto,cantidad)}
                }
                else{alert("La cantidad introducida debe ser mayor a 0")}
                exists = true; 
            }
        })
        if (!exists){alert("El producto indicado no existe.");}
        done =! confirm("Desea agregar otro producto al carrito?");
    }
    mi_carrito.ticket()                                                                     // llamo a la funcion para cerrar el ticket de la compra.
    alert("El total a abonar es de $"+mi_carrito.total)                                     
    
}

// Llamado a la función principal
agregar_carrito();