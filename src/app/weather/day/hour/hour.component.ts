import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from '@ngrx/store';
import { Subject } from 'rxjs';
import * as fromApp from '../../../store/reducers/app.reducers';
import { takeUntil } from 'rxjs/operators';
import { DayModel, HourModel } from '../../../shared/models/day.model';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss']
})
export class HourComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  hour: HourModel;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    const weatherState = this.store.select('weather');
    weatherState
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((weatherState) => {
      this.hour = weatherState.hour;
    });
  }

  /**
   * Unsubscribe to all subscriptions
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getHour() {

  }
}
