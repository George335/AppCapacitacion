import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: UsuarioModel;

  private usuarios: UsuarioModel[] = [
    {
      id: 0,
      nombre: "Luis",
      apellido: "Bedoya",
      clave: "123456",
      dni: "77777777",
      idrol: 1
    },
    {
      id: 0,
      nombre: "Flor",
      apellido: "Ramos",
      clave: "123456",
      dni: "88888888",
      idrol: 0
    }
  ];
  

  constructor() { }

  getUsuario(dni: string, pass: string) {

    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].dni == dni && this.usuarios[i].clave == pass) {
        this.usuario = this.usuarios[i];
      }
    }

    return this.usuario;
  }

}
