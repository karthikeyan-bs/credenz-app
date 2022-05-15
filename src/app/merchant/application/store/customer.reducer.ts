import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Customer } from "../models/customer-models";
import { CustomerActions } from ".";
import { CustomerState } from "./customer.state";

const initialState: CustomerState = {
    customerId: null,
    customer: null
}

export const customerReducer = createReducer<CustomerState>(
    initialState,
    on(
        CustomerActions.registerNewCustomerSuccess,
        CustomerActions.updateCustomerSuccess,
        CustomerActions.getCustomerByPhoneNumberSuccess,
        CustomerActions.saveCustomer,
        (state, action): CustomerState => {
            return {
                ...state,
                customerId: action.customer.customerId,
                customer: action.customer
            };
        }
    )
);