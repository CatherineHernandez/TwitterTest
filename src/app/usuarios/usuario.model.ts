export class Usuario {
    public Id: number;
    public Name: String;
    public UserName: String;
    public Email: String;
    public Password: String;
    public ImagePath: String;

    constructor(
        Id: number,
        Name: String,
        UserName: String,
        Email: String,
        Password: String,
        ImagePath: String
    ){
        this.Id = Id;
        this.Name = Name;
        this.UserName = UserName;
        this.Email = Email;
        this.Password = Password;
        this.ImagePath = ImagePath;
    }
}