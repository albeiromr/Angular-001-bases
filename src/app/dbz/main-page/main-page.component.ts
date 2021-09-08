import { Component} from '@angular/core';
import {IPersonaje} from '../interfaces/dbz.interface'
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  get personajes():IPersonaje[] {
    return this.dbzService.personajes
  }

  
  /* agregarPersonaje(personaje: IPersonaje){
    this.personajes = [...this.personajes, personaje];
  } */

  constructor( private dbzService: DbzService ){}
}
