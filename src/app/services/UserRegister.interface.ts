export interface UsuarioRegister {
    username: string;
    email: string;
    password: string;
    dni: string;
    puntaje:number
}
export interface Response {
    message?: string;
    error?: string;
    tip?:string;
    authenticated?:string;
    token?:string;
    puntaje?:number;
    username?:string
    status?:number;
    user?:{
        username : string,
        puntaje:number
    }
    users?:[
        {
            name: string;
            puntaje: number;
        }
    ]
}
export interface UsuarioLogin {
    username: string;
    password: string;
}