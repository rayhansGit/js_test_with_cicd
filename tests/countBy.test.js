import countBy from '../countBy';


test('testing countBy', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
    ]

    countBy(users, value => value.active);
    expect(countBy(users, value => value.active)).toEqual({ 'true': 1, 'false': 0 });
});