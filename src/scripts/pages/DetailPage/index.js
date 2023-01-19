import '@modules/DetailModule';
import '@elements/ModalElement';
import { RestaurantSource, RestaurantIdb } from '@data';
import { FavoriteButtonInitiator, SubmitReviewInitiator } from '@utils';
import { UrlParser } from '@routes/url-parser';

export const DetailPage = {
  async render() {
    return `<detail-module></detail-module>
    <modal-element></modal-element>`;
  },

  async afterRender() {
    const pageModule = document.querySelector('detail-module');
    const modal = document.querySelector('modal-element');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const navbar = document.querySelector('nav-bar');
    navbar.isNavbarBackgroundChangeDisabled = false;

    try {
      const restaurant = await RestaurantSource.DetailRestaurant(url.id);

      await FavoriteButtonInitiator.init({
        pageModule,
        restaurant,
        favoriteRestaurants: RestaurantIdb,
      });
      await SubmitReviewInitiator.init({
        pageModule,
        restaurant,
        restaurantSource: RestaurantSource,
      });

      pageModule.restaurantDetail = restaurant;
    } catch (err) {
      modal.title = 'Error';
      modal.content = err;
      modal.modalStatus = 'error';
      modal.isOpen = true;
    }
  },
};

export default DetailPage;
