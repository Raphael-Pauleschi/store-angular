import { Component, OnInit } from '@angular/core';
import { GameInfo } from 'src/app/models/GameInfo';
import Data from '../../service/data'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 info: GameInfo = {
 gameHeader:
    'https://cdn.cloudflare.steamstatic.com/steam/apps/1065180/capsule_616x353.jpg?t=1591448615',
  gameDeveloper: 'INTI CREATES CO., LTD.',
  gameClassification: '12',
  gamePrice: 'R$ 37,99',
  gameName: 'Azure Striker Gunvolt 2',
  gameCategories: [ 'Platform' ,  'Action' ,  '2D'],

 };
 private id: string | null = '';

 constructor(private route: ActivatedRoute){}

 ngOnInit(){
this.route.paramMap.subscribe((value) => (this.id = value.get('id')))
this.setValues(this.id) 
}

setValues(id: string | null){
  const result = Data.filter((game) => game.id.toString() == id) [0];
  this.info = result
}

}
