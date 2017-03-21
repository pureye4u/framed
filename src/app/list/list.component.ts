import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log(window['data'].articles[1].images[0]);
    }

}
