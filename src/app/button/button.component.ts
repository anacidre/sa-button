import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'sa-button',
  template: `
  <button id="text" class="btn">{{ text }}</button>
  `,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
  @Input() text = 'Click me!';

  constructor() { }

  ngOnInit() {
  }

}
