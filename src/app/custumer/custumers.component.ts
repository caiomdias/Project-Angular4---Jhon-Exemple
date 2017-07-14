import { Component, OnInit } from '@angular/core';

import { CustumersService } from 'app/custumer/custumers.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-custumers',
    templateUrl: './custumers.component.html',
})
export class CustumersComponent implements OnInit {

    custumers: any[];

    constructor(private custumersService: CustumersService) {

    }

    ngOnInit() {

        // RxJs Observable version
        this.custumersService.getCustumersRxJs()
            .subscribe(
            // its worked
            (custumers) => this.custumers = custumers,
            // error
            (err: any) => { console.log(err); }
            );

        // straight up promise to array
        // this.custumersService.getCustumers()
        // .then((custumers) => this.custumers = custumers )
        // .catch ( (err: any) => {
        //     console.log(err);
        //     return Observable.of(true);
        // });

        // Promise<any[]> version
        // this.custumers = this.custumersService.getCustumers()
        // .catch ( (err:any) =>{
        //     console.log(err)
        //     return Observable.of(true);
        // });

        // RxJs Observable version
        //  this.custumers = this.custumersService.getCustumersRxJs()
        // .catch ( (err:any) =>{
        //     console.log(err)
        //     return Observable.of(true);
        // });
    }
}