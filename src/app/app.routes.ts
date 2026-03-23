import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Usuarios } from './pages/usuarios/usuarios';
import { Fornecedores } from './pages/fornecedores/fornecedores';
import { Documentos } from './pages/documentos/documentos';
import { Avaliacoes } from './pages/avaliacoes/avaliacoes';
import { Analytics } from './pages/analytics/analytics';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'usuarios', component: Usuarios },
  { path: 'fornecedores', component: Fornecedores },
  { path: 'documentos', component: Documentos },
  { path: 'avaliacoes', component: Avaliacoes },
  { path: 'analytics', component: Analytics },
];
