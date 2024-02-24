import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { UtilsComponent } from '@clean-nx/utils';

@Component({
  selector: 'nx-clean2-nx-welcome',
  standalone: true,
  imports: [CommonModule, UtilsComponent],
  styleUrl: './nx-welcome.component.scss',
  templateUrl: './nx-welcome.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxWelcomeComponent {
  @Input({ required: true })
  title = '...';
}
