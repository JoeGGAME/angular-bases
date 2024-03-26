import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Iroman', 'Goku'];
  public deletHero?: string;

  removeLashero():void{
    this.deletHero = this.heroNames.pop();
  }

}
