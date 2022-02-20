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
// variables de login usuario
const formulario = document.getElementById("ingresar");
const no_bot = document.getElementById("no_bot");
const login_btn = document.getElementById("loginBtn");
const new_btn = document.getElementById("newBtn");
const new_user = document.getElementById("formUsario");
const close_form = document.getElementById("closeUserForm");
/*---------------------------
Variables del formulario nuevo usuario
------------------------------*/
const n_user_form = document.getElementById("nuevoUsuarioForm");
const new_usuario = document.getElementById("user");
const new_password = document.getElementById("password");
const new_email = document.getElementById("email");
const new_nombre = document.getElementById("nombre");
const new_apellido = document.getElementById("apellido");
const new_telefono = document.getElementById("telefono");
const new_DNI = document.getElementById("DNI");
const new_direccion = document.getElementById("direccion");

