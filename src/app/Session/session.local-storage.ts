export class SessionManager{

    private static TOKEN_KEY: string = "towa.fake_tweeter.token"

    public static store(content:Object){
        console.log(content)
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(content));
    }

    private static retrieve(){
        let storedToken:string = localStorage.getItem(this.TOKEN_KEY);
        if(!storedToken) throw 'no token found';

        return storedToken;
    }
 
    private static getToken(){
        let token: string;
        let currentTime:number = (new Date()).getTime();
        try {
            let storedToken = JSON.parse(JSON.parse(this.retrieve()));

            token = storedToken.access_token;
        }
        catch(err){
            console.error(err);
        }
        return token;
    }
}