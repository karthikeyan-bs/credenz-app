import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { AppMaterialModule } from '../app-material.module';
import { LmsRoutingModule } from './lms-routing.module';
import { SearchApplicationComponent } from './search/search-application.component';
import { LmsApiService } from './service/lms-api.service';
import { ApplicationSearchResultsComponent } from './search/application-search-results.component';

/*
export const featureReducersMap: ActionReducerMap<IState<any>> = {
  customer: customerReducer
}
*/

@NgModule({
  declarations: [SearchApplicationComponent, ApplicationSearchResultsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LmsRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    LmsApiService
  ]

})
export class LmsModule { }
