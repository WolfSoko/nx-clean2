import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsComponent } from '@clean-nx/utils';

@Component({
  selector: 'nx-clean2-nx-welcome',
  standalone: true,
  imports: [CommonModule, UtilsComponent],
  styleUrl: './nx-welcome.component.scss',
  templateUrl: './nx-welcome.component.html',
  encapsulation: ViewEncapsulation.Emulated,
})
export class NxWelcomeComponent {}
