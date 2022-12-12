// Author Miikka Venäläinen

import isEmpty from "../isEmpty";

test('Testing toNumber with correct values', () => {

    const bool1 = []
    const bool2 = [null]
    const bool3 = [null, ""]

    expect(isEmpty(2.95)).toBe(true);
    expect(isEmpty('"6.33"')).toBe(false);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty([[[]]])).toBe(false);
    expect(isEmpty([[], []])).toBe(false);
    expect(isEmpty(bool1)).toBe(true);
    expect(isEmpty(bool2[0])).toBe(true);
    expect(isEmpty(bool3)).toBe(false);
})