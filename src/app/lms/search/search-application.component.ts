import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LmsApiService } from '../service/lms-api.service';
import { catchError, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoanApplicationAggregate } from '../models/loanApplication.model';
import { SnackBarService } from 'src/app/core/service/snackbar-service.service';

@Component({
    selector: 'search-application',
    templateUrl: './search-application.component.html',
})
export class SearchApplicationComponent {

    constructor(private formBuilder: FormBuilder, private lmsServiceApi: LmsApiService,
        private router: Router, private activatedRoute: ActivatedRoute, private snackBarService: SnackBarService) { }

    searchApplicationForm = this.formBuilder.group({
        custPhoneNumber: ["", [Validators.pattern("^[1-9]{1}[0-9]{9}")]],
        custFirstName: ["",],
        custLastName: ["",],
        applicationId: ["",],
        aadhaarNumber: ["",],
        patientId: ["",],
    });

    searchApplications() {

        let searchResults$ = this.lmsServiceApi.searchApplications(this.searchApplicationForm.value);

        searchResults$.pipe(
            catchError(error => {
                console.log(error);
                return of([]);
            })
        ).subscribe((data) => {
            console.log("Search Results:" + JSON.stringify(data));

            if (data.length > 0) {
                this.router.navigateByUrl('/applicationSearchResults', { state: { data: data } });
            } else {
                this.snackBarService.openSnackBar("No results found !", "Close");
            }
        })

        console.log('form data is ', this.searchApplicationForm.value);
    }


}