import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  retweet: boolean;
  like: boolean;
  id: number;

  tweets = [
    {
      id: 1,
      name: "Brenda Martins",
      retweeted: false,
      user: "@brenda_martins",
      time: "07 de Jan",
      description: "Hoje o dia está chuvoso",
      image: false,
      commenting: 40,
      retweet: 12,
      likes: 10
    },

    {
      id: 2,
      name: "Brenda Martins",
      user: "@brenda_martins",
      time: "07 de Jan",
      description: "Hoje o dia está chuvoso",
      image: true,
      commenting: 40,
      retweet: 12,
      likes: 10
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  retweetar(id) {
    this.retweet = !this.retweet;
    this.id = id;
  }

  liker(id) {
    this.like = !this.like;
    this.id = id;
  }

}
