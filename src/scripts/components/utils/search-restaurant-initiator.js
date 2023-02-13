export const SearchRestaurantInitiator = {
  async init({ pageModule, restaurantSource }) {
    this._pageModule = pageModule;
    this._restaurantSource = restaurantSource;

    this._listenToSearchRequestByUser();
  },

  _listenToSearchRequestByUser() {
    this._pageModule.searchCallback = async (keyword) => {
      await this._searchRestaurant(keyword);
    };
  },

  _showFoundMovie(restaurants) {
    this._pageModule.isNoRestaurantFound = false;
    this._pageModule.restaurants = restaurants;
  },

  _showNoRestaurantFound() {
    this._pageModule.isNoRestaurantFound = true;
    this._pageModule.restaurants = [];
  },

  async _searchRestaurant(keyword) {
    const trimmedKeyword = keyword.trim();
    let filteredRestaurants;

    if (trimmedKeyword === '') {
      filteredRestaurants = await this._restaurantSource.GetAllRestaurant();
    } else {
      filteredRestaurants = await this._restaurantSource.SearchRestaurant(
        trimmedKeyword,
      );
    }

    if (filteredRestaurants.length === 0) {
      return this._showNoRestaurantFound();
    }
    return this._showFoundMovie(filteredRestaurants);
  },
};

export default SearchRestaurantInitiator;
