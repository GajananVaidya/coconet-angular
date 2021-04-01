import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coconet-angular';
  isLoggedIn$: Observable<boolean>;
  constructor(public authSvc: AuthService) {}
  ngOnInit() {
    this.isLoggedIn$ = this.authSvc.isLoggedIn;
    this.isLoggedIn$.subscribe(x=> console.log(x));
  }
}
