import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicsComponent } from './components/clinics/clinics.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { ClinicDetailComponent } from './components/clinic-detail/clinic-detail.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/clinics', pathMatch: 'full'},
  { path: 'clinics', component: ClinicsComponent },
  { path: 'clinics/:id', component: ClinicDetailComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patients/:id', component: PatientDetailComponent },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
