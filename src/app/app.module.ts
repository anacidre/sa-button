import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ ButtonComponent ]
})

export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
      const saButton = createCustomElement(ButtonComponent, { injector: this.injector });
      customElements.define('sa-button', saButton);
  }

}
