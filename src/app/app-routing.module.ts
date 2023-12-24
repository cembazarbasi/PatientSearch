import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientSearchComponent } from './patient-search/patient-search.component';

const routes: Routes = [
  { path: '', component: PatientSearchComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
