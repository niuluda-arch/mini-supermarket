const products = [
  { id: 'apple', name: '红富士苹果 脆甜多汁', detail: '约4个 / 850g', price: '12.9' },
  { id: 'grape', name: '阳光玫瑰葡萄 无籽', detail: '500g / 串装', price: '29.9' },
  { id: 'pork', name: '鲜猪里脊 瘦肉', detail: '300g / 盒装', price: '22.8' },
  { id: 'egg', name: '冷鲜鸡蛋 谷物喂养', detail: '10枚 / 盒装', price: '16.8' },
];

Page({
  data: {
    tabs: ['全部', '水果', '蔬菜', '肉禽', '海鲜'],
    activeTab: '全部',
    products,
    cartCount: 0,
  },
  chooseTab(event) {
    this.setData({ activeTab: event.currentTarget.dataset.tab });
  },
  addProduct() {
    this.setData({ cartCount: this.data.cartCount + 1 });
    wx.showToast({ title: '已加入购物车', icon: 'none' });
  },
  goCart() {
    wx.navigateTo({ url: '/pages/cart/cart' });
  },
  showNotice() {
    wx.showModal({ title: '配送提示', content: '预计 1 小时送达，满 39 元免配送费。', showCancel: false });
  },
});
