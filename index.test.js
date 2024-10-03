const sayHello = require('./index');

test('deberia retornar "Hola Mundo"', () => {
    expect(sayHello()).toBe("Hola Mundo");
});
