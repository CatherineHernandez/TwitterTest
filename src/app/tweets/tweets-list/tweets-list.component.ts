import { Component, OnInit, Input } from '@angular/core';
import { TweetService } from '../tweets.service';


@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  @Input() tweetService: TweetService;

  constructor() { }

  ngOnInit() {
  }

}
