# 首页资产清单

来源：用户提供的“超市购物 App”首页截图。所有导出文件为独立 PNG，1254 × 1254，ARGB（含透明通道）。图标采用简洁线性风格；除定位、横幅购物袋和加购按钮外，其余颜色为灰色，方便直接置换低保真页面的占位符。

| 截图位置 | 文件 | 建议替换位置 | 备注 |
| --- | --- | --- | --- |
| 顶部地址左侧 | `assets/home/icon-location.png` | `.location-row` 内“图标占位” | 绿色定位图标，推测为标准定位符号。 |
| 顶部右侧通知圆钮 | `assets/home/icon-notification.png` | `.notice` 内“图标占位” | 黑色线性铃铛，推测。圆形白底继续由页面样式提供。 |
| 搜索框左侧 | `assets/home/icon-search.png` | `.search` 内“图标占位” | 灰色放大镜。 |
| 促销横幅右侧 | `assets/home/image-banner-shopping-bag.png` | `.banner-image` | 购物袋加淡绿圆盘插画；横幅文案仍应保留为可编辑文本。 |
| 商品卡片右下角 | `assets/home/icon-add-cart.png` | `.add` 内“图标占位” | 绿色圆形加号。 |
| “查看全部”右侧 | `assets/home/icon-chevron-right.png` | `查看全部` 后的“图标占位” | 灰色右箭头，推测。 |
| 底部“首页” | `assets/home/icon-nav-home.png` | 首页导航内“图标占位” | 灰色房屋；选中态可以用 CSS 着色或使用页面色彩覆盖。 |
| 底部“分类” | `assets/home/icon-nav-category.png` | 分类导航内“图标占位” | 四宫格分类图标。 |
| 底部“购物车” | `assets/home/icon-nav-cart.png` | 购物车导航内“图标占位” | 灰色线性购物车。 |
| 底部“我的” | `assets/home/icon-nav-profile.png` | 我的导航内“图标占位” | 灰色线性人物，推测。 |

## 商品图片资产

原参考图的商品区为文字占位，没有可直接裁切的商品摄影图。以下文件已按商品名称生成并接入页面，商品名称、规格与价格仍保留为可编辑文本。

| 商品 | 文件 | 已替换位置 |
| --- | --- | --- |
| 红富士苹果 | `assets/products/product-apple.png` | 首页商品卡、购物车、猜你喜欢、商品详情 |
| 阳光玫瑰葡萄 | `assets/products/product-grape.png` | 首页商品卡、购物车、猜你喜欢、商品详情 |
| 鲜猪里脊 | `assets/products/product-pork.png` | 首页商品卡、购物车、猜你喜欢、商品详情 |
| 冷鲜鸡蛋 | `assets/products/product-egg.png` | 首页商品卡、购物车、猜你喜欢、商品详情 |
| 油麦菜 | `assets/products/product-vegetable.png` | 首页商品卡、购物车、猜你喜欢、商品详情 |
| 鲜活大虾 | `assets/products/product-shrimp.png` | 首页商品卡、购物车、猜你喜欢、商品详情 |
| 纯牛奶 | `assets/products/product-milk.png` | 首页商品卡、购物车、猜你喜欢、商品详情 |
| 东北大米 | `assets/products/product-rice.png` | 首页商品卡、购物车、猜你喜欢、商品详情 |

顶部状态栏、底部 Home Indicator 和微信胶囊均为设备或微信运行时界面，不属于页面资产；不要导出或接入。
