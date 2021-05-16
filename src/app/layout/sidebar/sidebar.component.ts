import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard-main', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'profile', title: 'Profile', icon: 'person', class: '' },
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
    path_name_last: string
    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.path_name_last = location.href.substring(location.href.lastIndexOf('/') + 1)
        
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
