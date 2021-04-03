import { Injectable } from '@angular/core';
import { IndentRequestList } from './mock-data';

@Injectable() 
export class RequestDetailsService {
    constructor() {}
    getAllRequests() {
        return IndentRequestList; 
    }
    getRequestById(id: number) {
        return IndentRequestList.find(x=> x.reqCode === id);
    }
}