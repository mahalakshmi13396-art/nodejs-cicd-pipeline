const test = require('node:test');
const assert = require('node:assert');

test('Addition should return the correct result', () => {
    const result = 10 + 20;
    assert.strictEqual(result, 30);
});

test('String should match expected value', () => {
    const message = 'CI/CD Pipeline';
    assert.strictEqual(message, 'CI/CD Pipeline');
});
