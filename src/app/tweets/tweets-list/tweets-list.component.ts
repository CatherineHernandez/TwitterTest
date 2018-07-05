import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Tweet } from '../tweet.module';


@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent{

  @Input() tweets: Tweet[];
  @Output() SelectedTweet = new EventEmitter<Tweet>();

  constructor() { }

  onSelectedTweet(tweet: Tweet){
    this.SelectedTweet.emit(tweet);
  }


}
