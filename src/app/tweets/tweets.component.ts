import { Component, OnInit } from '@angular/core';
import { TweetService } from './tweets.service';
import { Tweet } from './tweet.module';
import { TweetsListComponent } from './tweets-list/tweets-list.component';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweet: Tweet;
  tweetService: TweetService = new TweetService();

  constructor() { }

  ngOnInit() {
    this.tweet = this.tweetService.getTweet(0);
  }

}
