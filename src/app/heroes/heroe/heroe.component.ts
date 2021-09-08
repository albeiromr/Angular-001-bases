import {Component} from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html",
    styleUrls: ["heroe.component.css"]
})

export class HeroeComponent {
    public nombre: string =  "Ironman";
    public edad: number =  45;

    get nombreEnMayusculas ():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        if (this.nombre === "Ironman") this.nombre = "Spiderman";
        else this.nombre = "Ironman" ;
    }

    cambiarEdad():void {
        if (this.edad === 45) this.edad = 28;
        else this.edad = 45;
    }
}