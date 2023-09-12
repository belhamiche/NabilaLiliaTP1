import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NabilaLiliaTP1';

  color : string ="white";
  public changeColor(newColor:string){
    console.log(newColor);
    this.color = newColor;
  }
}
