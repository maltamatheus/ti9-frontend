import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EnumUF } from '../../../../assets/enums/enumUF';
import { DiretivaSomenteNumeros } from '../../../../assets/utils/somente-numeros.directive';

@Component({
  selector: 'app-enderecos',
  imports: [
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatSelectModule,
      DiretivaSomenteNumeros
  ],
  templateUrl: './enderecos.html',
  styleUrl: './enderecos.css',
})
export class Enderecos {

  @Input() cadastroEndereco!: FormGroup;
  listaUF: string[] = Object.values(EnumUF);
}
