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
        this.stock += _cantidad;
    }

    retirar_stock(_cantidad){                                           //  función para descontar el producto del stock
        return _cantidad <= this.stock ? this.stock = this.stock - _cantidad : alert("La cantidad introducida es mayor que el stock actual.");

    }
}
