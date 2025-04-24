import { Component, inject, effect } from '@angular/core';
import { MagicApiService } from './services/magic.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'app';
  cards = inject(MagicApiService).cards;
}
