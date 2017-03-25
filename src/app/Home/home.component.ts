import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-main',
    template: `<router-outlet></router-outlet>`
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}