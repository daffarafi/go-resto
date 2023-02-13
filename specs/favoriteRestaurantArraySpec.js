import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  GetRestaurant(id) {
    if (!id) {
      return Promise.reject(
        new Error("This restaurant doesn't have id!").message,
      );
    }
    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  GetAllRestaurant() {
    return favoriteRestaurants;
  },

  PutRestaurant(restaurant) {
    if (this.GetRestaurant(restaurant.id)) {
      return Promise.reject(
        new Error('This restauant is already in your favorite!').message,
      );
    }
    favoriteRestaurants.push(restaurant);
    return Promise.resolve();
  },

  DeleteRestaurant(id) {
    if (this.GetRestaurant(id)) {
      favoriteRestaurants = favoriteRestaurants.filter(
        (restaurant) => restaurant.id !== id,
      );
      return Promise.resolve();
    }
    return Promise.reject(
      new Error('This restauant is not in favorite!').message,
    );
  },

  SearchRestaurant(query) {
    return this.GetAllRestaurant().filter((restaurant) => {
      const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
