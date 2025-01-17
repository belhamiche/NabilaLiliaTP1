import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-carree',
  templateUrl: './carree.component.html',
  styleUrls: ['./carree.component.scss']
})
export class CarreeComponent {
 @Output() event = new EventEmitter<string>;
 public addEvent (color: string) {
   this.event.emit(color);
 }
}
