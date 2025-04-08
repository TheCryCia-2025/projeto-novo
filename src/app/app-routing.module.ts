import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { SobreComponent } from './sobre/sobre.component';
import { AdicionarMedicoComponent } from './adicionar-medico/adicionar-medico.component';
import { AdicionarPacienteComponent } from './adicionar-paciente/adicionar-paciente.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'adicionar-medico', component: AdicionarMedicoComponent },
  { path: 'adicionar-paciente', component: AdicionarPacienteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

