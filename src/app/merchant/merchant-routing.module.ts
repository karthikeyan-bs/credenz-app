import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentDetailsComponent } from './application/employment-details/employment-details.component';
import { NewApplicationComponent } from './application/application-wizard/new-application.component';
import { VerifyPhoneComponent } from './application/verify-phone.component';
import { PersonalDetailsComponent } from './application/personal-details/personal-details.component';
import { IdentificationDetailsComponent } from './application/identification-details/identification-details.component';
import { ApplicationWizardComponent } from './application/application-wizard/application-wizard.component';

const routes: Routes = [
  {
    path: "newApplication",
    component: NewApplicationComponent,
    //pathMatch: "prefix",
    children: [
      {
        path: '',
        redirectTo: 'verifyPhone',
        pathMatch: 'full'
      },
      {
        path: 'verifyPhone',
        component: VerifyPhoneComponent
      },
      {
        path: 'applicationWizard',
        component: ApplicationWizardComponent
      },
      {
        path: 'personalDetails',
        component: PersonalDetailsComponent
      },
      {
        path: 'identificationDetails',
        component: IdentificationDetailsComponent
      },
      {
        path: 'employmentDetails',
        component: EmploymentDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
