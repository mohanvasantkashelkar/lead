export type Category = {
    categoryType : string
    categoryName : string
}

export type CategoryList ={
    categories :  Category[]
}

export type Loan = {
    accountName: string,
    accountNumber: number,
    bic: string,
    iban: string,
    currencyCode: string,
    routingNumber: string
}