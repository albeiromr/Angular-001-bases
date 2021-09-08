import { Component} from '@angular/core';

interface IPersonaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public nuevo: IPersonaje = {
    nombre: "",
    poder: 0
  }

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

  /* forma no recomendada de leer los inputs
  cambiarNombre(event: any){
    this.nuevo.nombre = event.target.value;
  } */

  agregarPersonaje(){
    if(this.nuevo.nombre.trim().length === 0 || this.nuevo.poder <= 0) return;
    this.personajes = [...this.personajes, this.nuevo];
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }
}
