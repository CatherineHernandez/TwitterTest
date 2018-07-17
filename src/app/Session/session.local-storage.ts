export class SessionManager{
    

    private static TOKEN_KEY: string = "towa.fake_tweeter.token"

    public static store(content:string){
        let currentTime:number = (new Date()).getTime();
        let jsonToken = JSON.parse(content);
        jsonToken.expires_in = Number(jsonToken.expires_in) * 1000 + currentTime;
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(jsonToken));
    }

    private static retrieve(){
        let storedToken:string = localStorage.getItem(this.TOKEN_KEY);
        if(!storedToken) throw 'no token found';
        return storedToken;
    }
 
    public static getToken(){
        let token: string;
        let currentTime:number = (new Date()).getTime();
        try {
            let storedToken = JSON.parse(this.retrieve());
            if(
                storedToken.expires_in < currentTime
            ){
                throw 'invalid token found';
            }
            token = storedToken.access_token;
        }
        catch(err){
            console.error(err);
        }
        return token;
    }
}