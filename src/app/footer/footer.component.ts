import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abe-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()title:string;
  constructor() { }

  ngOnInit() {
  }

}
