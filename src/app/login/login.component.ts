import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.sass', './login.component.sass']
})
export class LoginComponent implements OnInit {
  model = new User(0, '', '');
  returnUrl: string;
  subscription: any;
  
  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    const controlName = new FormControl(this.model.name, Validators.required);
    const controlPassword = new FormControl(this.model.password, Validators.required);

    if (controlName.errors || controlPassword.errors) { return; }
    if (!this.authenticationService.login(this.model)) { return; }

    this.router.navigate([this.returnUrl]);
  }
}
