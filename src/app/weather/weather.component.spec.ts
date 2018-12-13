import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import { Subject } from 'rxjs';
import * as fromApp from '../store/reducers/app.reducers';
import { takeUntil } from 'rxjs/operators';
import { DayModel } from '../shared/models/forecast.model';
import * as WeatherAction from '../store/actions/weather.actions';
import { DotwPipe } from '../shared/pipes/dotw.pipe';
import { DayComponent } from './day/day.component';
import { HourComponent } from './day/hour/hour.component';
import { GetHourPipe } from '../shared/pipes/get-hour.pipe';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from '../store/reducers/app.reducers';
import {WeatherEffects} from '../store/effects/weather.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          AppRoutingModule,
          StoreModule.forRoot(reducers),
          EffectsModule.forRoot([WeatherEffects]),
          StoreDevtoolsModule.instrument({
              maxAge: 5
          })
        ],
      declarations: [ WeatherComponent, DayComponent, HourComponent, DotwPipe, GetHourPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
