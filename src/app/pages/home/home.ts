import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthenticationServices } from '../../services/authentication-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
constructor(private authenticationServices: AuthenticationServices,
  private router: Router,
) {}

  ngOnInit(): void {
    console.log('Home component initialized');

  }

  deslogar() {
    this.authenticationServices.deslogar().subscribe(
      response => {
        console.log('Resposta do servidor ao deslogar:', response);
        // Redirecionar para a página de login ou outra ação após o logout
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erro ao deslogar:', error);
        // Tratar erros de logout, se necessário
      }
    );
  }
}
