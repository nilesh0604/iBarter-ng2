import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, UserService, AuthService]
})
export class AppComponent {
  title = 'app works fine!';
}
