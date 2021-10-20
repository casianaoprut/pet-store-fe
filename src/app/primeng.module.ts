import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PasswordModule,
    MessageModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    PasswordModule,
    MessageModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimengModule { }
