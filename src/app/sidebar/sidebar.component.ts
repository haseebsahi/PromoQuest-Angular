import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',           class: '' }, 
    { path: '/maps',          title: 'Drop',              icon:'nc-pin-3',          class: '' },
    { path: '/drop',          title: 'View Added Promos', icon:'nc-favourite-28',   class: ''},
    { path: '#',              title: 'Players',           icon:'',                  class: ''},
    { path: '/users',         title: 'Users',             icon:'nc-single-02',      class: ''},
    { path: '/agencys',              title: 'Agencies',          icon:'nc-single-02',  class: ''},
    { path: '#',      title: 'Packages',          icon:'nc-grid-45',        class: ''},
    { path: '#',      title: 'Settings',          icon:'nc-settings-gear-64',  class: ''}
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
