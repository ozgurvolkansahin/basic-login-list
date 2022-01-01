import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../interface/Login';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginSuccessful = false;
  loginFormSubmitted = false;
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {
      authService.informationMessage
      .next(this.informationMessage);

      this.loginForm = this.fb.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }
  informationMessage = 'Google Maps’e Hosgeldiniz.';

  ngOnInit(): void {
  }

  login() {
    // this.authService.userAuthenticated.next(false);
    if (this.loginForm.valid) {
      this.loginFormSubmitted = true;
      const loginObject: Login = this.loginForm.value;
      // TODO: add login logic
      if (loginObject.username === 'mikro@mikro.com.tr' && loginObject.password === '123456') {
        this.loginSuccessful = true;
        this.authService.updateAuthenticatedStatus(true);
        setTimeout(() => {
          this.router.navigate(['/pages/dashboard/list']);
        }, 1000);
      } else {
        this.loginSuccessful = false;
      }
    }
  }
}
