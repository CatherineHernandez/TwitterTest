import { Component, OnInit } from '@angular/core';
import { TweetService } from './tweets.service';
import { Tweet } from './tweet.module';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweetService: TweetService = new TweetService();
  tweets: Tweet[]; 
  receiveTweet: Tweet;


  constructor() { }

  ngOnInit() {

    this.tweets = this.tweetService.getTweets();
  }

  ReceiveTweet($event) {
    
    this.receiveTweet = $event;
  }





}
