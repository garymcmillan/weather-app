import {Action} from '@ngrx/store';
import { DayModel, HourModel } from 'src/app/shared/models/forecast.model';
import {ForecastModel} from '../../shared/models/forecast.model';

export const GET_FILES = 'GET_FORCAST';
export const SET_FILES = 'SET_FORECAST';
export const SET_DAY = 'SET_DAY';
export const SET_HOUR = 'SET_HOUR';

export class GetForecast implements  Action {
    readonly  type = 'GET_FORCAST';

    constructor(public payload: {city: string, country: string}) {}
}

export class SetForecast implements Action {
    readonly type = 'SET_FORECAST';

    constructor(public payload: ForecastModel) {}
}

export class SetDay implements Action {
    readonly type = 'SET_DAY';

    constructor(public payload: DayModel) {}
}

export class SetHour implements Action {
    readonly type = 'SET_HOUR';

    constructor(public payload: HourModel) {}
}

export type WeatherActions =
    GetForecast |
    SetForecast |
    SetDay |
    SetHour;
