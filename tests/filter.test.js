// Author Miikka Venäläinen

import filter from "../filter";

const product = [
    {'product' : 'banana', 'price' : '2.95'},
    {'product' : 'car', 'price' : '20400.00'},
    {'product' : 'bread', 'price' : '1.45', 'info' : 'gluten free'},
    {'product' : 'red apple', 'price' : '4.15'}
]

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
]

test('Testing filter with values', () => {
    expect(filter(product, ({ price }) => price < 2)).toStrictEqual([{'product' : 'bread', 'price' : '1.45', 'info' : 'gluten free'}]);
    expect(filter(users, ({ active }) => active)).toStrictEqual([{ 'user': 'barney', 'active': true }])
    expect(filter(product, ({ product }) => product == 'egg')).toStrictEqual([[]]);
    expect(filter(product, ({ comment }) => comment == 'None')).toStrictEqual([[]]);
    expect(filter([{}], ({ comment }) => comment == 'None')).toStrictEqual([[]]);
    expect(filter("UPS", ({ comment }) => comment == 'None')).toStrictEqual([[]]);
})