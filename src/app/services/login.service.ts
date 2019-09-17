import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarios: Usuario[] = [
    {
      usuario: "admin",
      clave: "123456"
    }
  ];

  constructor() { }

  buscarUsuario( termino:string ):Usuario[]{

    let usuarioArr:Usuario[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.usuarios.length; i ++ ){

      let usuario = this.usuarios[i];

      let nombre = usuario.usuario.toLowerCase();

      if ( termino === nombre ) {
        usuarioArr.push( usuario )
        
      } 


    }

    return usuarioArr;

  }
}

export interface Usuario{
  usuario: string;
  clave: string;
};