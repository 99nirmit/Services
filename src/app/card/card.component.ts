import { Component } from '@angular/core';
import { DesginService } from '../appServices/desgin.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private _myService:DesginService){}

  product:any ={};
  
  ngOnInit(){
    this.product = this._myService.product;
  }



}
