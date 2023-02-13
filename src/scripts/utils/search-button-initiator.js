import RestaurantSource from '../data/restaurant-source';

const SearchButtonInitiator = {
  async init({ searchValue, searchButton, restaurantContainer }) {
    this._searchValue = searchValue;
    this._searchButton = searchButton;
    this._restaurantContainer = restaurantContainer;

    this._searchButton.addEventListener('click', this._searchRestaurant);
  },

  async _searchRestaurant() {
    let filteredRestaurants;
    try {
      if (this._searchValue === '') {
        filteredRestaurants = await RestaurantSource.ListRestaurant();
      } else {
        filteredRestaurants = await RestaurantSource.SearchRestaurant(
          this._searchValue
        );
      }
    } catch (err) {
      alert(err);
    }

    if (filteredRestaurants.length === 0) {
      this._restaurantContainer.renderNotFound(
        `${this._searchValue} is not found!`
      );
    } else {
      this._restaurantContainer.restaurants = filteredRestaurants;
    }
  },
};

export default SearchButtonInitiator;
