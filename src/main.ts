import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, AppComponent2 } from './app/app.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
    providers: [provideNoopAnimations()]
})
  .catch(err => console.error(err));
