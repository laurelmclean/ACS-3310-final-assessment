const { ordinalSuffix } = require('../src/index.js');

test('ordinalSuffix returns "st" for numbers ending in 1 except 11', () => {
    expect(ordinalSuffix(1)).toBe('1st');
    expect(ordinalSuffix(21)).toBe('21st');
    expect(ordinalSuffix(31)).toBe('31st');
});

test('ordinalSuffix returns "nd" for numbers ending in 2 except 12', () => {
    expect(ordinalSuffix(2)).toBe('2nd');
    expect(ordinalSuffix(22)).toBe('22nd');
    expect(ordinalSuffix(32)).toBe('32nd');
});

test('ordinalSuffix returns "rd" for numbers ending in 3 except 13', () => {
    expect(ordinalSuffix(3)).toBe('3rd');
    expect(ordinalSuffix(23)).toBe('23rd');
    expect(ordinalSuffix(33)).toBe('33rd');
});

test('ordinalSuffix returns "th" for all other numbers', () => {
    expect(ordinalSuffix(4)).toBe('4th');
    expect(ordinalSuffix(11)).toBe('11th');
    expect(ordinalSuffix(12)).toBe('12th');
    expect(ordinalSuffix(13)).toBe('13th');
    expect(ordinalSuffix(25)).toBe('25th');
    expect(ordinalSuffix(100)).toBe('100th');
});