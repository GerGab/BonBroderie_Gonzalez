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
//boton de comprar carrito
let btnComprar = document.getElementById("btnComprar");
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
/*--------------------------------
Variables para ajuste de stock y estado de compras
---------------------------------*/
let flag=JSON?.parse(localStorage.getItem("flag"))||false;
const base_URL = "https://api.mercadolibre.com/checkout/preferences?";
/*Esta prohibido publicar la secret_key en el frontend, pero como es solo una cuenta de prueba y para no tener que implementar backend lo hice de este modo(tambien podria haberlo pedido por fetch a un archivo.json secret y sumarlo en el gitignore)*/ 
const access_token = "APP_USR-1878676420841965-022608-0c85fe9fb9e650a57764f40877726e98-1080837191";
