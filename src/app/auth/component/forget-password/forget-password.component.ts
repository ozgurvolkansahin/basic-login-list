import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    authService.informationMessage
    .next('Şifrenizi sıfırlamak istediğiniz E-Mail adresini girin');
    this.forgetPasswordForm = this.fb.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    });
  }

  formSubmitted: boolean;
  forgetPasswordForm: FormGroup;

  ngOnInit(): void {
  }

  askForNewPasswordMail() {
    if (this.forgetPasswordForm.valid) {
      this.formSubmitted = true;
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 2000);
    }

  }
}
