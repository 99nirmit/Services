import { Component } from '@angular/core';
import { MessageService } from '../appServices/message.service';
import { DesginService } from '../appServices/desgin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private _msgService:DesginService){}

  product="test";

  ngOnInit(){
    this.product = this._msgService.product.name;
  }
  btnClick(){
    this._msgService.msgAlert();
  }

}
