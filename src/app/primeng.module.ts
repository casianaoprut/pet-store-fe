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
import {SkeletonModule} from 'primeng/skeleton';
import {SidebarModule} from 'primeng/sidebar';
import {RippleModule} from "primeng/ripple";
import {HttpClientModule} from '@angular/common/http';
import {InputNumberModule} from 'primeng/inputnumber';
import {PanelModule} from 'primeng/panel';
import {TagModule} from 'primeng/tag';
import {CarouselModule} from 'primeng/carousel';
import {GMapModule} from 'primeng/gmap';

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
    DropdownModule,
    SkeletonModule,
    SidebarModule,
    RippleModule,
    HttpClientModule,
    InputNumberModule,
    PanelModule,
    TagModule,
    CarouselModule,
    GMapModule
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
    DropdownModule,
    SkeletonModule,
    SidebarModule,
    RippleModule,
    HttpClientModule,
    InputNumberModule,
    PanelModule,
    TagModule,
    CarouselModule,
    GMapModule
  ]
})
export class PrimengModule { }
