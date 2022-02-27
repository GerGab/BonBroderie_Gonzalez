Proyecto: BonBroderie - Shop Online

Descripción: Este proyecto comenzó en el curso anterior de diseño WEB. El mismo sufrirá algunas modificaciones de HTML. El contenido consiste en un sitio WEB para el micro-emprendimiento de mi mujer, bordados a mano e insumos para bordado.

Consideraciones:

    - Se puede ingresar al carrito desde cualquier page del sitio web, con excepción del inicio, cuando se clicke sobre el carrito en esta pagina de inicio se redirigira a la pagina del SHOP.
    - El usuario, siempre y cuando no este loggeado, recibirá una cuenta de invitado con la cual podrá adherir items al carrito. Al momento de querer realizar la compra se le solicitará al usuario que inicie sesión o cree una cuenta. Como el carrito de invitado se guarda en el localStorage este persistira en el navegador y se utilizará para modificar o guardar el carrito del usuario una vez que inicia su sesión(solo por solicitud de compra).
    - El usuario que realice el loggin previamente conservará su carrito conforme sea el estado de este en el LocalStorage.
    - La persistencia del inicio de sesion del usuario se realiza mediante el SessionStorage, por ende al cerrar el navegador se deberá iniciar sesión nuevamente.

    Mercadopago:

        - Para la implementación de mercadopago, para no recurrir a backend, se utiliza un link generado mediante un POST a la API de Mercadolibre.
        - El usuario para recibir el pago esta Hardcoded en el frontend (no es admisible esto, pero permite no utilizar backend para este curso).
        - Para poder completar el proceso de compra, debido al ambiente sandbox se deberá:

                Loggear con el siguiente usuario comprador:
                                                 usuario: test_user_82609905@testuser.com
                                                 password: qatest1955
        - Datos de tarjeta de prueba;   numero: 4509 9535 6623 3704
                                        Fecha: 11/25 o superior
                                        Codigo seguridad: 123
                                        Nombre: APRO para resolver la compra como aprobada
                                                CONT para resolver la compra como pendiente
                                                de ingresar otra opcion la compra será rechazada.
        (También pueden utilizarse las demás tarjetas que se encuentra en la pagina de mercadopago/developers)




            


