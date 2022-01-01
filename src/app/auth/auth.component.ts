import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.authService.informationMessage.subscribe(res => {
      this.informationMessage = res;
    });
  }
  informationMessage = '';
  ngOnInit(): void {
  }

}
