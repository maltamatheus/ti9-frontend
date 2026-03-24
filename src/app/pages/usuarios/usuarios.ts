import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuariosService } from '../../services/usuarios-service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnumPerfilUsuario } from '../../../assets/enums/enumPerfilUsuario';
import { Home } from "../home/home";

@Component({
  selector: 'app-usuarios',
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    Home,
],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  cadastroUsuario: FormGroup;

  constructor(private fb: FormBuilder,
              private usuariosService: UsuariosService,
  ) {
    this.cadastroUsuario = this.fb.group({
      login: ['', Validators.required],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  tiposUsuario : string [] = Object.values(EnumPerfilUsuario);

  tituloForm: string = "Cadastro de Usuários";

  private snackBar = inject(MatSnackBar);

  cadastrar() {
    if (this.cadastroUsuario.valid) {
      console.log(this.cadastroUsuario.value);
      this.usuariosService.registrar({
        login: this.cadastroUsuario.get('login')?.value,
        password: this.cadastroUsuario.get('password')?.value,
        role: EnumPerfilUsuario[this.cadastroUsuario.get('role')?.value as keyof typeof EnumPerfilUsuario],
        enabled: true
      }).subscribe({
        next: (response) => {
          console.log('Usuário registrado com sucesso:', response);
          this.snackBar.open("Cadastro Efetuado com Sucesso!", "Fechar", {
            duration: 3000,
            panelClass: ['snackbar-sucesso']
          });
        },error: (error) => {
          this.snackBar.open(error.error, "Fechar", {
            duration: 3000,
            panelClass: ['snackbar-erro']
          });
        }
      });
    }
  }
}
