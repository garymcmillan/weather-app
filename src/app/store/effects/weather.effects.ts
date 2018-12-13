import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import {of} from 'rxjs';
import * as FilesActions from '../actions/weather.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../reducers/app.reducers';
import {Router} from '@angular/router';

@Injectable()
export class WeatherEffects {
    @Effect () getFolders = this.actions$.pipe(
            filter(action => action.type === FilesActions.GET_FILES),
            map((action: FilesActions.GetForecast) => {
                return action.payload;
            }),
            switchMap((payload) => {
                const token = 'da709815cfbe46651cee6a513769621d';
                return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='
                 + payload.city +
                 ',' + payload.country +
                '&mode=json&appid=' + token)
                .toPromise()
                .then((res) => {
                    return {
                        response: res,
                        location: payload
                    };
                })
                .catch(error => of(error).pipe(
                    map((errors) => {
                        return errors;
                    }))
                );
            }),
            map(
                (res: any) => {
                    const url = '' + res.location.country + '/' + res.location.city;
                    this.router.navigate([url]);
                    return {type: FilesActions.SET_FILES, payload: res.response};
                }
            )
        );

    constructor(
        private actions$: Actions,
        private store: Store<fromApp.AppState>,
        private http: HttpClient,
        private router: Router) {}
}
