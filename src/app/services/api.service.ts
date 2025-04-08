import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // URL do json-server

  constructor(private http: HttpClient) {}

  getMedicos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/medicos`);
  }

  getPacientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pacientes`);
  }
  adicionarMedico(medico: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/medicos`, medico);
  }

  adicionarPaciente(paciente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/pacientes`, paciente);
  }

  getMedicoPorId(id: number) {
    return this.http.get(`${this.baseUrl}/medicos/${id}`);
  }
  
  atualizarMedico(id: number, medico: any) {
    return this.http.put(`${this.baseUrl}/medicos/${id}`, medico);
  }
  
  
  
}