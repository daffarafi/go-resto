/* eslint-disable */
import { RestaurantIdb } from '../src/scripts/data/restaurant-idb';
import {
  initiateFavoriteButton,
  removeAllRestaurant,
  getButtonFromDOM,
  simulateClickButton,
  generateDOM,
} from './helpers/testFactories';

describe('Add Restaurant To Favorite', () => {
  let pageModule, popup, modal;
  const restaurant = { id: 1 };

  beforeEach(async () => {
    await removeAllRestaurant();
    ({ pageModule, popup, modal } = await generateDOM(restaurant));
  });

  afterEach(async () => {
    await removeAllRestaurant();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    expect(getButtonFromDOM().getAttribute('aria-label')).toEqual(
      'favorite this restaurant',
    );
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    expect(getButtonFromDOM().getAttribute('aria-label')).not.toEqual(
      'unfavorite this restaurant',
    );
  });

  it('should be able to add the restaurant to favorite', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    await simulateClickButton(getButtonFromDOM());

    expect(await RestaurantIdb.GetAllRestaurant()).toEqual([restaurant]);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await initiateFavoriteButton(pageModule, restaurant);
    await RestaurantIdb.PutRestaurant(restaurant);

    await simulateClickButton(getButtonFromDOM());

    expect(await RestaurantIdb.GetAllRestaurant()).toEqual([restaurant]);
  });

  it('should be able to show modal error when it has no id', async () => {
    try {
      await initiateFavoriteButton(pageModule, {});
    } catch (err) {
      expect(err).toEqual("This restaurant doesn't have id!"); // even the page/button won't build without restaurant id
    }
  });

  it('should be able to show notification success when add restaurant to favorite was successful', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    expect(popup.shadowRoot.querySelector('.popup-box')).toBeFalsy(); // Make sure notification not showed up before button clicked

    await simulateClickButton(getButtonFromDOM());

    const popupBox = popup.shadowRoot.querySelector('.popup-box');
    const popupMessage = popupBox.querySelector('p').innerText;

    expect(popupBox).toBeTruthy(); // Make sure notification showed up after button clicked
    expect(popupMessage).toContain('Success'); // And the notification message should be success
  });

  it('should be able to show modal error when add restaurant to favorite even though it is already favorited', async () => {
    await initiateFavoriteButton(pageModule, restaurant);
    await RestaurantIdb.PutRestaurant(restaurant);

    const modalContainer = modal.shadowRoot.querySelector('.modal-container');
    expect(modalContainer.classList).toContain('invisible'); // Make sure modal error not showed up before button clicked
    await simulateClickButton(getButtonFromDOM());
    expect(modalContainer.classList).not.toContain('invisible'); // Make sure modal error showed up after button clicked

    const modalMessage = modalContainer.querySelector('p').innerHTML;
    expect(modalMessage).toContain('Error'); // And the modal message should be error
  });

  it('should not show the modal error after add restaurant to favorite was successful', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    const modalContainer = modal.shadowRoot.querySelector('.modal-container');

    expect(modalContainer.classList).toContain('invisible'); // Make sure modal error not showed up before button clicked
    await simulateClickButton(getButtonFromDOM());
    expect(modalContainer.classList).toContain('invisible'); // Make sure modal error still not showed up after button clicked
  });

  it('should show the unfavorite button after add restaurant to favorite was successful', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    await simulateClickButton(getButtonFromDOM());

    expect(getButtonFromDOM().getAttribute('aria-label')).toEqual(
      'unfavorite this restaurant',
    );
  });

  it('should not show the favorite button after add restaurant to favorite was successful', async () => {
    await initiateFavoriteButton(pageModule, restaurant);

    await simulateClickButton(getButtonFromDOM());

    expect(getButtonFromDOM().getAttribute('aria-label')).not.toEqual(
      'favorite this restaurant',
    );
  });
});
