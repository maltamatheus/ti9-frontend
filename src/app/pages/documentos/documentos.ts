import { Component } from '@angular/core';
import { Home } from "../home/home";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EnumPerfilUsuario } from '../../../assets/enums/enumPerfilUsuario';

@Component({
  selector: 'app-documentos',
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    Home
  ],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css',
})
export class Documentos {
  cadastroDocumento: FormGroup;
  tituloForm: string = "Cadastro de Documentos";

  constructor(private fb: FormBuilder) {
    this.cadastroDocumento = this.fb.group({
      login: ['', Validators.required],
      perfil: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  tiposUsuario !: EnumPerfilUsuario;


  cadastrar() {
    if (this.cadastroDocumento.valid) {
      console.log(this.cadastroDocumento.value);
      // Chamar serviço de API aqui
    }
  }
}
