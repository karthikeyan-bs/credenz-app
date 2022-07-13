import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationSearchResultsComponent } from './search/application-search-results.component';
import { SearchApplicationComponent } from './search/search-application.component';

const routes: Routes = [
  {
    path: "searchApplication",
    component: SearchApplicationComponent,
  },
  { path: 'applicationSearchResults', 
    component: ApplicationSearchResultsComponent, 
    data: [{ id: '1', name: "test" }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }