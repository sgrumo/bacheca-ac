import { Component } from '@angular/core';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

  isShown = false;

}
