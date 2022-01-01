import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { AuthComponent } from './auth.component'

@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AlertModule
  ],
  providers: []
})
export class AuthModule { }
