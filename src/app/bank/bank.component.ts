import { Component } from '@angular/core';
import { AccordionComponent } from "../units/accordion/accordion.component";

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {

}
