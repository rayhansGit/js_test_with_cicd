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
test('Expecting filter to return correct array for right predicate', () => {
    expect(filter(product, ({ price }) => price < 2)).toStrictEqual([{'product' : 'bread', 'price' : '1.45', 'info' : 'gluten free'}]);
})
test('Expecting filter to return correct array for right predicate', () => {
    expect(filter(product, ({ price }) => price > 2)).toStrictEqual([{'product' : 'banana', 'price' : '2.95'},
                                                                    {'product' : 'car', 'price' : '20400.00'},
                                                                    {'product' : 'red apple', 'price' : '4.15'}]);
})
test('Expecting filter to return correct array for right predicate', () => {
    expect(filter(users, ({ active }) => active)).toStrictEqual([{ 'user': 'barney', 'active': true }])
})
test('Expecting filter to return empty array for faulty predicate', () => {
    expect(filter(product, ({ product }) => product == 'egg')).toStrictEqual([[]]);
})
test('Expecting filter to return empty array for faulty predicate', () => {
    expect(filter(product, ({ comment }) => comment == 'None')).toStrictEqual([[]]);
})
test('Expecting filter to return empty array for empty array', () => {
    expect(filter([{}], ({ comment }) => comment == 'None')).toStrictEqual([[]]);
})
test('Expecting filter to return empty array for string value', () => {
    expect(filter("UPS", ({ comment }) => comment == 'None')).toStrictEqual([[]]);
})