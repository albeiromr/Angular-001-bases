import {Component} from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html",
    styleUrls: ["heroe.component.css"]
})

export class HeroeComponent {
    public nombre: string =  "Ironman";
    public edad: number =  45;

    get nombreEnMayusculas () {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }
}