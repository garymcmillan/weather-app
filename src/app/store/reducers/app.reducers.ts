import * as WeatherReducer from './weather.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
    weather: WeatherReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
    weather: WeatherReducer.weatherReducer,
};