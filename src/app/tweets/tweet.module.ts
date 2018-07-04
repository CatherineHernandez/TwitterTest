import {  Usuario } from '../usuarios/usuario.model';

export class Tweet {
  public Text: string;
  public Date: string;
  public Autor: string; //deberia de ser de tipo usuario
  public imagesPath: string[];
  //public likes: Likes; //todavia no se aplican los Likes
  //public replies: Replies; //todavia no se aplican Replies

  constructor(
    Text: string,
    Date: string,
    Autor: string,
    imagesPath: string[]
  ) {
    this.Text = Text;
    this.Date = Date;
    this.Autor = Autor;
    this.imagesPath = imagesPath;
  }

}
