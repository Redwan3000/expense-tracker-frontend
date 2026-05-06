export type Account = {

    accountId: number;
    userId:number;
    currency: string;
    accountType: string;
    paymentMethod: string;
    accountNumber: string;
    nomineeName: string;
    providerName: string;
    currentBalance: number;
    lastBalanceUpdatedAt: string;
    accountHolder: string;
    createdAt: string;
    updatedAt: string;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "PENDING"

}