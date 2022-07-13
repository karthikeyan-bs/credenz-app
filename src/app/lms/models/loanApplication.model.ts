import { Customer } from "./customer-models";

export class LoanApplication {
    customerId: number;
    applicationId: number;
    eKycStatus: EkycStatus;
    milestoneStatus: MilestoneStatus;
    status: LoanApplicationStatus;
    appDate : Date;
}

export class LoanApplicationAggregate {
    applicationId: number;
    loanApplication: LoanApplication;
    customer: Customer
}

export enum EkycStatus {
    SUCCEEDED = "SUCCEEDED",
    FAILED = "FAILED",
}

export enum LoanApplicationStatus {
    PENDING = "PENDING",
    WITHDRAWN = "WITHDRAWN",
    DENIED = "DENIED",
    ORIGINATED = "ORIGINATED"
}

export enum MilestoneStatus {
    EKYC_PENDING = "EKYC_PENDING",
    EKYC_RESPONSE_PENDING = "EKYC_RESPONSE_PENDING",
    LENDER_UNDERWRITING_PENDING = "LENDER_UNDERWRITING_PENDING",
    LENDER_UNDERWRITING_DOCS_VERIFIICATION_PENDING = "LENDER_UNDERWRITING_DOCS_VERIFIICATION_PENDING",
    BANK_ACCOUNT_VALIDATION_PENDING = "BANK_ACCOUNT_VALIDATION_PENDING",
    ESIGN_PENDING = "ESIGN_PENDING",
    PENDING_ORIGINATION = "PENDING_ORIGINATION"
}