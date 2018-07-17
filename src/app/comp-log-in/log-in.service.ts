import { Injectable, ErrorHandler } from "@angular/core";
import { Http } from "@angular/http";
import { FakeTwitterClient } from "../Client/fake-twitter.client";
import { map, catchError } from 'rxjs/operators';
import { error } from "protractor";
import { Observable, observable, of } from "rxjs";

@Injectable()
export class LogInService {
    constructor(private _http:Http){}

    LogIn(username: string,password:string ){
        let params = new URLSearchParams();
        params.set('username',username);
        params.set('password', password);
        params.set('grant_type', 'password');
        console.log(String(params));
        let ObsevableAny = this._http.post(FakeTwitterClient.URL_LOGIN(), String(params),FakeTwitterClient.OPTIONS_LOGIN())
        .pipe(
            map(
                (response: Response) => response
            ),
            catchError(
                (error: any) => of(error)
            )
        );
        return ObsevableAny;
    }

}