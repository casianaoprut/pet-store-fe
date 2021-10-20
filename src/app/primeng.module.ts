import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PasswordModule,
    MessageModule,
    ButtonModule,
    InputTextModule,
    FileUploadModule,
    CardModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule
  ],
  exports: [
    PasswordModule,
    MessageModule,
    ButtonModule,
    InputTextModule,
    FileUploadModule,
    CardModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule
  ]
})
export class PrimengModule { }
