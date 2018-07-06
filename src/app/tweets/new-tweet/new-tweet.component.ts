import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet.module';
import { TweetService } from '../tweets.service';
import { FormBuilder, FormGroup, Validators,FormControlName,FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit {
  NewTweetForm: FormGroup;
  isValid: boolean;
  newTweet = {
    text: '',
    image: ''
  }

  Fecha: Date;
   

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.NewTweetForm = this.formBuilder.group({
    Text: [this.newTweet.text, [Validators.required, Validators.maxLength(120)]],
    Images: ['', [Validators.required]]
    })

    this.NewTweetForm = new FormGroup({
      'Text': new FormControl(this.newTweet.text, [
        Validators.required,
        Validators.maxLength(120)
      ]),
      'Images': new FormControl(this.newTweet.image, [
        Validators.required,
       // Validators.pattern('^(http[s]?:\\/\\/){0,1}(www\\.){0,1}[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,5}[\\.]{0,1}$/*')
      ]),
      
    });

    this.Fecha.toLocaleString();

  }

  onSubmit(){
    this.isValid = this.NewTweetForm.valid;
    this.Fecha = new Date();
/*
    addTweet( new Tweet(
      this.NewTweetForm.value.Text,
      this.Fecha.toLocaleString(),
      '@usuarionuevo',
      this.NewTweetForm.value.Images  
    )
    
  );
*/
  }

  get textValid() { return this.NewTweetForm.get('Text').hasError('maxlength'); }

}
