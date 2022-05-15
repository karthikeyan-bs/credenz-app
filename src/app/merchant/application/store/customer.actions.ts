import { createAction, props } from '@ngrx/store';
import { Customer } from '../models/customer-models';

export const getCustomerByPhoneNumber = createAction(
    "[New Application] Get Customer By Phone]",
    props<{ phoneNumber: string }>()
);
export const getCustomerByPhoneNumberSuccess = createAction(
    "[New Application] Get Customer By Phone Success]",
    props<{ customer: Customer }>()
);
export const getCustomerByPhoneNumberError = createAction(
    "[New Application] Get Customer By Phone Error]",
    props<{ error: any }>()
);

export const saveCustomer = createAction(
    "[New Application] Save Customer]",
    props<{ customer: Customer }>()
);

export const registerNewCustomer = createAction(
    "[New Application] Register New Customer]",
    props<{ customer: Customer }>()
);
export const registerNewCustomerSuccess = createAction(
    '[New Application] Register Customer Success',
    props<{ customer: Customer }>()
);
export const updateCustomerSuccess = createAction(
    '[New Application] Update Customer Success',
    props<{ customer: Customer }>()
);
export const applicationErrorAction = createAction(
    '[New Application] Register Customer Error',
    props<{ error: any }>()
);

export const updateCustomer = createAction(
    "[New Application] Update Customer]",
    props<{ customer: Customer }>()
);