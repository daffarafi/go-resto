import '@modules/HomeModule';
import '@elements/ModalElement';
import { RestaurantSource } from '@data';
import { SearchRestaurantInitiator } from '@utils';

export const HomePage = {
  async render() {
    return `<home-module></home-module>
    <modal-element></modal-element`;
  },

  async afterRender() {
    const pageModule = document.querySelector('home-module');
    const modal = document.querySelector('modal-element');

    const navbar = document.querySelector('nav-bar');
    navbar.isNavbarBackgroundChangeDisabled = false;

    try {
      const restaurants = await RestaurantSource.GetAllRestaurant();
      const trendingRestaurants = [...restaurants].sort((a, b) => {
        // Urutkan berdasarkan rating
        if (a.rating < b.rating) {
          return 1;
        }
        if (a.rating > b.rating) {
          return -1;
        }
        return 0;
      });

      pageModule.restaurants = restaurants;
      pageModule.trendingRestaurants = trendingRestaurants.slice(0, 3);

      SearchRestaurantInitiator.init({
        pageModule,
        restaurantSource: RestaurantSource,
      });
    } catch (err) {
      modal.title = 'Error';
      modal.content = err;
      modal.modalStatus = 'error';
      modal.isOpen = true;
    }
  },
};

export default HomePage;
