import RestaurantIdb from '../data/restaurant-idb';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderRemoveFavorite();
    } else {
      this._renderAddFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderAddFavorite() {
    this._favoriteButtonContainer.buttonAttribute = {
      restaurantData: this._restaurant,
      isRemoveButton: false,
    };
    // favoriteButton.addEventListener('click', async () => {
    //   await RestaurantIdb.putRestaurant(this._restaurant);
    //   this._renderButton();
    // });
  },

  _renderRemoveFavorite() {
    this._favoriteButtonContainer.buttonAttribute = {
      restaurantData: this._restaurant,
      isRemoveButton: true,
    };
    // favoriteButton.addEventListener('click', async () => {
    //   await RestaurantIdb.deleteRestaurant(this._restaurant.id);
    //   this._renderButton();
    // });
  },
};

export default FavoriteButtonInitiator;
