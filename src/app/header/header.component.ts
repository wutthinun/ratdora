import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public toggleActive = 0;

  constructor() {}

  ngOnInit() {}

  toggleNav() {
    if (this.toggleActive === 0) {
      this.toggleActive = 1;
    } else {
      this.toggleActive = 0;
    }
    // let nav = document.getElementById('nav-menu');
    // let className = nav.getAttribute('class');
    // if (className === 'nav-right nav-menu') {
    //     nav.className = 'nav-right nav-menu is-active';
    // } else {
    //     nav.className = 'nav-right nav-menu';
    // }
  }
}
