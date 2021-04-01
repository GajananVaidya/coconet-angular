import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginFormComponent {
  constructor(private authSvc: AuthService, public router: Router) { }
  form: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.form.valid) {
      this.authSvc.login(this.form.value);
      this.router.navigateByUrl('indent-requests');
    }
  }
}
