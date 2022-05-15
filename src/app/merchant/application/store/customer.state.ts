import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { Customer, LoanApplication } from "../models/customer-models";

export interface CustomerState {
    customerId: number;
    customer: Customer;
}

const getCustomerFeatureState = createFeatureSelector<CustomerState>('customer');

export const getCustomer = createSelector(
    getCustomerFeatureState,
    state => state.customer
);



