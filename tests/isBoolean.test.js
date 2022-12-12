// Author Miikka Venäläinen

import isBoolean from "../isBoolean";

test('Testing toNumber with correct values', () => {
    const bool = [true, false]
    const bool2 = [true, false]

    expect(isBoolean(true)).toBe(true);
    expect(isBoolean('6.33')).toBe(false);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean('3' === 3)).toBe(true);
    expect(isBoolean("true")).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean("true" === true)).toBe(false);
    expect(isBoolean([true])).toBe(false);
    expect(isBoolean(bool[1])).toBe(true);
    expect(isBoolean(bool == bool)).toBe(true);
    expect(isBoolean([] == [null])).toBe(false);
    expect(isBoolean(bool == bool2)).toBe(false);
    expect(isBoolean(false == '0')).toBe(true);
})