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
  login = true;
  hideBtn: any ='welcome';
  continents: any;
  africa = africaHoliday;
  asia = asiaHoliday;
  aus = australiaHoliday;
  usa = usaHoliday;
  eur = europeHoliday;
  ant = antarcticaHoliday;
  nAmerica = northAmericaHoliday;
  isDisabled = true;
  isButtonVisible = true;
  africaButton = true;
  asiaButton = true;
  ausButton  = true;
  nAButton  = true;
  antButton  = true;
  eurButton  = true;
  usaButton = true;
  textShow = true;
  showAfrica = true;
  // clicked = false;
  asiaVisible = true;
  countryButton = true;
  public show: boolean = false;
  public buttonName:any = 'Guest';
  public showAsia: boolean = false;
  public asiaBtn:any = 'Guest';
  public showCountries: boolean = false;
  public countries:any = 'Guest';

  
  list = [this.ausButton, this.usaButton, this.africaButton, this.nAButton, this.antButton, this.asiaButton, this.eurButton, this.usaButton ]
  
 

  // msg:string;

  constructor() { }
  
  countryClicked(){
    this.showCountries = !this.showCountries
    this.hideBtn

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showCountries) 
      
      this.countries = "Hide";
      
    else
      this.countries = "Show";
  }



  loginClicked() {
    
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
    this.hideBtn,  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  asiaClicked() {
    this.showAsia = !this.showAsia;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showAsia)  
      this.asiaBtn = "Hide";
    else
      this.asiaBtn = "Show";
  }

  deleteClick(){
    this.hideBtn
  }




  africaClick(){
    this.africa
    this.hideBtn
    // this.showAfrica = true
    
  }
  asiaClick(){
    this.asia
    this.hideBtn
    // this.asiaButton = false

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
    this.nAmerica
    this.hideBtn
    this.nAButton = false
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
