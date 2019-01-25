const { Injectable } = require('@graphql-modules/di');

const MOCK_PRODUCTS = require('../../../../mocks/products');
const MOCK_PURCHASES = require('../../../../mocks/purchases');

class Products {
  getProduct(id) {
    return MOCK_PRODUCTS.find(product => product.id === id);
  }

  getAllProducts() {
    return MOCK_PRODUCTS;
  }
}

class Purchases {
  getUserPurchases(userId) {
    return MOCK_PURCHASES.filter(purchase => purchase.userId === userId).map(
      purchase =>
        MOCK_PRODUCTS.find(product => product.id === purchase.productId)
    );
  }
}

module.exports = {
  Products: Injectable()(Products),
  Purchases: Injectable()(Purchases)
};
