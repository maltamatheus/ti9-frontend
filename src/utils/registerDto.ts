import { EnumPerfilUsuario } from "./enums";

export interface RegisterDto{
    login: string;
    perfil: EnumPerfilUsuario;
    senha: string;
}
