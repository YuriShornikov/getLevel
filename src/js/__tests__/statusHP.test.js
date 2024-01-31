import healthStatus from '../statusHP.js';


test.each([
    ['Маг', 90, 'healthy'],
    ['Маг', 30, 'wounded'],
    ['Маг', 10, 'critical']
])('testing heat points and return %s status', (name, health, expected) => {
    const character = { name, health };
    const result = healthStatus(character);
    expect(result).toBe(expected);
})