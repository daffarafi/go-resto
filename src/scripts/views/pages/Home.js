import RestaurantSource from '../../data/restaurant-source';
import SearchButtonInitiator from '../../utils/search-button-initiator';

const Home = {
  async render() {
    return `
      <header-content></header-content>
      <explore-restaurant></explore-restaurant>
      <our-services></our-services>
      <trending-today></trending-today>
    `;
  },

  async afterRender() {
    const exploreRestaurantContainer = document.querySelector(
      '.explore-restaurant'
    );
    const popularRestaurantContainer = document.querySelector(
      '.popular-restaurant'
    );

    let exploreRestaurants;
    try {
      exploreRestaurants = await RestaurantSource.ListRestaurant();
    } catch (err) {
      alert(err);
    }
    const popularRestaurants = [...exploreRestaurants].sort((a, b) => {
      // Urutkan berdasarkan rating
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });

    exploreRestaurantContainer.restaurants = exploreRestaurants;
    popularRestaurantContainer.restaurants = popularRestaurants.slice(0, 3);

    await SearchButtonInitiator.init({
      searchValue: document.querySelector('#searchElement').value,
      searchButton: document.querySelector('#searchButtonElement'),
      restaurantContainer: exploreRestaurantContainer,
    });
  },
};

export default Home;
