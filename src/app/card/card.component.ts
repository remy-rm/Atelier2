import { Input } from "@angular/core";
import { Component,OnInit} from '@angular/core';

import { Card } from "../model/card.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Card;    

}
