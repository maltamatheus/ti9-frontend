import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthenticationServices } from '../../services/authentication-services';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  constructor(private fb:FormBuilder,
              private router: Router,
              private authService: AuthenticationServices) {

  }
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
    onSubmit() {
    if (this.loginForm.valid) {
      console.log('Dados de login:', this.loginForm.value);
      // Chamar serviço de autenticação aqui
      this.authService.logar(this.loginForm.value.login, this.loginForm.value.password).subscribe(
        response => {
          console.log('Resposta do servidor:', response);
      this.router.navigate(['/home']);
        }
      );
    }
  }

}
