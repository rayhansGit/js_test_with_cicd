import toString from '../toString';


test('testing toString', () => {
    expect(toString(null)).toBe('');
    expect(toString(-0)).toBe('-0');
    expect(toString([1, 2, 3])).toBe('1,2,3');
});