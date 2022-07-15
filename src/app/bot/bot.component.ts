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
declare var hideBtn: any;
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})

export class BotComponent implements OnInit {
  data = myjson;
  enter: any;
  hideBtn: any;
  continents: any;
  africa = africaHoliday;
  asia = asiaHoliday;
  aus = australiaHoliday;
  usa = usaHoliday;
  eur = europeHoliday;
  ant = antarcticaHoliday;
  nAmerica = northAmericaHoliday;
  isButtonVisible = true;
  africaButton = true;
  asiaButton = true;
  ausButton  = true;
  nAButton  = true;
  antButton  = true;
  eurButton  = true;
  usaButton = true;
  disabled = false;
  list = [this.ausButton, this.usaButton, this.africaButton, this.nAButton, this.antButton, this.asiaButton, this.eurButton, this.usaButton ]


  // msg:string;

  constructor() { }

  africaClick(){
    this.africa
    this.hideBtn
    this.africaButton = false
    
  }
  asiaClick(){
    this.asia
    this.hideBtn
    this.asiaButton = false

  }

  ausClick(){
    this.aus
    this.hideBtn
  }

  usaClick(){
    this.usa
    this.hideBtn
  }

  antClick(){
    this.ant
    this.hideBtn
  }

  nAmericaClick(){
    this.ant
    this.hideBtn
  }

  eurClick(){
    this.eur
    this.hideBtn
  }



  clickEvent()
  {
    this.enter= true;
  }

  ngOnInit(): void {
    // let holidayList = myjson

    
  
    // this.data = 'testing';
  
  }
  

}
