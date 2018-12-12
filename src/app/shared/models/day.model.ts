export class DayModel {
    constructor(
        public date: string,
        public hours: HourModel[],
    ) {
        this.date = date;
        this.hours = hours
    }
}

export class HourModel {
    constructor(
        public dt_txt: Date,
    ) {
        this.dt_txt = dt_txt
    }
}