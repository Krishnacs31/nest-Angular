import { Component } from '@angular/core';
import { AboutComponent } from "../pages/about/about.component";
import { AccordionComponent } from "../units/accordion/accordion.component";

@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent {

}
