import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/services/auth.service';


@Component({
  selector: 'ac-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnDestroy {

  loginForm: FormGroup;
  loginSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({ username: '', password: '' });
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  onSubmit(value: any) {
    this.loginSubscription = this.authService.login(value.username, value.password).pipe(
      tap(() => this.router.navigate(['/blog']))
    ).subscribe();
  }

}
