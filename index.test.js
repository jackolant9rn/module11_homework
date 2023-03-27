import { getPercents, getMonth } from "./index.js";

describe('', () => {
    it('get a percentage of a number', () => {
        expect(getPercents(30, 100)).toBe(30);
    })
    it('get an invalid percentage of a number', () => {
        expect(getPercents('percent', 100)).toBe(NaN);
    })
    it('get a percentage of not a number', () => {
        expect(getPercents(30, 'number')).toBe(NaN);
    })
})

describe('', () => {
    it('get the month by ordinal number in the year', () => {
        expect(getMonth(3)).toBe('март');
    })
    it('get the month by invalid number in the year', () => {
        expect(getMonth(17)).toBe('неизвестно');
    })
    it('get the month by not a number', () => {
        expect(getMonth('январь')).toBe('неизвестно');
    })
})