import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Events } from './Eventts/events/events';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Footer,Header,Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjectSSA');
}
