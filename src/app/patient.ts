

export interface Patient {

    id: string;
    firstName: string;
    sex:string;
    lastName: string;
    dob: string;
    residence: string;
    mrn: string;
    ssn: string;
    phone: string;
    email: string;
    hospital: string;
    dept: string;
    physician: string;
    conditions: string;
    appointments?: Appointment[];
    nextApp:string;
  }

 
  export interface Appointment {
    id: string;
    date: Date;
   
  }