import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxMatMySimpleAppbarComponent } from '@yu-ko-ba/ngx-mat-my-simple-appbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxMatMySimpleAppbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dark-mode-example';
}
