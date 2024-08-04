import { Component } from '@angular/core';
//import { CarouselComponent } from '../units/carousel/carousel.component';
import { AccordionComponent } from '../units/accordion/accordion.component';

@Component({
  selector: 'app-aero',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './aero.component.html',
  styleUrl: './aero.component.css'
})
export class AeroComponent {

}
