import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static ListRestaurant = async () => {
    const response = await fetch(API_ENDPOINT.LIST);
    const { error, message, restaurants } = await response.json();
    if (error && message !== 'success') {
      return Promise.reject(`Can't connect to Database.\nError: ${message}`);
    }
    return Promise.resolve(restaurants);
  };

  static DetailRestaurant = async (id) => {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const { error, message, restaurant } = await response.json();
    if (error && message !== 'success') {
      return Promise.reject(`Can't connect to Database.\nError: ${message}`);
    }
    return Promise.resolve(restaurant);
  };

  static SearchRestaurant = async (keyword) => {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword));
    const { error, restaurants } = await response.json();
    if (error) {
      const { message } = await response.json();
      return Promise.reject(`Can't connect to Database.\nError: ${message}`);
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
    const { error, message } = await response.json();
    if (error && message !== 'success') {
      return Promise.reject(`Can't connect to Database.\nError: ${message}`);
    }
    return Promise.resolve({ error, message });
  };
}

export default RestaurantSource;
