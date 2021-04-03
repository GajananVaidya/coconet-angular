export interface IndentRequest {
    reqCode: number,
    empName: string,
    empCode: string,
    department: string,
    createdDate: string,
    createdTime: string,
    status: string,
    reasonOfReq: string,
    natureOfReq: string,
    tat: string,
    selected: boolean,
    productList: Product[]
}

export interface Product {
    productName: string,
    uom: string,
    indentQty: number,
    doc: string,
    estimateRate: number,
    estimatePrice: number
}