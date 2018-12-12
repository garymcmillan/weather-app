import * as AppActions from '../actions/weather.actions';
import { DayModel, HourModel } from 'src/app/shared/models/day.model';

export interface State {
    forecast;
    day: DayModel;
    hour: HourModel
}
const initialState = {
    forecast: null,
    day: null,
    hour: null,
};

export function weatherReducer(state = initialState, action: AppActions.WeatherActions) {
    switch (action.type) {
        case AppActions.SET_FILES:
            return {
                ...state,
                forecast: action.payload
            };
        case AppActions.SET_DAY:
            return {
                ...state,
                day: action.payload,
                hour: null
            };
        case AppActions.SET_HOUR:
            return {
                ...state,
                hour: action.payload
            };
        default:
            return state;
    }

}

