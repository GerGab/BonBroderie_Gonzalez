// funcionalidad del carrito
const btnCarrito = document.getElementById("carritoBtn");
const fueraCarritoBtn = document.getElementsByClassName("fueraCarritoBtn");
const cerrarCarrito = document.getElementById("cerrarCarrito")
const miCarrito = document.getElementById("carrito");
const fondo = document.getElementById("fondoCarrito");
const tableroCarrito = document.getElementById("tablero");
// alias del usuario
let alias = document.getElementsByClassName("nombreUsuario");
// adquirir todos los botones de productos.
const btnsProductos = document.getElementsByClassName("shopBtn");
// asociar h2 de subtotales.
const subTotal = document.getElementById("subTotal");
// detectar los botones de cada producto.
let btnsSumar = [];
let btnsRestar = [];
let btnsEliminar = [];
// variable carrito
let mi_carrito;
// lista de productos
let productos = [];
// usuario activo
let _usuario;