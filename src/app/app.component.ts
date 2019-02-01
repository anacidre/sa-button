import { Component } from '@angular/core';


@Component({
  selector: 'sa-root',
  template: `
    <sa-button [text]="myText" (click)="saFunction()" style="--padding:40px; --font-size: 30px;"></sa-button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myText = 'It works!';


  saFunction() {
    alert('hi');
  }
}
