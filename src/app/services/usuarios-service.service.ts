import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegisterDto } from '../../assets/dtos/registerDto';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient:HttpClient) {}

  private readonly API_BASE = `${environment.context}`;

  registrar(registerDto: RegisterDto) {
    const url = `${this.API_BASE}/auth/register`;
    return this.httpClient.post(url, registerDto);
  }

  deslogar(){
    const url = `${this.API_BASE}/auth/logout`;
    console.log('URL de logout:', url);
    return this.httpClient.post<string>(url,null)
  }
}
