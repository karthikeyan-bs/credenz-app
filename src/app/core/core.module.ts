import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { SpinnerService } from './service/spinner-service.service';
import { SnackBarService } from './service/snackbar-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [
    SpinnerService,
    SnackBarService
  ]

})
export class CoreModule { }
