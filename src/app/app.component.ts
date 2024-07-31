import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Hello World!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component ({
  imports: [
    MatSlideToggleModule,
  ]
})
export class AppComponent2 {}
// https://material.angular.io/guide/getting-started