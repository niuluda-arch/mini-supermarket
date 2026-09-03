function changeQuantity(items, id, delta) {
  return items.map((item) => item.id === id
    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
    : item);
}

function toggleSelection(items, id) {
  return items.map((item) => item.id === id
    ? { ...item, selected: !item.selected }
    : item);
}

function calculateSummary(items) {
  const selected = items.filter((item) => item.selected);
  return {
    count: selected.reduce((sum, item) => sum + item.quantity, 0),
    total: Number(selected.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(1)),
  };
}

module.exports = { changeQuantity, toggleSelection, calculateSummary };
