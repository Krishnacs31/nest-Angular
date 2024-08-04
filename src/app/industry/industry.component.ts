import { Component } from '@angular/core';
import { getActiveConsumer } from '@angular/core/primitives/signals';
import { AccordionComponent } from '../units/accordion/accordion.component';

@Component({
  selector: 'app-industry',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './industry.component.html',
  styleUrl: './industry.component.css'
})
export class IndustryComponent {

}
