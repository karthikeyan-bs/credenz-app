import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer-models';
import { CustomerActions, CustomerSelectors } from '../store';
import { CustomerState } from '../store/customer.state';

export class User {
    public name!: string;
    public email!: string;
    public password!: string;
    public hobbies!: string;
}
@Component({
    selector: 'personal-details',
    templateUrl: './personal-details.component.html',
    styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {

    private customer$: Observable<Customer>;

    @Input("customer")
    customer: Customer;

    form: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private customerStore: Store<CustomerState>) { }

    ngOnInit(): void {
        this.customerForm.patchValue(this.customer);
    }

    genderOptions: string[] = [
        'Male',
        'Female',
    ];

    customerForm = this.formBuilder.group({
        name: this.formBuilder.group({
            firstName: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
        }),
        gender: ["MALE", [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        address: this.formBuilder.group({
            addressLine1: [null, [Validators.required]],
            addressLine2: [null, [Validators.required]],
            city: [null, [Validators.required]],
            state: [null, [Validators.required]],
            pincode: [null, [Validators.required, Validators.pattern("^[1-9][0-9]{5}$")]],
        }),
    });

    onSubmit() {
        console.log('form data is ', this.customerForm.value);
    }

    next() {
        this.customer = Object.assign(this.customer, this.customerForm.value);
        this.customerStore.dispatch(CustomerActions.saveCustomer({ customer: this.customer }))
        this.router.navigate(['identificationDetails'], { relativeTo: this.activatedRoute.parent });
    }

    hasError(controlName: string, errorName: string) {
        let control = this.customerForm.get(controlName);
        return control.touched && control.invalid && control.hasError(errorName);
    }

    setCustomer(customer: Customer) {
        this.customer = customer;
    }

}