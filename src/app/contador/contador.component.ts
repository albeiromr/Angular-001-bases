import {Component} from "@angular/core"

@Component({
    selector: "app-contador",
    template: `
        <h1 class="title">{{title}}</h1>
        <h3>la base es: <strong>{{base}}</strong></h3>

        <button
        (click)="restar()"
        class="example-button"
        > - {{base}} </button>

        <span>{{counterNumber}}</span>

        <button
        (click)="sumar()"
        class="example-button"
        > + {{base}} </button>
    `,
    styleUrls: ["contador.component.css"]
})

export class ContadorComponent {
    public title: string = 'Counter App';
    public counterNumber: number = 10;
    public base: number = 5;

    sumar() {
        this.counterNumber += this.base;
    }

    restar() {
        this.counterNumber -= this.base;
    }
}