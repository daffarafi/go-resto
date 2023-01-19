import '@modules/FavoriteModule';
import '@elements/ModalElement';
import { RestaurantIdb } from '@data';
import { SearchRestaurantInitiator } from '@utils';

export const FavoritePage = {
  async render() {
    return `<favorite-module></favorite-module>
    <modal-element></modal-element>`;
  },

  async afterRender() {
    const pageModule = document.querySelector('favorite-module');
    const modal = document.querySelector('modal-element');

    const navbar = document.querySelector('nav-bar');
    navbar.isNavbarBackgroundChangeDisabled = true;

    try {
      pageModule.restaurants = await RestaurantIdb.GetAllRestaurant();

      SearchRestaurantInitiator.init({
        pageModule,
        restaurantSource: RestaurantIdb,
      });
    } catch (err) {
      modal.title = 'Error';
      modal.content = err;
      modal.modalStatus = 'error';
      modal.isOpen = true;
    }
  },
};

export default FavoritePage;
