import { Component, OnInit } from '@angular/core';
import { AppCommmonComponent } from '../app.common';

@Component({
    moduleId: module.id,
    selector: 'navmenu-component',
    templateUrl: 'navmenu.component.html'
})
export class NavMenuComponent implements OnInit {
    route = this.common.URL;
    constructor(private common:AppCommmonComponent) { }

    ngOnInit() { }
}