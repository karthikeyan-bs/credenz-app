import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { LmsModule } from '../lms/lms.module';
import { AppMaterialModule } from '../app-material.module';
import { ApplicationWizardComponent } from './application/application-wizard/application-wizard.component';
import { NewApplicationComponent } from './application/application-wizard/new-application.component';
import { EmploymentDetailsComponent } from './application/employment-details/employment-details.component';
import { IdentificationDetailsComponent } from './application/identification-details/identification-details.component';
import { PersonalDetailsComponent } from './application/personal-details/personal-details.component';
import { CustomerEffects } from './application/store/customer.effects';
import { customerReducer } from './application/store/customer.reducer';
import { VerifyPhoneComponent } from './application/verify-phone.component';
import { MerchantRoutingModule } from './merchant-routing.module';
import { LmsApiService } from './service/lms-api.service';

/*
export const featureReducersMap: ActionReducerMap<IState<any>> = {
  customer: customerReducer
}
*/

@NgModule({
  declarations: [NewApplicationComponent, PersonalDetailsComponent,
    VerifyPhoneComponent, IdentificationDetailsComponent, EmploymentDetailsComponent, ApplicationWizardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MerchantRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    CoreModule,
    LmsModule,
    StoreModule.forFeature("customer", customerReducer),
    EffectsModule.forFeature([CustomerEffects])
  ],
  providers: [
    LmsApiService
  ]

})
export class MerchantModule { }
