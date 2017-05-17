import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

	isAutheticated;

	

  constructor(private _userService: UserService) { }
    


  ngOnInit() {
  	
  }

}
