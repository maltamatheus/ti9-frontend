import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServices {
  constructor(private httpClient:HttpClient) {}

  private readonly API_BASE = `${environment.context}`;

  logar(login: string, password: string) {
    const url = `${this.API_BASE}/auth/login`;
    console.log('URL de login:', url);
    return this.httpClient.post(url, { login, password });
  }

  deslogar(){
    const url = `${this.API_BASE}/auth/logout`;
    console.log('URL de logout:', url);
    return this.httpClient.post<string>(url,null)
  }
}
