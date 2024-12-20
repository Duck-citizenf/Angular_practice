import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
    selector: 'whole-component',
    styleUrls: ['badge.overview.css'],
    templateUrl: 'tabindex.html',
    standalone: true,
    imports: [MatTabsModule, MatBadgeModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSidenavModule],
})

export class WholeComponent {
    hidden = false;
    showFiller = false;

    toggleBadgeVisibility() {
      this.hidden = !this.hidden;
    }
}