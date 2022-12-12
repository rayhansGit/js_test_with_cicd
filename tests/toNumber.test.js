// Author Miikka Venäläinen

import toNumber from "../toNumber";

test('Testing toNumber with correct values', () => {
    expect(toNumber(2.95)).toBe(2.95);
    expect(toNumber(145.25)).toBe(145.25);
    expect(typeof toNumber(-10.99)).toBe('number');
    expect(toNumber(-0)).toBe(-0);
    expect(toNumber('9.99')).toBe(9.99);
    expect(typeof toNumber('2')).toBe('number');
})
test('Testing toNumber with faulty values', () => {
    expect(toNumber('9,99')).toBe.NaN;
    expect(toNumber('"6.33"')).toBe.NaN;
    expect(toNumber('abc')).toBe.NaN;
    expect(toNumber('price 99')).toBe.NaN;
    expect(toNumber('9.99.99')).toBe.NaN;
})