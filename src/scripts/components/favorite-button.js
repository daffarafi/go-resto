import RestaurantIdb from '../data/restaurant-idb';
import FavoriteButtonInitiator from '../utils/favorite-button-initiator';

class FavoriteButton extends HTMLElement {
  set buttonAttribute({ restaurantData, isRemoveButton }) {
    this._restaurant = restaurantData;
    this._isRemoveButton = isRemoveButton;

    this.render();
    this._afterRender();
  }

  render() {
    this.innerHTML = `
      <button class="favorite-button" id="favoriteButton">${
        this._isRemoveButton ? 'Remove from Favorite' : 'Add to Favorite'
      }</button>
    `;
  }

  _afterRender() {
    const favoriteButton = document.getElementById('favoriteButton');

    favoriteButton.addEventListener('click', async () => {
      if (this._isRemoveButton) {
        await RestaurantIdb.deleteRestaurant(this._restaurant.id);
        FavoriteButtonInitiator._renderButton();
      } else {
        await RestaurantIdb.putRestaurant(this._restaurant);
        FavoriteButtonInitiator._renderButton();
      }
    });
  }
}

customElements.define('favorite-button', FavoriteButton);
