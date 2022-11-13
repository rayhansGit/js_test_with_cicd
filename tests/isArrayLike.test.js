import isArrayLike from '../isArrayLike';


test('testing isArray', () => {
    expect(isArrayLike([1,2,3])).toBe(true);
});