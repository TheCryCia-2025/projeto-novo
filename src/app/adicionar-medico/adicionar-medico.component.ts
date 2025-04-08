import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-medico',
  standalone: false,
  templateUrl: './adicionar-medico.component.html',
  styleUrls: ['./adicionar-medico.component.css']
})
export class AdicionarMedicoComponent {
  novoMedico = {
    nome: '',
    descricao: '',
    paciente: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  adicionarMedico() {
    this.apiService.getMedicos().subscribe((medicos: any[]) => {
      const maiorId = medicos.reduce((max, medico) => medico.id > max ? medico.id : max, 0);

      const novoMedico = {
        id: maiorId + 1,
        nome: this.novoMedico.nome,
        descricao: this.novoMedico.descricao,
        paciente: this.novoMedico.paciente
      };

      this.apiService.adicionarMedico(novoMedico).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    });
  }
}
