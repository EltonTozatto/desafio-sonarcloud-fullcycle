const soma = require('./soma');

test("Adiciona 2 + 3 igual a 5", ()=> {
    expect(soma(2, 3)).toBe(5);
});
