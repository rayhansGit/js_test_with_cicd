// Author Miikka Venäläinen

import capitalize from "../capitalize";

test('Testing capitalize with different values', () => {
    expect(capitalize('This is shopping cart')).toBe('This is shopping cart');
    expect(capitalize('cART')).toBe('Cart');
    expect(capitalize('THIS IS SHOPPING CART')).toBe('This is shopping cart');
    expect(capitalize('SHopPIng CaRT')).toBe('Shopping cart');
    expect(capitalize('.this is shopping cart')).toBe('.this is shopping cart');
    expect(capitalize('.7this is shopping cart')).toBe('.7this is shopping cart');
    expect(capitalize('')).toBe('');
    expect(capitalize('¤(%)#/&"')).toBe('¤(%)#/&"');
})