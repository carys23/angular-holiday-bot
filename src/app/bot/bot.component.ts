import { Component, OnInit, Input } from '@angular/core';
// import { africaHoliday } from '.a';

declare var myjson: any;
declare var africaHoliday: any;
declare var asiaHoliday: any;
declare var usaHoliday: any;
declare var europeHoliday: any;
declare var antarcticaHoliday: any;
declare var northAmericaHoliday: any;
declare var australiaHoliday: any;
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
  aus = australiaHoliday;
  usa = usaHoliday;
  eur = europeHoliday;
  ant = antarcticaHoliday;
  nAmerca = northAmericaHoliday;
  isButtonVisible = true;
  africaButton = true;
  asiaButton = true;
  ausButton  = true;
  nAButton  = true;
  antButton  = true;
  eurButton  = true;
  usaButton = true;

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

  ausClick(){
    this.aus
    return this.aus
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
