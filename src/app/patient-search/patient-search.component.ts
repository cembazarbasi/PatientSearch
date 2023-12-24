
import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient, Appointment } from '../patient';


@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss'],
})
export class PatientSearchComponent {
  patients: Patient[] = [];
  searchFirstName: string = '';
  searchLastName: string = '';
  searchDob: Date | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;
  selectedPatients: Patient[] = []; 
  datePipe: any;
  activeTab: string = 'tab1';

 



  constructor(private patientService: PatientService) {
    this.patientService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }

  switchTab(tab: string): void {
    
    this.selectedPatients = [];
    this.activeTab = tab;
  }

  searchPatients(): void {
    // Clear previous selections
    this.selectedPatients = [];

    this.patients.forEach((patient) => {
      const firstNameMatch = patient.firstName.toLowerCase().includes(this.searchFirstName.toLowerCase());
      const lastNameMatch = patient.lastName.toLowerCase().includes(this.searchLastName.toLowerCase());

      let dobMatch = true;
      if (this.searchDob) {
        const patientDob = new Date(patient.dob);
        if (this.searchDob instanceof Date) {
          dobMatch = patientDob instanceof Date && patientDob.toISOString().split('T')[0].includes(this.searchDob.toISOString().split('T')[0]);
        } else {
          console.error('Invalid searchDob:', this.searchDob);
        }
      }

      // Check for appointment date range
      if (this.startDate && this.endDate instanceof Date && patient.appointments) {
        const startDate = this.startDate;
        const endDate = new Date(this.endDate.getTime() + 24 * 60 * 60 * 1000);
      
        if (patient.appointments.some((appointment: Appointment) => {
          const appointmentDate = appointment.date;
          return appointmentDate >= startDate && appointmentDate < endDate;
        })) {
          // Add patient to selectedPatients array
          this.selectedPatients.push(patient);
        }
      }

      // If there is a match based on first name, last name, and dob, or appointment date range, set it as the selected patient
      if (firstNameMatch && lastNameMatch && dobMatch) {
        this.selectedPatients.push(patient);
      }
    });
  }
}
