import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  error: string = null;
  authForm: NgForm;
  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  authenicate(form: NgForm) {
    console.log(
      'Auth Form value' + form.value.email + ' and ' + form.value.password
    );
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
      //Sign in

      this.authService.login(email, password).subscribe(
        (res) => {
          console.log('Login Response is ' + JSON.stringify(res));
          this.router.navigate(['/recipes']);
        },
        (errorMessage) => {
          console.log(
            'Login Error from Service: ' + JSON.stringify(errorMessage)
          );

          this.error = errorMessage;
          this.showErrorAlert(errorMessage);
        }
      );
    } else {
      //Sign up
      this.authService.signup(email, password).subscribe(
        (res) => {
          console.log('Response is ' + JSON.stringify(res));
          this.router.navigate(['/recipes']);
        },
        (errorMessage) => {
          console.log(
            'Auth Error from Service: ' + JSON.stringify(errorMessage)
          );

          this.error = errorMessage;
          this.showErrorAlert(errorMessage);
        }
      );
    }

    form.reset();
  }
  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(messge: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
  }
}
