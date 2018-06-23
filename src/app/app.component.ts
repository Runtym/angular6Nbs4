import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerTitle:string = 'Angular 6 with Bootstrap 4';
  footerTitle:string = 'FOOTER';

  constructor(private router: Router){}
  
  movePage(me:MouseEvent):void{
    let page = (<HTMLElement>me.target).innerText;
    this.router.navigate([page]);
  }
}
