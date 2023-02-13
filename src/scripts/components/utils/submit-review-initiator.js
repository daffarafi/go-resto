export const SubmitReviewInitiator = {
  async init({ pageModule, restaurant, restaurantSource }) {
    this._pageModule = pageModule;
    this._restaurant = restaurant;
    this._restaurantSource = restaurantSource;

    this._getReviewByUser();
  },

  _getReviewByUser() {
    const { id } = this._restaurant;

    this._pageModule.submitReviewCallback = async (name, reviewMessage) => {
      await this._sendReview(id, name, reviewMessage);
    };
  },

  _renderReviews(customerReviews) {
    this._pageModule.restaurantDetail = {
      ...this._pageModule.restaurantDetail,
      customerReviews,
    };
  },

  async _sendReview(id, name, review) {
    try {
      const { customerReviews } = await this._restaurantSource.ReviewRestaurant(
        { id, name, review },
      );

      this._renderReviews(customerReviews);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default SubmitReviewInitiator;
