import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Car } from './Car.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FirstAngularProject';
  model: string = 'Bir model seçiniz.';
  car: Car = new Car ('Audi', 'A6', 2016);
  firstName: string =' ';
  lastName: string = ' ';
  eMail: string = ' ';
  password: string = ' ';
  name : string =' ';
  name2 : string =' ';
}