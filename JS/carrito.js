
class carrito{
    constructor(){
        this.items = [];
        this.total = 0;
    }
//  agregar producto al carrito
    agregar (_producto,_cantidad){  
        
        if (this.items.length != 0){
            let found = false;
            this.items.forEach((_item) => {
                if (_item[0].id==_producto.id){
                    if (_cantidad<0 || (_producto.stock>_item[1])){
                        _item[1]+=_cantidad;
                        _item[1]==0 && this.quitar(_item[0]);   
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


    quitar ({id:prodId}){
        this.items.forEach((_item) => {
            if (_item[0].id==prodId){
                    this.items.splice(this.items.indexOf(_item), 1);
                }                  
        })
    }

    ticket (){                                  // consultar el total del carrito
        this.total = 0;
        this.items.forEach((_item) => {
            this.total += _item[0].precio * _item[1];
        })
        subTotal.innerText=`Subtotal: $${this.total}`;
    }

    guardar ({user}){
        localStorage.setItem(user,JSON.stringify(this.items));
    }

    cargar(){
        
        let _items = JSON.parse(localStorage.getItem(_usuario.user));
        _items.forEach((_item) =>{
            this.agregar(_item[0],_item[1]);
        })
    }

    cerrarCompra(){
        this.items.forEach(_item =>{
            productos.forEach(_producto =>{
                (_producto.id==_item[0].id) && _producto.retirar_stock(_item[1])
            })
        })
        this.vaciar();
    }

    vaciar(){
        this.items = [];
    }
        
}