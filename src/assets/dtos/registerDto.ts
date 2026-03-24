import { EnumPerfilUsuario } from "../enums/enumPerfilUsuario";

export interface RegisterDto{
    login: string;
    role: EnumPerfilUsuario;
    password: string;
    enabled: boolean;
}
