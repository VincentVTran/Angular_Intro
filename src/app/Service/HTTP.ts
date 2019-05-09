import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HTTPService{
    baseURL:string = "http://localhost:8080"
    constructor(private http:HttpClient){
        console.log("loaded");
    }
    
    getData():Observable<any[]> {
        console.log("Worked");
        return this.http.get<any[]>(this.baseURL + "/returnArray");
    }
    
    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
      }
}