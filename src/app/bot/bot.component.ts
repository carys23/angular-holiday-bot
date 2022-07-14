import { Component, OnInit, Input } from '@angular/core';
// import { africaHoliday } from '.a';

declare var myjson: any;
declare var africaHoliday: any;
declare var asiaHoliday: any;

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})

export class BotComponent implements OnInit {
  data = myjson;
  enter: any;
  continents: any;
  africa = africaHoliday;
  asia = asiaHoliday;
  isButtonVisible = true;
  africaButton = true;
  asiaButton = true;
  // msg:string;

  constructor() { }

  africaClick(){
    this.africa
    
    return this.africa
  }
  asiaClick(){
    this.asia
    return this.asia
  }



  clickEvent()
  {
    this.enter= true;
    return this.enter
  }

  ngOnInit(): void {
    // let holidayList = myjson

    
  
    // this.data = 'testing';
  
  }
  

}
