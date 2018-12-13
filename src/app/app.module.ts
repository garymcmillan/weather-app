import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {reducers} from './store/reducers/app.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherEffects} from './store/effects/weather.effects';
import { SearchLocationComponent } from './search-location/search-location.component';
import { WeatherComponent } from './weather/weather.component';
import { DayComponent } from './weather/day/day.component';
import { HourComponent } from './weather/day/hour/hour.component';
import { DotwPipe } from './shared/pipes/dotw.pipe';
import { GetHourPipe } from './shared/pipes/get-hour.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchLocationComponent,
    WeatherComponent,
    DayComponent,
    HourComponent,
    DotwPipe,
    GetHourPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument({
        maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
