import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-idb';
import { removeAllRestaurant } from './helpers/testFactories';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  beforeEach(async () => {
    await removeAllRestaurant();
  });

  afterEach(async () => {
    await removeAllRestaurant();
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
