import { Injectable } from '@angular/core';
import { IndentRequestList } from './mock-data';

@Injectable() 
export class RequestDetailsService {
    constructor() {}
    getAllRequests() {
        return IndentRequestList; 
    }
}