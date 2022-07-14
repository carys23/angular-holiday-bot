import { Component, OnInit, Input } from '@angular/core';
// import { africaHoliday } from '.a';

declare const africaHoliday: any;

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})

export class BotComponent implements OnInit {
  // data = africaHoliday;
  title = 'hoildays are here';
  

  constructor() { }

  ngOnInit(): void {
    // this.data = 'testing';
  
  }
  

}
