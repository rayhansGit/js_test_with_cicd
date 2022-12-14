// Author Miikka Venäläinen

import isBoolean from "../isBoolean";

const bool = [true, false]

test('Expecting isBoolean to return true for a value true', () => {
    expect(isBoolean(true)).toBe(true);
})
test('Expecting isBoolean to return true for a value false', () => {
    expect(isBoolean(false)).toBe(true);
})
test('Expecting isBoolean to return true for a function call isBoolean(1)', () => {
    expect(isBoolean(isBoolean(1))).toBe(true);
})
test('Expecting isBoolean to return true for a value bool[1]', () => {
    expect(isBoolean(bool[1])).toBe(true);
})
test('Expecting type of isBoolean to be boolean', () => {
    expect(typeof isBoolean(false)).toBe("boolean");
})

test('Expecting isBoolean to return false for a value "6.33"', () => {
    expect(isBoolean('6.33')).toBe(false);
})
test('Expecting isBoolean to return false for a value "true"', () => {
    expect(isBoolean("true")).toBe(false);
})
test('Expecting isBoolean to return false for a value null', () => {
    expect(isBoolean(null)).toBe(false);
})
test('Expecting isBoolean to return false for a value [true]', () => {
    expect(isBoolean([true])).toBe(false);
})