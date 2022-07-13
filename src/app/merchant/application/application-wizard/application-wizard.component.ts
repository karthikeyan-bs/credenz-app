import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { SnackBarService } from 'src/app/core/service/snackbar-service.service';
import { LmsApiService } from '../../service/lms-api.service';
import { EmploymentDetailsComponent } from '../employment-details/employment-details.component';
import { IdentificationDetailsComponent } from '../identification-details/identification-details.component';
import { Customer } from '../models/customer-models';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';

@Component({
  selector: 'app-application-wizard',
  templateUrl: './application-wizard.component.html',
  styleUrls: ['./application-wizard.component.scss']
})
export class ApplicationWizardComponent implements OnInit, AfterViewInit {

  @ViewChild(PersonalDetailsComponent) personalDetailsComponent: PersonalDetailsComponent;
  @ViewChild(IdentificationDetailsComponent) identificationDetailsComponent: IdentificationDetailsComponent;
  @ViewChild(EmploymentDetailsComponent) employmentDetailsComponent: EmploymentDetailsComponent;

  customer: Customer;

  constructor(private _formBuilder: FormBuilder, private executionServiceApi: LmsApiService, private snackBarService: SnackBarService) { }

  ngOnInit() {
    let tempCustomer: Customer = Object.assign(
      new Customer(), {
      name: {
        firstName: "testFirstName",
        lastName: "testLastName",
      },
      dateOfBirth: "2020-04-01",
      address: {
        addressLine1: "testAddressLine1",
        addressLine2: "testAddressLine2",
        city: "testCity",
        state: "testState",
        pincode: "123456"
      },
      identificationDetails: {
        emailId: "test@test.com",
        aadhaarNumber: "1132323223",
        panNumber: "AUEXUTE0E",
        phoneNumber: "9876543210",
        phoneLinkedToAadhaar: true,
        patientId: "PAT-1001",
        relationshipWithPatient: "someRelationship"
      }
    }
    );

    this.customer = tempCustomer;

    this.personalDetailsComponent.setCustomer(this.customer);
    this.identificationDetailsComponent.setCustomer(this.customer);
    this.employmentDetailsComponent.setCustomer(this.customer);
  }

  ngAfterViewInit() {
    this.personalDetailsComponent.setCustomer(this.customer);
    this.identificationDetailsComponent.setCustomer(this.customer);
    this.employmentDetailsComponent.setCustomer(this.customer);
  }

  get personalDetailsStep() {
    return this.personalDetailsComponent ? this.personalDetailsComponent.customerForm : null;
  }

  get identificationDetailsStep() {
    return this.identificationDetailsComponent ? this.identificationDetailsComponent.identificationDetailsForm : null;
  }

  get employmentDetailsStep() {
    return this.employmentDetailsComponent ? this.employmentDetailsComponent.employmentDetailsForm : null;
  }

  registerCustomer() {
    let registeredCustomer$ = this.executionServiceApi.registerCustomer(this.customer);

    registeredCustomer$.pipe(
      catchError(error => {
        console.log(error);
        return of([]);
      })
    ).subscribe((data) => {
      console.log(data);
      this.snackBarService.openSnackBar("Registered new customer !", "Close");
    })
  }

}
