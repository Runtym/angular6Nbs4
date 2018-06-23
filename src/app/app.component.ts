import { Component } from '@angular/core';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerTitle:string = 'Angular 6 with Bootstrap 4';
  footerTitle:string = 'FOOTER';
}
