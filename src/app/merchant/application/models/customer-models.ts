export class Customer {
    customerId: number;
    name: Name;
    dateOfBirth: Date;
    gender: Gender;
    address: Address;
    identificationDetails: IdentificationDetails;
    employmentDetails: EmploymentDetails;
}

export class Name {
    firstName: string;
    lastName: string;
}

export enum Gender {
    MALE, FEMALE
}

export class Address {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
}

export class IdentificationDetails {
    emailId: string;
    aadhaarNumber: string;
    panNumber: string;
    phoneNumber: string;
    phoneLinkedToAadhaar: Boolean;
    patientId: string;
    relationshipWithPatient: string;
}

export class EmploymentDetails {
    occupation: string;
    monthlyIncome: number;
    monthlyExpenses: number;
}

export class LoanApplication {
    customerId: number;
    applicationId: number;
    milestoneStatus: MilestoneStatus
    status: LoanApplicationStatus;
}

export enum MilestoneStatus {
    UNDERWRITING_PENDING = 'UNDERWRITING_PENDING'
}

export enum LoanApplicationStatus {
    PENDING = "PENDING",
    WITHDRAWN = "WITHDRAWN",
    DENIED = "DENIED",
    ORIGINATED = "ORIGINATED"
}


export interface AppError {
 status : number;
 message : string;
}
