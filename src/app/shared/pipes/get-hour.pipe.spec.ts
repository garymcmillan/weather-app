import {GetHourPipe} from './get-hour.pipe';

describe('Get Hour Pipe', () => {
    let pipe: GetHourPipe;

    beforeEach(() => {
        pipe = new GetHourPipe();
    })

    it('should return the time from datetime', () => {
        expect(pipe.transform('2018-12-13 21:00:00')).toBe('21:00:00');
    })

});