import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompHeaderComponent } from './comp-header/comp-header.component';
import { UsuarioDetailComponent } from './usuarios/usuario-detail/usuario-detail.component';
import { CompLogInComponent } from './comp-log-in/comp-log-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetsListComponent } from './tweets/tweets-list/tweets-list.component';
import { TweetDetailComponent } from './tweets/tweet-detail/tweet-detail.component';
import { NewTweetComponent } from './tweets/new-tweet/new-tweet.component';
import { GruposComponent } from './grupos/grupos.component';
import { TweetService } from './tweets/tweets.service';
import { UsuarioComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuarios.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GrupoService } from './grupos/grupos.service';
import { NewGrupoComponent } from './grupos/new-grupo/new-grupo.component';
import { ListGroupComponent } from './grupos/list-group/list-group.component';
import { DetailGrupoComponent } from './grupos/detail-grupo/detail-grupo.component';
import { LogInService } from './comp-log-in/log-in.service';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    CompHeaderComponent,
    UsuarioDetailComponent,
    CompLogInComponent,
    TweetsComponent,
    TweetsListComponent,
    TweetDetailComponent,
    NewTweetComponent,
    GruposComponent,
    UsuarioComponent,
    NewGrupoComponent,
    ListGroupComponent,
    DetailGrupoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    TweetService,
    UsuarioService,
    GrupoService,
    LogInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
