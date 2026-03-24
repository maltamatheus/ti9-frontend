import { FornecedorDto } from './../../assets/dtos/fornecedorDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FornecedoresService {
    constructor(private httpClient:HttpClient) {}

  private readonly API_BASE = `${environment.context}`;

  cadastrar(fornecedorDto: FornecedorDto) {
    const url = `${this.API_BASE}/fornecedores`;
    return this.httpClient.post(url, fornecedorDto);
  }

}
