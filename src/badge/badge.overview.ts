import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'badge-overview-example',
  styleUrls: ['badge.overview.css'],
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  template:`
    <div matBadge="4" matBadgeOverlap="false" class="demo-section">Text with a badge</div>

    <div class="demo-section">
      Button toggles badge visibility
      <button mat-raised-button matBadge="7" [matBadgeHidden]="hidden" (click)="toggleBadgeVisibility()">
          Hide
      </button>
    </div>

    <div class="demo-section">
    <mat-icon matBadge="15">home</mat-icon>
        <!-- Include text description of the icon's meaning for screen-readers -->
        <span class="cdk-visually-hidden">
        </span>
    </div>
  `
})
export class BadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

@Component({
  selector: 'home-icon',
  styleUrls: ['badge.overview.css'],
  standalone: true,
  imports: [MatBadgeModule, MatIconModule],
  template:`
    <mat-icon matBadge="15">home</mat-icon>
    <!-- Include text description of the icon's meaning for screen-readers -->
    <span class="cdk-visually-hidden">
    </span>
  `
})
export class IconComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}