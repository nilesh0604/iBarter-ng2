import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    LeftnavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductListComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      {path: '', redirectTo: "/home", pathMatch: 'full'},
      {path:'login', component: LoginRegisterComponent},
      {path:'home', component: HomeComponent},
      {path:'productDetails/:id', component: ProductDetailsComponent},
      {path:'productList/:category', component: ProductListComponent}
      /*{path: '**', redirectTo: 'login', pathMatch: 'full'}*/
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
