import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { logging } from 'protractor';

import { CompLogInComponent } from './comp-log-in/comp-log-in.component';
import { UsuarioDetailComponent } from './usuarios/usuario-detail/usuario-detail.component';
import { CompHeaderComponent } from './comp-header/comp-header.component';
import { NewTweetComponent } from './tweets/new-tweet/new-tweet.component';

const appRoutes: Routes = [
    { path: '', component: CompLogInComponent },
    { path: 'UserDetail', component: CompHeaderComponent, children: [
      { path: '', component: CompHeaderComponent},
    ]},
    { path: 'NewTweet', component: NewTweetComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
