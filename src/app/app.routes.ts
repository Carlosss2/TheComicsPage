import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
export const routes: Routes = [
    {
        path: "", redirectTo: "landing",pathMatch:'full'
    },
    {
        path: "home",component:HomeComponent,
    },
    {
        path: "landing",component:LandingPageComponent
    }
];
