import castArray from '../castArray';


test('testing castArray', () => {
    expect(castArray(1)).toStrictEqual([1]);
    expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }]);
    expect(castArray('abc')).toStrictEqual(['abc']);
    expect(castArray(null)).toStrictEqual([null]);
    expect(castArray(undefined)).toStrictEqual([undefined]);
    expect(castArray()).toStrictEqual([undefined]);
    expect(castArray([1, 2, 3])).toEqual ([1, 2, 3]);
});