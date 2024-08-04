import { Component } from '@angular/core';
import { CardsComponent } from "../../units/cards/cards.component";

@Component({
  selector: 'app-dept',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './dept.component.html',
  styleUrl: './dept.component.css'
})
export class DeptComponent {

}
