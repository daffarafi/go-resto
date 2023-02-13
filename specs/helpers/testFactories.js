/* eslint-disable */
import { FavoriteButtonInitiator } from '../../src/scripts/components/utils/favorite-button-initiator';
import { RestaurantIdb } from '../../src/scripts/data/restaurant-idb';
import '../../src/scripts/components/modules/DetailModule';
import '../../src/scripts/components/elements/ModalElement';
import '../../src/scripts/components/elements/PopupElement';

export const initiateFavoriteButton = async (pageModule, restaurant, modal) => {
  await FavoriteButtonInitiator.init({
    pageModule,
    restaurant,
    favoriteRestaurants: RestaurantIdb,
  });
};

export const generateDOM = async (restaurant) => {
  document.body.innerHTML = `<detail-module></detail-module>
  <modal-element></modal-element>
  <popup-element></popup-element>`;

  const pageModule = document.querySelector('detail-module');
  const popup = document.querySelector('popup-element');
  const modal = document.querySelector('modal-element');

  pageModule.restaurantDetail = restaurant;
  await pageModule.updateComplete;

  return { pageModule, popup, modal };
};

export const removeAllRestaurant = async () => {
  const restaurants = await RestaurantIdb.GetAllRestaurant();
  for (const { id } of restaurants) {
    await RestaurantIdb.DeleteRestaurant(id);
  }
};

export const getButtonFromDOM = () => {
  const pageModule = document.querySelector('detail-module');
  return pageModule.shadowRoot
    .querySelector('button-element')
    .shadowRoot.querySelector('button');
};

export const simulateClickButton = async (button) => {
  button.dispatchEvent(new Event('click'));
  await new Promise((resolve) => setTimeout(resolve, 100));
};
