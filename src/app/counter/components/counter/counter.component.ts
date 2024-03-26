import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class AppCounterComponent{
  public title: string = 'Mi primera app';
  public counter : number = 1;

  incrementValor(valor:number):void{
    //if (this.counter < -1){ return; }
    this.counter += valor;
  }

  reset():void{
    this.counter = 1;
  }
}
