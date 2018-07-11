import { RequestOptions, Headers } from '@angular/http';
export class FakeTwitterClient {
    private static URL: string ="http://192.168.10.37/Fake%20Twitter/"

    private static OAUTH2 = "oauth2/token"

    private static RESOURCE_PEOPLE = "api/people"
    private static RESOURCE_GROUPS = "api/groups"
    private static RESOURCE_TWEETS = "api/tweets"

    private static headers: Headers = new Headers({
        'Accept': 'application/json',
        'Accept-Language': 'en-gb',
        'Audience': 'Any',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache'
    });
    
    public static URL_LOGIN(){
        return this.URL + this.OAUTH2;
    }

    public static URL_PEOPLE(){
        return this.URL + this.RESOURCE_PEOPLE;
    }

    public static URL_GROUPS(){
        return this.URL + this.RESOURCE_GROUPS;
    }

    public static URL_TWEETS(){
        return this.URL + this.RESOURCE_TWEETS;
    }

    public static OPTIONS(){
        return new RequestOptions({ headers: this.headers });
    }
}