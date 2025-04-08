import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-paciente',
  standalone: false,
  templateUrl: './adicionar-paciente.component.html',
  styleUrls: ['./adicionar-paciente.component.css']
})
export class AdicionarPacienteComponent {
  novoPaciente = {
    nome: '',
    descricao: '',
    medico: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  adicionarPaciente() {
    this.apiService.getPacientes().subscribe((pacientes: any[]) => {
      const maiorId = pacientes.reduce((max, paciente) => paciente.id > max ? paciente.id : max, 0);
      const novoPaciente = {
        id: maiorId + 1,
        ...this.novoPaciente
      };

      this.apiService.adicionarPaciente(novoPaciente).subscribe(() => {
        this.router.navigate(['/pacientes']);
      });
    });
  }
}
