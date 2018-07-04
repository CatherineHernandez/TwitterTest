import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompHeaderComponent } from './comp-header/comp-header.component';
import { UsuarioDetailComponent } from './usuarios/usuario-detail/usuario-detail.component';
import { CompLogInComponent } from './comp-log-in/comp-log-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompHeaderComponent,
    UsuarioDetailComponent,
    CompLogInComponent
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
