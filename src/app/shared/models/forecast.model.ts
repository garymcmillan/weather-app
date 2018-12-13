export class ForecastModel {
    constructor(
        public cod: string,
        public message: number,
        public cnt: number,
        public list: Array<any>,
        public city: CityModel,
    ) {
        this.cod = cod;
        this.message = message;
        this.cnt = cnt;
        this.list = list;
        this.city = city;
    }
}

export class CityModel {
    constructor(
        public id: number,
        public name: string,
        public coord: {lat: number, lon: number},
        public country: string,
        public population: number,
    ) {
        this.id = id;
        this.name = name;
        this.coord = coord;
        this.country = country;
        this.population = population;
    }
}

export class DayModel {
    constructor(
        public date: string,
        public hours: HourModel[],
    ) {
        this.date = date;
        this.hours = hours;
    }
}

export class HourModel {
    constructor(
        public dt_txt: Date,
    ) {
        this.dt_txt = dt_txt;
    }
}
