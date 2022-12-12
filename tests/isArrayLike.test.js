import isArrayLike from '../isArrayLike';


test('testing isArray', () => {
    expect(isArrayLike([1,2,3])).toBe(true);
    expect(isArrayLike('abc')).toBe(true);
    expect(isArrayLike()).toBe(false);
    expect(isArrayLike(()=>{console.log("sending a function")})).toBe(false);
});

