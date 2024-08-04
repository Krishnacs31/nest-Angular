import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeptComponent } from './pages/dept/dept.component';
import { AboutComponent } from './pages/about/about.component';
import { AeroComponent } from './aero/aero.component';
import { BankComponent } from './bank/bank.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { IndustryComponent } from './industry/industry.component';
import { DefenceComponent } from './defence/defence.component';
import { LocoComponent } from './loco/loco.component';
import { MobilityComponent } from './mobility/mobility.component';
import { HealthComponent } from './health/health.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'dept',component:DeptComponent},
    {path:'about',component:AboutComponent},
    {path:'aero',component:AeroComponent},
    {path:'bank',component:BankComponent},
    {path:'insurance',component:InsuranceComponent},
    {path:'industry',component:IndustryComponent},
    {path:'defence',component:DefenceComponent},
    {path:'loco',component:LocoComponent},
    {path:'mobility',component:MobilityComponent},
    {path:'health',component:HealthComponent}
];
