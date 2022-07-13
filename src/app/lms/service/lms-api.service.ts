import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Customer, LoanApplication } from '../models/customer-models';
import { SearchApplicationCriteria } from '../models/search-application.model';

@Injectable()
export class LmsApiService {
    constructor(private http: HttpClient) { }

    private lmsApiBaseUrl: string = "http://localhost:8080/api/v1";

    private getCusomerByPhoneNumberUrl: string = this.lmsApiBaseUrl + "/customer";
    private registerCustomerUrl: string = this.lmsApiBaseUrl + "/customer";
    private searchApplicationsUrl : string = this.lmsApiBaseUrl + "/loanApplication/search";

    /***************************************************************************** */

    private _json_getCusomerByPhoneNumberUrl : string  = "../../assets/test-json-response/createLoanApplicationResponse.json";
    private _json_registerCustomerResponse : string = "../../assets/test-json-response/registerCustomerResponse.json";
    private _json_searchApplicationsResponse : string = "../../assets/test-json-response/searchApplicationsResponse.json";

    public getCustomerByPhoneNumber(phoneNumber: string): Observable<Customer> {
        return this.http
           // .get<Customer>(this.getCusomerByPhoneNumberUrl + "/" + phoneNumber)
            .get<Customer>(this._json_getCusomerByPhoneNumberUrl + "/" + phoneNumber)
            .pipe(
                catchError(this.handleError)
            );
    }

    public registerCustomer(customer: Customer): Observable<Customer> {
        //return this.http.post<Customer>(this.registerCustomerUrl, customer); 
        return this.http
            //.post<Customer>(this.registerCustomerUrl, customer); 
            .get<Customer>(this._json_registerCustomerResponse); 
    }

    public searchApplications(searchCriteria: SearchApplicationCriteria): Observable<LoanApplication[]> {
        return this.http
           // .post<LoanApplication[]>(this.searchApplicationsUrl, searchCriteria)
            .get<LoanApplication[]>(this._json_searchApplicationsResponse)
            .pipe(
                catchError(this.handleError)
            );
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