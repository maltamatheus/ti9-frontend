import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Home } from "../home/home";

@Component({
  selector: 'app-fornecedores',
  imports: [
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatSelectModule,
      Home
  ],
  templateUrl: './fornecedores.html',
  styleUrl: './fornecedores.css',
})
export class Fornecedores {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      login: ['', Validators.required],
      perfil: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  tiposUsuario : string[] = [ 'ADMIN', 'AUDITOR', 'VIEWER' ];

  cadastrar() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      console.log('Valor do campo Login',this.cadastroForm.get('login')?.value);
      // Chamar serviço de API aqui
    }
  }
}
