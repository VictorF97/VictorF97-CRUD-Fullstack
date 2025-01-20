import { Routes } from '@angular/router';
import { PessoasComponent } from './Components/pessoas/pessoas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pessoas', pathMatch: 'full' }, // Redireciona da raiz para "/pessoas"
  { path: 'pessoas', component: PessoasComponent },       // Rota para o componente Pessoas
];