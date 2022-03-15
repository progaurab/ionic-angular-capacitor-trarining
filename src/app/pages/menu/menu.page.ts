import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 
  pages = [
    {
      title: 'Dashboard',
      url: '/menu/first/tabs/tab1',
      icon  : 'layers-outline'
    },
    {
      title: 'Profile',
      url: '/menu/first/tabs/tab2',
      icon  : 'person-outline'
    }
  ];
 
  constructor() { }
 
  ngOnInit() { }
 
}