import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard-main', title: 'Dashboard', icon: 'dashboard', class: 'active' },
    { path: 'profile', title: 'User Profile', icon: 'person', class: '' },
    { path: 'company-info', title: 'Company', icon: 'content_paste', class: '' },
    { path: 'product', title: 'Product List', icon: 'bubble_chart', class: '' }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
