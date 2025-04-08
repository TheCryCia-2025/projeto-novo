import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SobreComponent } from './sobre/sobre.component';
import { AdicionarMedicoComponent } from './adicionar-medico/adicionar-medico.component';
import { AdicionarPacienteComponent } from './adicionar-paciente/adicionar-paciente.component';



  @NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      PacientesComponent,
      SobreComponent,
      AdicionarMedicoComponent,
      AdicionarPacienteComponent,

    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
