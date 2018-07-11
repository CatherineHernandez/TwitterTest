import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { FakeTwitterClient } from "../Client/fake-twitter.client";
import { map } from 'rxjs/operators';

@Injectable()
export class LogInService {
    constructor(private _http:Http){}

    LogIn(username: string,password:string ){
        let params = new URLSearchParams();
        params.set('username',username);
        params.set('password', password);
        params.set('grant_type', 'password');

        let ObsevableAny = this._http.post(FakeTwitterClient.URL_LOGIN(), String(params),FakeTwitterClient.OPTIONS())
        .pipe(
            map(
                (response:Response) => response
            )
        );
        return ObsevableAny;
    }
}