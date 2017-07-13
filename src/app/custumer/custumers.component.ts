import { Component, OnInit } from '@angular/core';

import { CustumersService } from "app/custumer/custumers.service";
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'app-custumers',
    templateUrl: './custumers.component.html',
})
export class CustumersComponent implements OnInit {

    custumers: Observable<any[]>;

    constructor(private custumersService : CustumersService) {

     }

    ngOnInit() { 
        this.custumers = this.custumersService.getCustumers();
    }
}