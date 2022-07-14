import { Component, OnInit, Input } from '@angular/core';
// import { africaHoliday } from '.a';

declare var myjson: any;
declare var africaHoliday: any;

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})

export class BotComponent implements OnInit {
  data = myjson;
  title = 'hoildays are here';
  africa = africaHoliday;
  

  constructor() { }

  ngOnInit(): void {
    // let holidayList = myjson

  
  
    // this.data = 'testing';
  
  }
  

}
