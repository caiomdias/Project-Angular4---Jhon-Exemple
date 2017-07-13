import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-custumer',
    templateUrl: './custumer.component.html',
})
export class CustumerComponent implements OnInit {

     myColour = 'red';

    @Input() custumer = { id: Number, name: String };

    constructor() { }

    ngOnInit() { }
}