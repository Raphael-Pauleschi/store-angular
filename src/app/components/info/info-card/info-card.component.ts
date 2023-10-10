import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input()
  gameName: string = ''
  @Input()
  gameDeveloper: string = ''
  @Input()
  gameCategories:string [] = ['Metroidvania','Female Protagonist','Bullet Hell']
  @Input()
  gamePrice: string = ""
}
