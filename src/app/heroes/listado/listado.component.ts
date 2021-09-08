import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  public heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Superman"];
  public heroeBorrado: string = ""

  borrarHeroe():void{
    this.heroeBorrado = this.heroes.pop() || "";
  }

}
