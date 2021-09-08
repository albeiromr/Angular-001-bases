import { Component, Input } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  // @Input() personajes: IPersonaje[]  = [];

  get personajes(): IPersonaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}
}
