import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './units/cards/cards.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { AccordionComponent } from './units/accordion/accordion.component';
import { AeroComponent } from './aero/aero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CardsComponent,CarouselComponent,AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
}
