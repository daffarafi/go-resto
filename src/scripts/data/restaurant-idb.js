import { openDB } from 'idb';
import { CONFIG } from '@globals';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

export const RestaurantIdb = {
  async GetRestaurant(id) {
    if (!id) {
      return Promise.reject(
        new Error("This restaurant doesn't have id!").message,
      );
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async GetAllRestaurant() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async PutRestaurant(restaurant) {
    if (await this.GetRestaurant(restaurant.id)) {
      return Promise.reject(
        new Error('This restauant is already in your favorite!').message,
      );
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async DeleteRestaurant(id) {
    if (await this.GetRestaurant(id)) {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    }
    return Promise.reject(
      new Error('This restauant is not in favorite!').message,
    );
  },
  async SearchRestaurant(query) {
    return (await this.GetAllRestaurant()).filter((restaurant) => {
      const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  },
};

export default RestaurantIdb;
