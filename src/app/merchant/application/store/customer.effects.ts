import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ExecutionServiceApiService } from "../../service/execution-service-api.service";
import { CustomerActions } from ".";

@Injectable()
export class CustomerEffects {
    constructor(private actions$: Actions, private executionServiceApiService: ExecutionServiceApiService) { }

    registerCustomer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CustomerActions.registerNewCustomer || CustomerActions.updateCustomer),
            switchMap((action) => this.executionServiceApiService.registerCustomer(action.customer).pipe(
                map(registeredCustomer => CustomerActions.registerNewCustomerSuccess({ customer: registeredCustomer })),
                catchError((error: any) => of(CustomerActions. applicationErrorAction(error)))
            ))
        )
    );

    getCustomerByPhoneNumber$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CustomerActions.getCustomerByPhoneNumber),
            switchMap((action) => this.executionServiceApiService.getCustomerByPhoneNumber(action.phoneNumber).pipe(
                map(matchedCustomer => CustomerActions.getCustomerByPhoneNumberSuccess({ customer: matchedCustomer })),
                catchError((error: any) => of(CustomerActions.applicationErrorAction(error)))
            ))
        )
    );
}