import compact from '../compact';


test('testing compact', () => {
    expect(compact([0, 1, false, 2, '', 3])).toStrictEqual([1, 2, 3]);
});