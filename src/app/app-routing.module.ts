import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicsComponent } from './components/clinics/clinics.component';
import { NoContentComponent } from './components/no-content/no-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/clinics', pathMatch: 'full'},
  { path: 'clinics', component: ClinicsComponent },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
