import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchLocationComponent } from './search-location.component';
import { WeatherComponent } from '../weather/weather.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from '../store/reducers/app.reducers';
import {WeatherEffects} from '../store/effects/weather.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { DayComponent } from '../weather/day/day.component';
import { HourComponent } from '../weather/day/hour/hour.component';
import { DotwPipe } from '../shared/pipes/dotw.pipe';
import { GetHourPipe } from '../shared/pipes/get-hour.pipe';

describe('SearchLocationComponent', () => {
  let component: SearchLocationComponent;
  let fixture: ComponentFixture<SearchLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([WeatherEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 5
        })
      ],
      declarations: [ SearchLocationComponent, WeatherComponent, DayComponent, HourComponent, DotwPipe, GetHourPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
