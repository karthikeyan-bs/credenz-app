import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../application/models/customer-models';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ExecutionServiceApiService {
    constructor(private http: HttpClient) { }

    private executionServiceBaseUrl: string = "http://localhost:9010/api/v1";

    private getCusomerByPhoneNumberUrl: string = this.executionServiceBaseUrl + "/customer";
    private registerCustomerUrl: string = this.executionServiceBaseUrl + "/customer";

    public getCustomerByPhoneNumber(phoneNumber: string): Observable<Customer> {
        return this.http
            .get<Customer>(this.getCusomerByPhoneNumberUrl + "/" + phoneNumber)
            .pipe(
                catchError(this.handleError)
            );
    }

    public registerCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.registerCustomerUrl, customer);
    }

    private handleError(error: any) {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
        } else {
            errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(() => new Error(this.getServerErrorMessage(error)));
    }

    private getServerErrorMessage(error: HttpErrorResponse): any {

        let errorObject: any = {};
        errorObject.status = error.status;
        let errorMessage: string = error.message;

        switch (error.status) {
            case 404: {
                errorMessage = `Not Found: ${error.message}`;
                break;
            }
            case 403: {
                errorMessage = `Access Denied: ${error.message}`;
                break;
            }
            case 500: {
                errorMessage = `Internal Server Error: ${error.message}`;
                break;
            }
            default: {
                errorMessage = `Unknown Server Error: ${error.message}`;
                break;
            }

                errorObject.message = errorMessage;
        }

        return errorObject;
    }
}