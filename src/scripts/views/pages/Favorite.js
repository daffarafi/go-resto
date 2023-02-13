import RestaurantIdb from '../../data/restaurant-idb';

const Favorite = {
  async render() {
    return '<favorite-page></favorite-page>';
  },

  async afterRender() {
    const favoritePage = document.querySelector('favorite-page');
    favoritePage.restaurants = await RestaurantIdb.getAllRestaurant();
  },
};

export default Favorite;
