import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapacitacionModel } from '../models/capacitacion.models';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {

  private url = 'https://hurtadohermozacapacitacion.firebaseio.com';

  constructor( private http: HttpClient ) { }

  getCapacitaciones() {
    return this.http.get(`${ this.url }/capacitaciones.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(1500)
            );
  }

  private crearArreglo( capacitacionObj: object ) {

    const capacitaciones: CapacitacionModel[] = [];

    //Hago un recorrido de obj y le asigno un "key"
    Object.keys( capacitacionObj ).forEach( key => {

      //Extraigo el objeto y lo asigno a una referencia
      const capacitacion: CapacitacionModel = capacitacionObj[key];

      capacitacion.id = key;

      //Almaceno los héroes en el arreglo
      capacitaciones.push( capacitacion );

    });

    //Si no hay información en la base de datos
    if ( capacitacionObj === null ) { return []; }

    return capacitaciones;
  }
}
