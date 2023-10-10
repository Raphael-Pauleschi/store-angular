import { Component } from '@angular/core';
import Data from '../../service/data'
import { GameData } from 'src/app/models/GameData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:GameData[] = Data
  constructor(){
    console.log(Data)
  }

}
