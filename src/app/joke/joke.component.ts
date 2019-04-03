import { Component, OnInit } from '@angular/core';
import {JokeTellerService} from '../model/joke-teller.service';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke: string;

  constructor(private dad: JokeTellerService) {
  this.updateJoke();
  }
   ngOnInit() {

  }

  updateJoke(): void {
    this.dad.tellJoke().subscribe(res => {
      this.joke = res.joke;
    });
    }
  }


