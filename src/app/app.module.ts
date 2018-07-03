import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompHeaderComponent } from './comp-header/comp-header.component';
import { UsuarioDetailComponent } from './usuarios/usuario-detail/usuario-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompHeaderComponent,
    UsuarioDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
