import {DotwPipe} from './dotw.pipe';

describe('Day of the Week Pipe', () => {
    let pipe: DotwPipe;

    beforeEach(() => {
        pipe = new DotwPipe();
    });

    it('should return the day of the week', () => {
        expect(pipe.transform('2018-12-17')).toBe('Monday');
    });

});
