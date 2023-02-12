import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomePageComponent},
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroParentComponent},
      {path: '', component: HeroesListComponent},
      {path: 'login', component: LoginPageComponent},
      {path: '**', component: PageNotFoundComponent},
    ]),
  ],
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    PageNotFoundComponent,
    HeroesListComponent,
    CrisisListComponent,
    HomePageComponent,
    LoginPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
