import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pacientes',
  standalone: false,
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: any[] = [];
  filtro: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPacientes().subscribe((data) => {
      this.pacientes = data;
    });
  }

  get pacientesFiltrados() {
    return this.pacientes.filter(paciente =>
      paciente.nome?.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
  
}
