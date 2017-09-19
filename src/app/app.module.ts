import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ClinicService } from './services/clinic.service';
import { PatientService } from './services/patient.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { ClinicDetailComponent } from './components/clinic-detail/clinic-detail.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { StorageService } from './services/storage.service';
import { RelationService } from './services/relation.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClinicsComponent,
    NoContentComponent,
    ClinicDetailComponent,
    PatientDetailComponent,
    PatientsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    ClinicService,
    PatientService,
    StorageService,
    RelationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
