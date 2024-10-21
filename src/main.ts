import { bootstrapApplication } from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {importProvidersFrom} from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import { AppComponent} from './app/app.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {BadgeComponent} from './badge/badge.overview';
import {IconComponent} from './badge/badge.overview';
import {DatepickerComponent} from './datepicker'

bootstrapApplication(AppComponent, {
    providers: [
      provideNoopAnimations(),
    ]
})
bootstrapApplication(BadgeComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));
bootstrapApplication(DatepickerComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));
bootstrapApplication(IconComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));