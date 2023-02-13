/* eslint-disable */
import { RestaurantIdb } from '../src/scripts/data/restaurant-idb';
import {
  initiateFavoriteButton,
  removeAllRestaurant,
  getButtonFromDOM,
  simulateClickButton,
  generateDOM,
} from './helpers/testFactories';

describe('Remove Restaurant From Favorite', () => {
  let pageModule, popup, modal;
  const restaurant = { id: 1 };

  beforeEach(async () => {
    await removeAllRestaurant();
    await RestaurantIdb.PutRestaurant(restaurant);
    ({ pageModule, popup, modal } = await generateDOM(restaurant));
  });

  afterEach(async () => {
    await removeAllRestaurant();
  });

  it('should show the unfavorite button when the restaurant has been favorited before', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    expect(getButtonFromDOM().getAttribute('aria-label')).toEqual(
      'unfavorite this restaurant',
    );
  });

  it('should not show the favorite button when the restaurant has been favorited before', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    expect(getButtonFromDOM().getAttribute('aria-label')).not.toEqual(
      'favorite this restaurant',
    );
  });

  it('should be able to remove restaurant from favorite', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    await simulateClickButton(getButtonFromDOM());

    expect(await RestaurantIdb.GetAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the restaurant is not in favorite', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    await RestaurantIdb.DeleteRestaurant(restaurant.id);

    await simulateClickButton(getButtonFromDOM());

    expect(await RestaurantIdb.GetAllRestaurant()).toEqual([]);
  });

  it('should be able to show notification success when remove restaurant from favorite success', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    expect(popup.shadowRoot.querySelector('.popup-box')).toBeFalsy(); // Make sure notification not showed up before button clicked

    await simulateClickButton(getButtonFromDOM());

    const popupBox = popup.shadowRoot.querySelector('.popup-box');
    const popupMessage = popupBox.querySelector('p').innerText;

    expect(popupBox).toBeTruthy(); // Make sure notification showed up after button clicked
    expect(popupMessage).toContain('Success'); // And the notification message should be success
  });

  it('should be able to show modal error when remove restaurant from favorite even though it is not in favorite', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    await RestaurantIdb.DeleteRestaurant(restaurant.id);

    const modalContainer = modal.shadowRoot.querySelector('.modal-container');
    expect(modalContainer.classList).toContain('invisible'); // Make sure modal error not showed up before button clicked
    await simulateClickButton(getButtonFromDOM());
    expect(modalContainer.classList).not.toContain('invisible'); // Make sure modal error showed up after button clicked

    const modalMessage = modalContainer.querySelector('p').innerHTML;
    expect(modalMessage).toContain('Error'); // And the modal message should be error
  });

  it('should not show the modal error after remove restaurant from favorite was successful', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    const modalContainer = modal.shadowRoot.querySelector('.modal-container');

    expect(modalContainer.classList).toContain('invisible'); // Make sure modal error not showed up before button clicked
    await simulateClickButton(getButtonFromDOM());
    expect(modalContainer.classList).toContain('invisible'); // Make sure modal error still not showed up after button clicked
  });

  it('should show the favorite button after remove restaurant from favorite was successful', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    await simulateClickButton(getButtonFromDOM());

    expect(getButtonFromDOM().getAttribute('aria-label')).toEqual(
      'favorite this restaurant',
    );
  });

  it('should not show the favorite button after remove restaurant from favorite was successful', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    await simulateClickButton(getButtonFromDOM());

    expect(getButtonFromDOM().getAttribute('aria-label')).not.toEqual(
      'unfavorite this restaurant',
    );
  });
});
