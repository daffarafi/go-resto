import RestaurantSource from '../data/restaurant-source';
import Detail from '../views/pages/Detail';

const SubmitReviewInitiator = {
  init({ submitButton, restaurantId, reviewMessage, reviewName }) {
    submitButton.addEventListener('click', async (event) => {
      await this._sendReview({
        event,
        restaurantId,
        reviewMessage,
        reviewName,
      });
    });
  },

  async _sendReview({ event, restaurantId, reviewMessage, reviewName }) {
    event.stopPropagation();
    try {
      await RestaurantSource.ReviewRestaurant({
        id: restaurantId,
        name: reviewName.value,
        review: reviewMessage.innerText,
      });
      await this._showSuccess();
      Detail.afterRender();
    } catch (err) {
      this._showError(err);
    }
  },

  _showSuccess() {
    const popup = document.createElement('popup-element');
    document.body.append(popup);
    popup.popupAttribute = {
      title: 'Done!',
      content: 'Review sent!',
      isError: false,
    };
  },

  _showError(err) {
    const popup = document.createElement('popup-element');
    document.body.append(popup);
    popup.popupAttribute = {
      title: 'Failed!',
      content: err,
      isError: true,
    };
  },
};

export default SubmitReviewInitiator;
