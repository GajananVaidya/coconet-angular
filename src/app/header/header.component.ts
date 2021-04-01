import { Component } from '@angular/core';
import { AuthService } from '../service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authSvc: AuthService) { }
  logout() {
    this.authSvc.logout();
  }
}
