import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css','info.responsive.component.css']
})
export class InfoComponent {
  @Input()
  gameHeader: string = ''
  @Input()
  gameName: string = ''
  @Input()
  gameDeveloper: string = ''
  @Input()
  gameCategories:string [] = []
  @Input()
  gamePrice: string = ""
  @Input()
  gameClassification: string = ""




}
