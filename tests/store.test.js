const test = require('node:test');
const assert = require('node:assert/strict');
const {
  changeQuantity,
  toggleSelection,
  calculateSummary,
} = require('../utils/store');

const items = [
  { id: 'milk', quantity: 1, selected: true, price: 42 },
  { id: 'apple', quantity: 2, selected: false, price: 25.8 },
];

test('changeQuantity keeps the quantity at one or above', () => {
  assert.equal(changeQuantity(items, 'milk', -1)[0].quantity, 1);
  assert.equal(changeQuantity(items, 'apple', 1)[1].quantity, 3);
});

test('toggleSelection only changes the selected target', () => {
  const result = toggleSelection(items, 'apple');
  assert.equal(result[0].selected, true);
  assert.equal(result[1].selected, true);
});

test('calculateSummary totals selected item quantities and prices', () => {
  assert.deepEqual(calculateSummary(items), { count: 1, total: 42 });
});
