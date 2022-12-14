// Author Miikka Venäläinen

import isEmpty from "../isEmpty";

const bool1 = []
const bool2 = [null]
const bool3 = [null, ""]

test('Expecting isEmpty to return true for a value 2.95', () => {
    expect(isEmpty(2.95)).toBe(true);
})
test('Expecting isEmpty to return true for a value true', () => {
    expect(isEmpty(true)).toBe(true);
})
test('Expecting isEmpty to return true for a value ""', () => {
    expect(isEmpty("")).toBe(true);
})
test('Expecting isEmpty to return true for a value null', () => {
    expect(isEmpty(null)).toBe(true);
})
test('Expecting isEmpty to return true for a empty list', () => {
    expect(isEmpty(bool1)).toBe(true);
})
test('Expecting isEmpty to return true for a list value null', () => {
    expect(isEmpty(bool2[0])).toBe(true);
})

test('Expecting isEmpty to return false for a not empty list', () => {
    expect(isEmpty(bool2)).toBe(false);
})
test('Expecting isEmpty to return false for a value ""6.33""', () => {
    expect(isEmpty('"6.33"')).toBe(false);
})
test('Expecting isEmpty to return false for a list [[[]]]', () => {
    expect(isEmpty([[[]]])).toBe(false);
})
test('Expecting isEmpty to return false for a list [[], []]', () => {
    expect(isEmpty([[], []])).toBe(false);
})
test('Expecting isEmpty to return false for a not empty list', () => {
    expect(isEmpty(bool3)).toBe(false);
})