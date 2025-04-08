import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  medicos: any[] = [];
  filtro: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('Dashboard carregado!');
    this.apiService.getMedicos().subscribe((data) => {
      this.medicos = data;
    });
  }

  get medicosFiltrados() {
    return this.medicos.filter(m => 
      m.nome?.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
  
}

