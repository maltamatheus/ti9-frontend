import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
],
providers: [
  provideNgxMask()
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ti9-frontend');
}
