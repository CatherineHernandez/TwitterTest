import { Component, OnInit, Input } from '@angular/core';
import {  Tweet } from '../tweet.module';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {
  @Input() tweetReceiveParent: Tweet;
  Like: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.tweetReceiveParent);
  }

  AddLike() {
    console.log(this.Like);
    return this.Like = !this.Like;
  }

}
