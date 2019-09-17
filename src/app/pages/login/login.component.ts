import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../services/login.service";
import { Router } from '@angular/router';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { UsuarioModel } from "src/app/models/usuario.models";
import { UsuarioService } from 'src/app/services/usuario.service';
 
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  usuario = new UsuarioModel();
  objUsuario = new UsuarioModel();

  constructor( private _usuarioService: UsuarioService, private router: Router) {
    this.setForma(this.usuario);
  }

  ngOnInit() {}

  guardar() {
    this.setUsuario(this.usuario);

    this.objUsuario = this._usuarioService.getUsuario(this.usuario.dni, this.usuario.clave)

    if(!this.objUsuario){
      console.log(" Credenciales no existe.");

    } else {
      if( this.objUsuario.idrol == 0 ){
        this.router.navigate([ '/portalAdministrador' ]);
      } else if( this.objUsuario.idrol == 1 ){
        this.router.navigate([ '/portalAdministrador' ]);
      }
      
      
    }
  }

  public setForma(usuario: UsuarioModel) {
    // console.log(this.forma);
    console.log(usuario);
    this.forma = new FormGroup({
      dni: new FormControl(usuario.dni, Validators.required),
      clave: new FormControl(usuario.clave, Validators.required)
    });
  }

  public setUsuario(usuario: UsuarioModel) {
    this.usuario.dni = this.forma.controls["dni"].value;
    this.usuario.clave = this.forma.controls["clave"].value;

    console.log(this.usuario);
  }
}
