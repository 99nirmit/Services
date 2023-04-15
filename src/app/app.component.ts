import { Component } from '@angular/core';
import { MessageService } from './appServices/message.service';
import { DesginService } from './appServices/desgin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';

  constructor(private _msgService:DesginService){}

  product="test";

  ngOnInit(){
    this.product = this._msgService.product.name;
  }
  btnClick(){
    // const msgService = new MessageService();
    // msgService.msgAlert();  
    this._msgService.msgAlert();

  }
}


