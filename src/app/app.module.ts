import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompHeaderComponent } from './comp-header/comp-header.component';
import { UsuarioDetailComponent } from './usuarios/usuario-detail/usuario-detail.component';
import { CompLogInComponent } from './comp-log-in/comp-log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetsListComponent } from './tweets/tweets-list/tweets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompHeaderComponent,
    UsuarioDetailComponent,
    CompLogInComponent,
    TweetsComponent,
    TweetsListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
