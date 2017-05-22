import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  authData;
  errorMsg:string;
  returnUrl: string;

	currentTab = 'login';

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _authService: AuthService
        //private alertService: AlertService
        ) { }

  ngOnInit() {
  	// reset login status
        this._authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  autheticate(formVal){
    this._authService.login(formVal)
      .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            //this.alertService.error(error);
            //this.loading = false;
        }
      );
  }


  /*resAuthData => this.authData = resAuthData,
          resAuthError => this.errorMsg = resAuthError*/

  changeTab(tab){
  	this.currentTab = tab;
  }

}


