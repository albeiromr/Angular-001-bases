import { Injectable } from '@angular/core';

import { IPersonaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: IPersonaje[] = [
    {
      nombre: 'Goku',
      poder: 20500,
    },
    {
      nombre: 'Frezzer',
      poder: 30400,
    },
  ];

  get personajes():IPersonaje[] {
    return this._personajes;
  }

  constructor() {}

  agregarPersonaje(personaje: IPersonaje):void{
    this._personajes = [...this._personajes, personaje];
  }

}
