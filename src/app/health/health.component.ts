import { Component } from '@angular/core';
import { AccordionComponent } from '../units/accordion/accordion.component';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {

}
