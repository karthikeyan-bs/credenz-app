import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CustomerActions } from ".";
import { LmsApiService } from "../../service/lms-api.service";

@Injectable()
export class CustomerEffects {
    constructor(private actions$: Actions, private lmsApiService: LmsApiService) { }

    registerCustomer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CustomerActions.registerNewCustomer || CustomerActions.updateCustomer),
            switchMap((action) => this.lmsApiService.registerCustomer(action.customer).pipe(
                map(registeredCustomer => CustomerActions.registerNewCustomerSuccess({ customer: registeredCustomer })),
                catchError((error: any) => of(CustomerActions. applicationErrorAction(error)))
            ))
        )
    );

    getCustomerByPhoneNumber$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CustomerActions.getCustomerByPhoneNumber),
            switchMap((action) => this.lmsApiService.getCustomerByPhoneNumber(action.phoneNumber).pipe(
                map(matchedCustomer => CustomerActions.getCustomerByPhoneNumberSuccess({ customer: matchedCustomer })),
                catchError((error: any) => of(CustomerActions.applicationErrorAction(error)))
            ))
        )
    );
}