import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CapacitacionModel } from 'src/app/models/capacitacion.models';
import { CapacitacionService } from 'src/app/services/capacitacion.service';

@Component({
  selector: 'app-portal-administrador',
  templateUrl: './portal-administrador.component.html'
})
export class PortalAdministradorComponent implements OnInit {

  capacitaciones: CapacitacionModel[] = [];

  constructor( private router: Router, 
                private capacitacionesService: CapacitacionService ) { }

  ngOnInit() {

    //Inicializo la obtención de datos de héroes.
    this.capacitacionesService.getCapacitaciones()
      .subscribe( resp => {
        this.capacitaciones = resp;
      });

  }

  irCapacitaciones( id: number ) {

    if(id==1){
      this.router.navigate([ '/portalAdministrador' ]);
    }

  }

}
