class usuario{
    constructor(_usuario,_password,_email,_nombre,_apellido,_telefono,_DNI,_domicilio){
        this.user = _usuario;
        this.pass = _password;
        this.email = _email;
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.telefono = _telefono
        this.DNI = _DNI;
        this.domicilio = _domicilio;
    }
}

// usuario creado por default
const usuarios = []
usuarios.push(new usuario("invitado","0000","n/a","n/a","n/a","n/a","n/a","n/a"))
usuarios.push(new usuario("Usuario1","1234","Usuario1@gmail.com","Laura","Milanesio","1142454687","99250250","Calle Falsa 1234"));
usuarios.push(new usuario("Usuario2","1234","Usuario2@gmail.com","Gerardo","Pretto","1142454687","99250250","Calle Falsa 1234"));


