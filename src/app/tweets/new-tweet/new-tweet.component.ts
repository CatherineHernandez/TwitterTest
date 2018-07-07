import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet.module';
import { TweetService } from '../tweets.service';
import { FormBuilder, FormGroup, Validators,FormControlName,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit {
  NewTweetForm: FormGroup;
  isValid: boolean = true;
  
   
  tweet:Tweet = new Tweet(
    '',
    '',
    '',
    []
  );
  

  //investigar
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  Fecha: Date;
   

  constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addNewImage(){
    this.tweet.imagesPath.push('');
  }

  addNewTweet(){
    this.Fecha = new Date();
    this.tweet.Date = this.Fecha.toLocaleString();
    this.tweet.Autor = '@Autor';
    this.tweetService.addTweet( 
      this.tweet
  );

  this.router.navigate(['/UserDetail']);

  }

  onTextChange(text){
    if(text.length>120){
      this.isValid = false
    }else{
      this.isValid = true
    }
  }
  get textValid() { return this.isValid }

}
