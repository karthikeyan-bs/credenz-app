import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplicationAggregate } from '../models/loanApplication.model';
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: 'application-search-results',
    templateUrl: './application-search-results.component.html',
    styleUrls: ['./application-search-results.component.scss']
})
export class ApplicationSearchResultsComponent implements OnInit {

    //public displayedColumns = ['applicationId', 'patientId', 'customerName', 'phoneNumber', 'aadhaarNumber', 'appDate', "appStatus"];
    public displayedColumns = ['application.applicationId', 
    'customer.identificationDetails.patientId', 'customer.name.firstName', 
    'customer.identificationDetails.phoneNumber', 'customer.identificationDetails.aadhaarNumber', 
    'loanApplication.appDate', "loanApplication.appStatus", "action"];

    loanApplicationAggregates: LoanApplicationAggregate[];

    dataSource: MatTableDataSource<LoanApplicationAggregate> = new MatTableDataSource<LoanApplicationAggregate>();

    constructor(private router: Router, private activatedroute: ActivatedRoute) {
    }

    ngOnInit() {
        this.loanApplicationAggregates = <LoanApplicationAggregate[]>history.state.data
        this.dataSource.data = this.loanApplicationAggregates;
    }
}