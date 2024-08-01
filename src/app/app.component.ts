import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Hello World!</h1>`,
  styleUrls: ['./app.component.css'],
  imports: [
    MatSlideToggleModule,
  ]
})
export class AppComponent {
  
}

// https://material.angular.io/guide/getting-started