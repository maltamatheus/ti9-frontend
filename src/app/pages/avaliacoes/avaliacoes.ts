import { Component } from '@angular/core';
import { Home } from '../home/home';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnumPerfilUsuario } from '../../../assets/enums/enumPerfilUsuario';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-avaliacoes',
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    Home
  ],
  templateUrl: './avaliacoes.html',
  styleUrl: './avaliacoes.css',
})
export class Avaliacoes {
  cadastroAvaliacao!: FormGroup;
  tituloForm: string = "Cadastro de Avaliações";

  constructor(private fb: FormBuilder) {
    this.cadastroAvaliacao = this.fb.group({
      login: ['', Validators.required],
      perfil: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  tiposUsuario !: EnumPerfilUsuario;


  cadastrar() {
    if (this.cadastroAvaliacao.valid) {
      console.log(this.cadastroAvaliacao.value);
      // Chamar serviço de API aqui
    }
  }
}
