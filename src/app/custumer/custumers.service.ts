import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


const URL_CUSTUMER = 'app/costumers.json';

@Injectable()
export class CustumersService {

    constructor(private http:Http){}

    getCustumers(){
        return this.http.get('http://localhost:3000/api/v1/clients/')
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    handleError(err:any){
        console.log(err);
        return Observable.throw(err);
    }

}