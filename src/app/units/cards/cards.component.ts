import { Component } from '@angular/core';
import { AeroComponent } from '../../aero/aero.component';
import { AccordionComponent } from '../accordion/accordion.component';



@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  dept=[
    {
      id:1,
      Title:"AEROSPACE",
      Image:"../../../assets/nestaero.jpg",
      Description:"Pushing boundaries with cutting-edge technologies",
      link:'aero'
    },
    {
      id:2,
      Title:"DEFENCE",
      Image:"../../../assets/nestdefence.jpg",
      Description:"Defending horizons with cutting-edge technologies",
      link:'defence'

    },
    {
      id:3,
      Title:"INSURANCE",
      Image:"../../../assets/nestinsurance.jpg",
      Description:"Unlocking the potential of insurance through technology",
      link:'insurance'

    },
    {
      id:4,
      Title:"LOCOMOTIVE",
      Image:"../../../assets/nestloco.jpg",
      Description:"Locomotive Experiences through Innovative Technologies",
      link:'loco'

    },
    {
      id:5,
      Title:"INDUSTRIAL",
      Image:"../../../assets/nestindustry.png",
      Description:"Power Meets Production: Redefining Manufacturing & Energy",
      link:'industry'

    },
    {
      id:6,
      Title:"MOBILITY",
      Image:"../../../assets/nestmobility.jpg",
      Description:"We are Revolutionizing the world of Mobility",
      link:'mobility'

    },
    {
      id:7,
      Title:"BANKING",
      Image:"../../../assets/nestbanking.jpg",
      Description:"Accelerating the cashless economy efficiently",
      link:'bank'

    },
    {
      id:8,
      Title:"HEALTHCARE",
      Image:"../../../assets/nesthealth.jpg",
      Description:"Promoting digital innovation in the healthcare industry",
      link:'health'
    }
  ]
}
