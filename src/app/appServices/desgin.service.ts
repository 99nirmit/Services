import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesginService {

  constructor() { }

  msgAlert(){
    alert("Thanks for Your Request");
  } 

  // product="Mobile";
  // product:any = {name:"Laptop",id:11};
  product:any = [{name:"Laptop",id:11},
                 {name:"Mobile",id:31},
                 {name:"T.V.",id:121},
                 {name:"Washing Machine",id:191}
                ]
}
