
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patients: any[] = [
    {id: 'NHL12345678', sex:'Female', firstName:'Ashley', lastName:'Citarella', dob:'07/02/1958', residence:'Boston, MA', mrn:'YTK12345678', 
    ssn: '0000', phone:'(000)-000-0000', email:'ashcitarella@example.com', hospital: 'Massachusettes Medical Group', 
    dept:'Department of Cardiology', physician:'Dr.Beth Smith', conditions:'COPD, CHF, Diabetes(Type II)', appointments: [{ date: new Date('2023-12-23T09:00:00')}, { date: new Date('2023-12-24T09:00:00')}, { date: new Date('2023-12-25T09:00:00')}], nextApp:'Today 9:00 am'},

    {id: 'NHL12345678', sex:'Male', firstName:'Albert', lastName:'Johnson', dob:'01/15/1952', residence:'Waltham, MA', mrn:'YTK12343675', 
    ssn: '1111', phone:'(111)-111-1111', email:'aljohnson1952@example.com', hospital: 'Massachusettes Medical Group', 
    dept:'Department of Cardiology', physician:'Dr.Beth Smith', conditions:'CHF', appointments: [{ date: new Date('2023-12-24T10:00:00')}, { date: new Date('2023-12-24T11:00:00')}, { date: new Date('2023-12-25T11:00:00')}],nextApp:'Today 10:00 am' },

    {id: 'NHL12345678', sex:'Female', firstName:'Leslie Isabelle', lastName:'Wang', dob:'03/12/1985', residence:'Mooselookmeguntic, ME', mrn:'YTK12343675', 
    ssn: '2222', phone:'(222)-222-2222', email:'leslie.isabelle.wang@example.com', hospital: 'Massachusettes Medical Group', 
    dept:'Department of Cardiology', physician:'Dr.Beth Smith', conditions:'CHF', appointments: [{ date: new Date('2023-12-23T11:00:00')}, { date: new Date('2023-12-24T11:00:00')}, { date: new Date('2023-12-25T11:00:00')}], nextApp:'Today 11:00 am' },

    {id: 'NHL12345678', sex:'Male', firstName:'Adela', lastName:'Bašić', dob:'03/12/1950', residence:'Boston, MA', mrn:'YTK12343675', 
    ssn: '3333', phone:'(333)-333-3333', email:'adelabasic50@example.com', hospital: 'Massachusettes Medical Group', 
    dept:'Department of Cardiology', physician:'Dr.Beth Smith', conditions:'CHF', appointments: [{ date: new Date('2023-12-23T01:30:00')}, { date: new Date('2023-12-24T01:30:00')}, { date: new Date('2023-12-25T01:30:00')}], nextApp:'Today 1:30 am' },

    {id: 'NHL12345678', sex:'Male', firstName:'Reza ', lastName:'Saatchi', dob:'03/12/1957', residence:'Boston, MA', mrn:'YTK12343675', 
    ssn: '4444', phone:'(444)-444-4444', email:'reza.saatchi@example.com', hospital: 'Massachusettes Medical Group', 
    dept:'Department of Cardiology', physician:'Dr.Beth Smith', conditions:'CHF', appointments: [{ date: new Date('2023-12-23T02:30:00')}, { date: new Date('2023-12-24T02:30:00')}, { date: new Date('2023-12-25T02:30:00')}], nextApp:'Today 2:30 pm' },
    
    {id: 'NHL12345678', sex:'Male', firstName:'Arjun', lastName:'Chandrasekar', dob:'03/12/1950', residence:'New York City, NY', mrn:'YTK12343675', 
    ssn: '5555', phone:'(555)-555-5555', email:'arjunchandra@example.com', hospital: 'Massachusettes Medical Group', 
    dept:'Department of Cardiology', physician:'Dr.Beth Smith', conditions:'CHF', appointments: [{ id:'1', date: new Date('2023-12-23T03:30:00')}, {id:'2', date: new Date('2023-12-24T03:30:00')}, {id:'3', date: new Date('2023-12-25T03:30:00')}], nextApp:'Today 3:30 am' },
  ]

  getPatients(): Observable<Patient[]> {
    return of(this.patients);
  }
}
