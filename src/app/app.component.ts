import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NabilaLiliaTP1';
  appfooter!: string;
  appheader!: string;
  color : string ="white";
  public changeColor(newColor:string){
    this.color = newColor;
  }
  ngOnInit() {
    this.appfooter = 'footer';
    this.appheader = 'header';
  }
}
