import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { PortalAdministradorComponent } from './pages/portal-administrador/portal-administrador.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'portalAdministrador', component: PortalAdministradorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
