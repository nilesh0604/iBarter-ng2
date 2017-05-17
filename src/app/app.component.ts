import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, UserService]
})
export class AppComponent {
  title = 'app works fine!';
}
