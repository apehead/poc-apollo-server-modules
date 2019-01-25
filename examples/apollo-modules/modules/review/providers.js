const MOCK_REVIEWS = require('../../../../mocks/reviews');

exports.Reviews = {
  getReview(reviewId) {
    return MOCK_REVIEWS.find(r => r.id === reviewId);
  },
  getAllReviews() {
    return MOCK_REVIEWS;
  },
  getTopReviews({ first }) {
    return MOCK_REVIEWS.slice(0, first);
  },
  getUserReviews(userId) {
    return MOCK_REVIEWS.filter(review => review.authorId === userId);
  },
  getProductReviews(productId) {
    return MOCK_REVIEWS.filter(review => review.productId === productId);
  }
};
