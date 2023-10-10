import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input()
  gameHeader: string = 'https://cdn.cloudflare.steamstatic.com/steam/apps/851100/capsule_616x353.jpg?t=1560651934'
  @Input()
  gameName: string = 'Touhou Luna Nights'
  @Input()
  gameDeveloper: string = 'Team ladybug'
  @Input()
  gameCategories:string [] = ['Metroidvania','Female Protagonist','Bullet Hell']
  @Input()
  gamePrice: string = "R$ 34,99"
  @Input()
  gameClassification: string = "10"




}
