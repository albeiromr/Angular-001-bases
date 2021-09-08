import { Component} from '@angular/core';
import {IPersonaje} from '../dbz.interface'



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public personajes: IPersonaje[] = [
    {
      nombre: "Goku",
      poder: 20500
    },
    {
      nombre: "Frezzer",
      poder: 30400
    },
  ];

  //esta funsión está recibiendo datos desde el componente hijo agregar.component
  agregarPersonaje(personaje: IPersonaje){
    this.personajes = [...this.personajes, personaje];
  }
}
