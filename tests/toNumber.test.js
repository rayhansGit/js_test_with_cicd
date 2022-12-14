// Author Miikka Venäläinen

import toNumber from "../toNumber";

test('Expecting toNumber to return 2.95 for a value 2.95', () => {
    expect(toNumber(2.95)).toBe(2.95);
})
test('Expecting toNumber to return 145.25 for a value 145.25', () => {
    expect(toNumber(145.25)).toBe(145.25);
})
test('Expecting toNumber to return type of number for a value -10.99', () => {
    expect(typeof toNumber(-10.99)).toBe('number');
})
test('Expecting toNumber to return -0 for a value -0', () => {
    expect(toNumber(-0)).toBe(-0);
})
test('Expecting toNumber to return 9.99 for a value "9.99"', () => {
    expect(toNumber('9.99')).toBe(9.99);
})
test('Expecting toNumber to return type of number for a value "2"', () => {
    expect(typeof toNumber('2')).toBe('number');
})

test('Expecting toNumber to return NaN for a value "9,99"', () => {
    expect(toNumber('9,99')).toBe.NaN;
})
test('Expecting toNumber to return NaN for a value ""6.33""', () => {
    expect(toNumber('"6.33"')).toBe.NaN;
})
test('Expecting toNumber to return NaN for a value "abc"', () => {
    expect(toNumber('abc')).toBe.NaN;
})
test('Expecting toNumber to return NaN for a value "price 99"', () => {
    expect(toNumber('price 99')).toBe.NaN;
})
test('Expecting toNumber to return NaN for a value "9.99.99"', () => {
    expect(toNumber('9.99.99')).toBe.NaN;
})
test('Expecting toNumber to return NaN for a value " 9 "', () => {
    expect(toNumber(' 9 ')).toBe.NaN;
})