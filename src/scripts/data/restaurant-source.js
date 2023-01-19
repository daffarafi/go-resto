import { API_ENDPOINT } from '@globals';

export class RestaurantSource {
  static GetAllRestaurant = async () => {
    const response = await fetch(API_ENDPOINT.LIST);
    const { error, message, restaurants } = await response.json();
    if (error && message !== 'success') {
      return Promise.reject(
        new Error(`Can't connect to Database.\nError: ${message}`),
      );
    }
    return Promise.resolve(restaurants);
  };

  static DetailRestaurant = async (id) => {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const { error, message, restaurant } = await response.json();
    if (error && message !== 'success') {
      return Promise.reject(
        new Error(`Can't connect to Database.\nError: ${message}`),
      );
    }
    return Promise.resolve(restaurant);
  };

  static SearchRestaurant = async (keyword) => {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword));
    const { error, restaurants } = await response.json();
    if (error) {
      const { message } = await response.json();
      return Promise.reject(
        new Error(`Can't connect to Database.\nError: ${message}`),
      );
    }
    return Promise.resolve(restaurants);
  };

  static ReviewRestaurant = async ({ id, name, review }) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, option);
    const { error, message, customerReviews } = await response.json();
    if (error && message !== 'success') {
      return Promise.reject(
        new Error(`Can't connect to Database.\nError: ${message}`),
      );
    }
    return Promise.resolve({ error, message, customerReviews });
  };
}

export default RestaurantSource;
