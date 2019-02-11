import { Component } from '@angular/core';


@Component({
  selector: 'sa-root',
  template: `
  Hi
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myText = 'It works!';


  saFunction() {
    alert('hi');
  }
}
