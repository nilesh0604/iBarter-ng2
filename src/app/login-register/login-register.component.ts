import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

	currentTab = 'login';

  constructor() { }

  ngOnInit() {
  	

  }

  autheticate(formVal:any){
  	console.log(formVal);
  }

  changeTab(tab){
  	this.currentTab = tab;
  }

}
