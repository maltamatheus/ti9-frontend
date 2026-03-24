import { Component, OnInit, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FornecedorDto } from './../../../assets/dtos/fornecedorDto';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { EnumCategoriaRisco } from '../../../assets/enums/enumCategoriaRisco';
import { EnumPorte } from '../../../assets/enums/enumPorte';
import { EnumTipoFornecedor } from '../../../assets/enums/enumTipoFornecedor';
import { DiretivaSomenteNumeros } from '../../../assets/utils/somente-numeros.directive';
import { FornecedoresService } from '../../services/fornecedores-service.service';
import { Enderecos } from '../components/enderecos/enderecos';
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
      Home,
      Enderecos,
      DiretivaSomenteNumeros,
      MatExpansionModule
  ],
  templateUrl: './fornecedores.html',
  styleUrl: './fornecedores.css',
})
export class Fornecedores implements OnInit {

  constructor(private fb: FormBuilder,
              private fornecedoresService: FornecedoresService,
  ) {}
  cadastroFornecedores!: FormGroup;
  tituloForm: string = "Cadastro de Fornecedores";
  accordion = viewChild.required(MatAccordion);

  ngOnInit() {
    this.cadastroFornecedores = this.fb.group({
      codigo: ['',[Validators.maxLength(10)]],
      razaoSocial: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]],
      tipoFornecedor: ['', [Validators.required]],
      segmento: ['', [Validators.required]],
      porte: ['',],
      endereco:
           this.fb.group({ logradouro: [''],
                          numero: [''],
                          complemento: [''],
                          bairro: [''],
                          cidade: [''],
                          estado: [''],
                          cep: ['',[Validators.maxLength(8)]],
                      }),
      telefone: new FormControl('', [Validators.minLength(11)]),
      email: new FormControl('', [Validators.email]),
      site:['',],
      categoriaRisco: ['', [Validators.required]],
      observacoes: [''],
    });
  }

  tiposFornecedor : string[] = Object.values(EnumTipoFornecedor);
  listaPortes : string[] = Object.values(EnumPorte);
  listaCategoriaRisco : string[] = Object.values(EnumCategoriaRisco);

  cadastrar() {
    if (this.cadastroFornecedores.valid) {

      let site: string = 'http://' + this.cadastroFornecedores.get('site')?.value;
      console.log(site)

      let tipoFornecedor: EnumTipoFornecedor = EnumTipoFornecedor[this.cadastroFornecedores.get('tipoFornecedor')?.value as keyof typeof EnumTipoFornecedor]

      let categoriaRisco: EnumCategoriaRisco = EnumCategoriaRisco[this.cadastroFornecedores.get('categoriaRisco')?.value as keyof typeof EnumCategoriaRisco]

      let novoFornecedor: FornecedorDto = {
          codigo: this.cadastroFornecedores.get('codigo')?.value,
          razaoSocial: this.cadastroFornecedores.get('razaoSocial')?.value,
          cnpj: this.cadastroFornecedores.get('cnpj')?.value,
          tipo: tipoFornecedor,
          segmento: this.cadastroFornecedores.get('segmento')?.value,
          porte: this.cadastroFornecedores.get('porte')?.value,
          endereco: this.cadastroFornecedores.get('endereco')?.value,
          telefone: this.cadastroFornecedores.get('telefone')?.value,
          email: this.cadastroFornecedores.get('email')?.value,
          site: site,
          ativo: this.cadastroFornecedores.get('ativo')?.value,
          categoriaRisco: categoriaRisco,
          observacoes: this.cadastroFornecedores.get('observacoes')?.value
      }
      this.fornecedoresService.cadastrar(novoFornecedor).subscribe({
        next: (response) => {
          console.log('Fornecedor cadastrado com sucesso:', response);
        },error(err) {
          console.error('Erro ao cadastrar fornecedor:', err);
        },
      });
    } else {
      console.log("Formulário inválido.",this.cadastroFornecedores.valid);
      console.log(this.cadastroFornecedores.errors);
    }
  }

  getFormEndereco(): FormGroup {
    return this.cadastroFornecedores.get('endereco') as FormGroup;
  }

  validarCNPJ(): boolean {
    let cnpj = this.cadastroFornecedores.get('cnpj')?.value;
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]+/g, '');

    // Valida tamanho e dígitos repetidos
    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
      return false;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1))) return false;

    return true;
    // Exemplo de uso:
    // console.log(validarCNPJ('11.222.333/0001-81')); // false
    // console.log(validarCNPJ('00000000000000')); // false
  }
}
