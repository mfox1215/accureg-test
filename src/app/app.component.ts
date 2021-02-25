import {Component, OnInit} from '@angular/core';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://raw.githubusercontent.com/ecummingsAccuReg/test/main/test%2Cjson';
  logoUrl = 'https://www.accuregsoftware.com/wp-content/uploads/2021/01/accureg-logo-wtag-reversed.png';
  data: any = {};
  constructor() {
    this.getData();
  }
  private getData() {
    const response$ = ajax(this.url);
    response$.subscribe(
       res => {
         console.log(res);
         this.data = res.response;
      },
      err => {
         console.log(err);
      }
    );
  }
}
