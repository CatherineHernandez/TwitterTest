import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet.module';


@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  @Input() tweets: Tweet[];

  constructor() { }

  ngOnInit() {
  }

}
