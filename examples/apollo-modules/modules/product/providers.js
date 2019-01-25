const MOCK_PRODUCTS = require('../../../../mocks/products');
const MOCK_PURCHASES = require('../../../../mocks/purchases');

exports.Products = {
  getProduct(id) {
    return MOCK_PRODUCTS.find(product => product.id === id);
  },
  getAllProducts() {
    return MOCK_PRODUCTS;
  }
};

exports.Purchases = {
  getUserPurchases(userId) {
    return MOCK_PURCHASES.filter(purchase => purchase.userId === userId).map(
      purchase =>
        MOCK_PRODUCTS.find(product => product.id === purchase.productId)
    );
  }
};
