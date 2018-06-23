import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'abe-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  msPos :Observable<Event>;
  msClick : Observable<Event>;
  posX: number = 0;
  posY: number = 0;
  objInfo : string;
  constructor() { }


  ngOnInit() {
    this.msPos = fromEvent(document, 'mousemove');
    this.msPos.subscribe(
        (event: MouseEvent) => {
          this.posX = event.clientX;
          this.posY = event.clientY;          
        }
    );
    this.msClick = fromEvent(document,'click');
    this.msClick.subscribe(
      (event:MouseEvent) =>{
          let obj:Element = <Element>event.target;
          this.objInfo = `Element Type : ${obj}<br>`;
          this.objInfo += `Element ID : ${obj.getAttribute('id')}<br>`;
          this.objInfo += `Element Name : ${obj.getAttribute('name')}<br>`;
          this.objInfo += `Element innerHTML : ${obj.innerHTML}<br>`;
      }
    )
  }

}
