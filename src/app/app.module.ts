
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientService } from './patient.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';










@NgModule({
  declarations: [
    AppComponent, 
    PatientSearchComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [PatientService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
