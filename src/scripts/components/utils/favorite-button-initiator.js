export const FavoriteButtonInitiator = {
  async init({ pageModule, restaurant, favoriteRestaurants }) {
    this._pageModule = pageModule;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

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
    const restaurant = await this._favoriteRestaurants.GetRestaurant(id);
    return !!restaurant;
  },

  _renderAddFavorite() {
    this._pageModule.isFavorited = false;

    this._pageModule.favoriteButtonCallback = async () => {
      try {
        await this._favoriteRestaurants.PutRestaurant(this._restaurant);
        this._renderButton();
        return Promise.resolve(
          `Success add ${this._restaurant.name} to favorite!`,
        );
      } catch (err) {
        this._renderButton();
        return Promise.reject(
          new Error(
            `Failed add ${this._restaurant.name} to favorite! Error: ${err}`,
          ).message,
        );
      }
    };
  },

  _renderRemoveFavorite() {
    this._pageModule.isFavorited = true;
    this._pageModule.favoriteButtonCallback = async () => {
      try {
        await this._favoriteRestaurants.DeleteRestaurant(this._restaurant.id);
        this._renderButton();
        return Promise.resolve(
          `Success remove ${this._restaurant.name} from favorite!`,
        );
      } catch (err) {
        this._renderButton();
        return Promise.reject(
          new Error(
            `Failed remove ${this._restaurant.name} from favorite! Error: ${err}`,
          ).message,
        );
      }
    };
  },
};

export default FavoriteButtonInitiator;
