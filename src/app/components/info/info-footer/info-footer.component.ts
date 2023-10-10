import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-info-footer',
  templateUrl: './info-footer.component.html',
  styleUrls: ['./info-footer.component.css']
})
export class InfoFooterComponent {
  @Input()
   gameClassification: string = ""

}
