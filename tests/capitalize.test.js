// Author Miikka Venäläinen

import capitalize from "../capitalize";

test('Expecting capitalize to return "This is shopping cart" for a value "This is shopping cart"', () => {
    expect(capitalize('This is shopping cart')).toBe('This is shopping cart');
})
test('Expecting capitalize to return "cART" for a value "Cart"', () => {
    expect(capitalize('cART')).toBe('Cart');
})
test('Expecting capitalize to return "THIS IS SHOPPING CART" for a value "This is shopping cart"', () => {
    expect(capitalize('THIS IS SHOPPING CART')).toBe('This is shopping cart');
})
test('Expecting capitalize to return "SHopPIng CaRT" for a value "Shopping cart"', () => {
    expect(capitalize('SHopPIng CaRT')).toBe('Shopping cart');
})
test('Expecting capitalize to return ".this is shopping cart" for a value ".this is shopping cart"', () => {
    expect(capitalize('.this is shopping cart')).toBe('.this is shopping cart');
})
test('Expecting capitalize to return ".7this is shopping cart" for a value ".7this is shopping cart"', () => {
    expect(capitalize('.7this is shopping cart')).toBe('.7this is shopping cart');
})
test('Expecting capitalize to return "" for a value ""', () => {
    expect(capitalize('')).toBe('');
})
test('Expecting capitalize to return "¤(%)#/&" for a value "¤(%)#/&"', () => {
    expect(capitalize('¤(%)#/&"')).toBe('¤(%)#/&"');
})
test('Expecting capitalize to return "[object object]" for a cart list', () => {
    const cart = [{'product' : 'axe'}]
    expect(capitalize(cart)).toBe("[object object]");
})
test('Expecting capitalize to return "554" for a value 554', () => {
    expect(capitalize(554)).toBe("554");
})
test('Expecting capitalize to return "True" for a value true', () => {
    expect(capitalize(true)).toBe("True");
})