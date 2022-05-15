import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExecutionServiceApiService } from '../service/execution-service-api.service';
import { catchError, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { CustomerState } from './store/customer.state';
import * as CustomerActions from './store/customer.actions';

export class User {
    public name!: string;
    public email!: string;
    public password!: string;
    public hobbies!: string;
}
@Component({
    selector: 'verify-phone',
    templateUrl: './verify-phone.component.html',
    //styleUrls: ['./personal-details.component.scss'],
})
export class VerifyPhoneComponent {

    constructor(private formBuilder: FormBuilder, private executionServiceApi: ExecutionServiceApiService,
        private router: Router, private activatedRoute: ActivatedRoute, private customerStore$: Store<CustomerState>) { }

    otpSent: boolean = false;
    otpVerified: boolean = false;

    genderOptions: string[] = [
        'Male',
        'Female',
    ];

    verifyPhoneForm = this.formBuilder.group({
        phoneNumber: ["", [Validators.required, Validators.maxLength(10), Validators.pattern("^[1-9]{1}[0-9]{9}")]],
        otp: ["", [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{4}")]],
    });

    sendOtp() {

        this.customerStore$.
        dispatch(CustomerActions.getCustomerByPhoneNumber({phoneNumber : this.verifyPhoneForm.get("phoneNumber").value}));

        let customerObservable$ = this.executionServiceApi.getCustomerByPhoneNumber(this.verifyPhoneForm.get("phoneNumber").value);

        customerObservable$.pipe(
            catchError(error => {
                console.log(error);
                return of([]);
            })
        ).subscribe((data) => {
            console.log(data);
        })

        console.log('form data is ', this.verifyPhoneForm.value);
        this.otpSent = true;
    }

    verifyOtp() {
        console.log('form data is ', this.verifyPhoneForm.value);
        this.otpVerified = true;
    }

    hasError(controlName: string, errorName: string) {
        return this.verifyPhoneForm.controls[controlName].hasError(errorName);
    }

    next() {
        this.router.navigate(['applicationWizard'], { relativeTo: this.activatedRoute.parent });
    }

}