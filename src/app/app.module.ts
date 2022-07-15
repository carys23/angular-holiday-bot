import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotComponent } from './bot/bot.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {HttpParams} from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HoildaysComponent } from './hoildays/hoildays.component';



@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    HoildaysComponent,

  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


const routes: Routes = [
  { path: 'home', component: BotComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

// RouterModule.forRoot(routes),

