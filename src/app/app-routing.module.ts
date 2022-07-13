import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "merchant",
    loadChildren : () =>
     import('./merchant/merchant.module').then((m) => m.MerchantModule),
  },
  {
    path: "lms",
    loadChildren : () =>
     import('./lms/lms.module').then((m) => m.LmsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
