import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
   providedIn: "root" 
})
export class HttpService {

    constructor(private http: HttpClient) {}
    
    getClientIP() {
        return of(null);
        // return this.http.get('https://ipapi.co/json/').pipe(map(res => res))
    }
}