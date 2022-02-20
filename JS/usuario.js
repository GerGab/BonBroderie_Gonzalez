
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
usuarios.push(new usuario("anitabon","1234","animail@gmail.com","Ana","Bonessa","1142454687","99250250","Calle Falsa 1234"));
usuarios.push(new usuario("ger","1234","germail@gmail.com","German","Gonzalez","1142454687","99250250","Calle Falsa 1234"));


