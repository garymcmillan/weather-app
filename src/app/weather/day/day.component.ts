import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import { Subject } from 'rxjs';
import * as fromApp from '../../store/reducers/app.reducers';
import { takeUntil } from 'rxjs/operators';
import { DayModel, HourModel } from '../../shared/models/day.model';
import * as WeatherAction from '../../store/actions/weather.actions';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  day: DayModel;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    const weatherState = this.store.select('weather');
    weatherState
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((weatherState) => {
      this.day = weatherState.day;
    });
  }

  /**
   * Unsubscribe to all subscriptions
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  selectHour(hour: HourModel) {
    this.store.dispatch(new WeatherAction.SetHour(hour));
  }

}
