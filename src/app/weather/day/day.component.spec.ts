import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayComponent } from './day.component';
import { DotwPipe } from '../../shared/pipes/dotw.pipe';
import { HourComponent } from './hour/hour.component';
import { GetHourPipe } from '../../shared/pipes/get-hour.pipe';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from '../../store/reducers/app.reducers';
import {WeatherEffects} from '../../store/effects/weather.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { WeatherComponent } from '../weather.component';

describe('DayComponent', () => {
  let component: DayComponent;
  let fixture: ComponentFixture<DayComponent>;

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
        declarations: [ DayComponent, HourComponent, WeatherComponent, DotwPipe, GetHourPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
