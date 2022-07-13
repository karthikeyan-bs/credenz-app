import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer, IdentificationDetails } from '../models/customer-models';
import { CustomerState } from '../store/customer.state';

export class User {
    public name!: string;
    public email!: string;
    public password!: string;
    public hobbies!: string;
}
@Component({
    selector: 'identification-details',
    templateUrl: './identification-details.component.html',
})
export class IdentificationDetailsComponent {

    @Input("customer")
    customer: Customer;

    form: FormGroup;

    private customer$: Observable<Customer>;

    private indentificationDetails: IdentificationDetails;

    constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private customerStore: Store<CustomerState>) { }

    ngOnInit(): void {

        if (this.customer?.identificationDetails != null) {
            this.indentificationDetails = this.customer.identificationDetails;
            this.identificationDetailsForm.patchValue(this.indentificationDetails);
        } else {
            this.customer = { ...this.customer, identificationDetails: new IdentificationDetails() };
        }

        this.identificationDetailsForm.patchValue(this.customer.identificationDetails);
    }

    identificationDetailsForm = this.formBuilder.group({
        emailId: ['', [Validators.required, Validators.email]],
        aadhaarNumber: [null, [Validators.required]],
        panNumber: [null, [Validators.required]],
        phoneNumber: [null, [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{9}")]],
        phoneLinkedToAadhaar: [null, [Validators.required]],
        patientId: [null, [Validators.required]],
        relationshipWithPatient: [null, [Validators.required]],
    });

    hasError(controlName: string, errorName: string) {
        let control = this.identificationDetailsForm.get(controlName);
        return control.touched && control.invalid && control.hasError(errorName);
    }

    setCustomer(customer: Customer) {
        this.customer = customer;
    }

}