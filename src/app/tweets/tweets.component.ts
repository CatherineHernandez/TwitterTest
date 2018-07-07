import { Component, OnInit } from '@angular/core';
import { TweetService } from './tweets.service';
import { Tweet } from './tweet.module';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets: Tweet[]; 
  receiveTweet: Tweet;


  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.tweetService.getTweets().subscribe((tweetsData) => this.tweets = tweetsData);
    //this.tweets = this.tweetService.getTweets();
  }

  ReceiveTweet($event) {
    
    this.receiveTweet = $event;
  }





}
