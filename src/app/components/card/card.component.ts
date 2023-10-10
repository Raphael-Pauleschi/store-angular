import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  gameCover: string = '';
  @Input()
  gamePrice: string = '';
  @Input()
  gameName: string = '';
  @Input()
  gameLabel: string = '';
}
