import { Component } from '@angular/core';
import { HeaderMainComponent } from '../header-main/header-main.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
