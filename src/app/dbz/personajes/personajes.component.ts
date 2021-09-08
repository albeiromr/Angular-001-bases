import { Component, Input} from '@angular/core';
import { IPersonaje } from '../dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  @Input() personajes: IPersonaje[]  = [];

}
