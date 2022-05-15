import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../models/customer-models';

export class User {
    public name!: string;
    public email!: string;
    public password!: string;
    public hobbies!: string;
}
@Component({
    selector: 'employment-details',
    templateUrl: './employment-details.component.html',
})
export class EmploymentDetailsComponent {

    @Input("customer")
    customer: Customer;

    constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

    genderOptions: string[] = [
        'Male',
        'Female',
    ];

    employmentDetailsForm = this.formBuilder.group({
        /*
        firstName: ['', , Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        dob: ['', Validators.required],
        gender: ['', Validators.required]
        */
        firstName: [null],
        lastName: [null],
        address: [null],
        dob: [null],
        gender: [null]
    });

    onSubmit() {
        console.log('form data is ', this.employmentDetailsForm.value);
    }

    setCustomer(customer : Customer) {

    }

}