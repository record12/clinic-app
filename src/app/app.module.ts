import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ClinicService } from './services/clinic.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { ClinicDetailComponent } from './components/clinic-detail/clinic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClinicsComponent,
    NoContentComponent,
    ClinicDetailComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
