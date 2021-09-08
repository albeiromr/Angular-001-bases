import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //creando un evento personalizado para pasar información hacia el elemento padre
 // @Output() onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter();

  public nuevo: IPersonaje = {
    nombre: "",
    poder: 0
  }

  constructor(private dbzService: DbzService){}
  
  agregarPersonaje(){

    if(this.nuevo.nombre.trim().length === 0 || this.nuevo.poder <= 0) return;

    //lanzando el evento personalizado
    //this.onNuevoPersonaje.emit(this.nuevo);
    
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }
}
