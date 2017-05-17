import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

	isAutheticated;
	

  constructor(private _userService: UserService, private route:Router) { }
    


  ngOnInit() {
  	this.isAutheticated = true;
  }

  isThisLoginPage() {
  	if(this.route.url === '/login'){
  		return true;
  	}
  	return false;
  }

}
