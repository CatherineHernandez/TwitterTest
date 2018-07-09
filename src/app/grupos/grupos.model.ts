import { Usuario } from "../usuarios/usuario.model";

export class Grupo {

    constructor(
        public Name: string, 
        public Usuarios: Usuario[]
    ){
    
    }
}