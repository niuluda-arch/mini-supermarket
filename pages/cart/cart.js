const { changeQuantity, toggleSelection, calculateSummary } = require('../../utils/store');

Page({
  data: {
    items: [
      { id: 'milk', name: '低温鲜牛奶 250ml×12盒', detail: '今日鲜配 · 冷藏保存', price: 42, quantity: 1, selected: true },
      { id: 'apple', name: '红富士苹果 脆甜多汁 约850g', detail: '产地直发 · 当日达', price: 25.8, quantity: 2, selected: false },
    ],
    summary: { count: 1, total: 42 },
    couponSelected: false,
  },
  onLoad() { this.refreshSummary(); },
  refreshSummary() { this.setData({ summary: calculateSummary(this.data.items) }); },
  toggleItem(event) {
    this.setData({ items: toggleSelection(this.data.items, event.currentTarget.dataset.id) });
    this.refreshSummary();
  },
  changeItem(event) {
    const { id, delta } = event.currentTarget.dataset;
    this.setData({ items: changeQuantity(this.data.items, id, Number(delta)) });
    this.refreshSummary();
  },
  toggleCoupon() { this.setData({ couponSelected: !this.data.couponSelected }); },
  checkout() {
    if (!this.data.summary.count) { wx.showToast({ title: '请先选择商品', icon: 'none' }); return; }
    wx.showModal({ title: '确认结算', content: `共 ${this.data.summary.count} 件商品，合计 ¥${this.data.summary.total}`, showCancel: false });
  },
});
