import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  // name = 'Angular ' + VERSION.major;
  name = '';
  gender = '';
  age: number = null;
  insuredList = [];
  ageList = [
  {

  },
  {

  },
];
addInsured():void{
  this.insuredList.push({
    name:'',
    gender:'',
    age :null,
  })
}
}


