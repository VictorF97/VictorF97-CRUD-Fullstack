import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './Components/pessoas/pessoas.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoasComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AppAngular';
}