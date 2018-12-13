import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import { Subject } from 'rxjs';
import * as fromApp from '../store/reducers/app.reducers';
import { takeUntil } from 'rxjs/operators';
import { DayModel } from '../shared/models/forecast.model';
import * as WeatherAction from '../store/actions/weather.actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  forecast;
  days: DayModel[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    const weatherSubscription = this.store.select('weather');
      weatherSubscription
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((weatherState) => {
      this.forecast = weatherState.forecast;
      if (this.forecast) {
        this.days = this.groupDays(this.forecast);
      }
    });
  }

  /**
   * Unsubscribe to all subscriptions
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Ensure that we only display the 5 day forecast
   */
  groupDays(forecast) {

    // this gives an object with dates as keys
    const days = forecast.list.reduce((day, hour) => {
      const date = hour.dt_txt.split(' ')[0];
      if (!day[date]) {
        day[date] = [];
      }
      day[date].push(hour);
      return day;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(days).map((date) => {
      return {
        date,
        hours: days[date]
      };
    });

    return groupArrays;
  }

  selectDay(day) {
    this.store.dispatch(new WeatherAction.SetDay(day));
  }
}
