/* eslint-disable */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', async ({ I }) => {
  I.see('FAVORITE RESTAURANTS'); // Make sure the page title is FAVORITE RESTAURANTS
  I.see('No data!', { shadow: ['favorite-module', '.no-data'] });
});

Scenario('favorite one restaurant', async ({ I }) => {
  I.see('No data!', { shadow: ['favorite-module', '.no-data'] });

  I.amOnPage('/');
  I.waitForElement(
    { shadow: ['home-module', 'explore-restaurant', '.restaurant-list'] },
    5,
  );

  I.seeElement({
    shadow: ['home-module', 'explore-restaurant', 'item-template'],
  });

  // Get restaurant id
  const id = await I.grabAttributeFrom(
    {
      shadow: ['home-module', 'explore-restaurant', 'item-template'],
    },
    'id',
  );

  // Get restaurant title
  const firstRestaurantTitle = await I.grabTextFrom({
    shadow: ['home-module', 'explore-restaurant', 'item-template', 'h3'],
  });

  // Click "Read more" button inside shadow element
  I.executeScript(() => {
    const button = document
      .querySelector('home-module')
      .shadowRoot.querySelector('explore-restaurant')
      .shadowRoot.querySelector('item-template')
      .shadowRoot.querySelector('button-element')
      .shadowRoot.querySelector('a');
    button.click();
  });

  // Ensure that the current page is on the correct URL
  I.seeInCurrentUrl(`/#/detail/${id}`);

  I.waitForElement(
    { shadow: ['detail-module', 'button-element', 'button'] },
    5,
  );

  // Ensure the page shows Add To Favorite button
  I.see('ADD TO FAVORITE', {
    shadow: ['detail-module', 'button-element', 'button'],
  });

  // Click Add To Favorite button
  I.executeScript(() => {
    const button = document
      .querySelector('detail-module')
      .shadowRoot.querySelector('button-element')
      .shadowRoot.querySelector('button');
    button.click();
  });

  I.amOnPage('/#/favorite');
  I.waitForElement({ shadow: ['favorite-module', '.restaurant-list'] }, 5);

  // Get restaurant title from favorite page
  const favoritedRestaurantTitle = await I.grabTextFrom({
    shadow: ['favorite-module', 'item-template', 'h3'],
  });

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('No data!', { shadow: ['favorite-module', '.no-data'] });

  I.amOnPage('/');
  I.waitForElement(
    { shadow: ['home-module', 'explore-restaurant', '.restaurant-list'] },
    5,
  );
  I.seeElement({
    shadow: ['home-module', 'explore-restaurant'],
  });

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    // Get the restaurant title
    const restaurantTitle = await I.grabTextFrom({
      shadow: [
        'home-module',
        'explore-restaurant',
        `item-template:nth-child(${i})`,
        'h3',
      ],
    });
    titles.push(restaurantTitle);

    // Click "Read more" button inside shadow element
    I.executeScript(
      (i) => {
        const button = document
          .querySelector('home-module')
          .shadowRoot.querySelector('explore-restaurant')
          .shadowRoot.querySelector(`item-template:nth-child(${i})`)
          .shadowRoot.querySelector('button-element')
          .shadowRoot.querySelector('a');
        button.click();
      },
      [i],
    );

    I.wait(3);

    I.see('ADD TO FAVORITE', {
      shadow: ['detail-module', 'button-element', 'button'],
    });

    // Click Add To Restaurant button
    I.executeScript(() => {
      const button = document
        .querySelector('detail-module')
        .shadowRoot.querySelector('button-element')
        .shadowRoot.querySelector('button');
      button.click();
    });

    I.amOnPage('/');
    I.waitForElement(
      { shadow: ['home-module', 'explore-restaurant', '.restaurant-list'] },
      5,
    );
  }

  I.amOnPage('/#/favorite');
  I.waitForElement({ shadow: ['favorite-module', '.restaurant-list'] }, 5);

  I.seeElement({ shadow: ['favorite-module', '#searchElement'] });

  const searchQuery = titles[1].substring(1, 3);
  const filteredRestaurants = titles.filter(
    (title) => title.indexOf(searchQuery) !== -1,
  );

  I.fillField({ shadow: ['favorite-module', '#searchElement'] }, searchQuery);

  const visibleFavoritedRestaurants = await I.grabNumberOfVisibleElements({
    shadow: ['favorite-module', 'item-template'],
  });

  assert.strictEqual(filteredRestaurants.length, visibleFavoritedRestaurants);

  filteredRestaurants.forEach(async (title, index) => {
    // Get restaurants title after search query
    const visibleTitle = await I.grabTextFrom({
      shadow: [
        'favorite-module',
        `item-template:nth-child(${index + 1})`,
        'h3',
      ],
    });

    assert.strictEqual(title, visibleTitle);
  });
});

Scenario('remove restaurant from favorite', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement(
    { shadow: ['home-module', 'explore-restaurant', '.restaurant-list'] },
    5,
  );

  I.seeElement({
    shadow: ['home-module', 'explore-restaurant', 'item-template'],
  });

  // Click "Read more" button inside shadow element
  I.executeScript(() => {
    const button = document
      .querySelector('home-module')
      .shadowRoot.querySelector('explore-restaurant')
      .shadowRoot.querySelector('item-template')
      .shadowRoot.querySelector('button-element')
      .shadowRoot.querySelector('a');
    button.click();
  });

  I.waitForElement(
    { shadow: ['detail-module', 'button-element', 'button'] },
    5,
  );

  // Click Add To Favorite button
  I.executeScript(() => {
    const button = document
      .querySelector('detail-module')
      .shadowRoot.querySelector('button-element')
      .shadowRoot.querySelector('button');
    button.click();
  });

  I.amOnPage('/#/favorite');
  I.waitForElement({ shadow: ['favorite-module', '.restaurant-list'] }, 5);

  // Click "Read more" button inside shadow element
  I.executeScript(() => {
    const button = document
      .querySelector('favorite-module')
      .shadowRoot.querySelector('item-template')
      .shadowRoot.querySelector('button-element')
      .shadowRoot.querySelector('a');
    button.click();
  });

  I.waitForElement(
    { shadow: ['detail-module', 'button-element', 'button'] },
    5,
  );

  // Ensure the page shows Remove From Favorite button
  I.see('REMOVE FROM FAVORITE', {
    shadow: ['detail-module', 'button-element', 'button'],
  });

  // Click Remove From Favorite button
  I.executeScript(() => {
    const button = document
      .querySelector('detail-module')
      .shadowRoot.querySelector('button-element')
      .shadowRoot.querySelector('button');
    button.click();
  });

  I.amOnPage('/#/favorite');
  I.see('No data!', { shadow: ['favorite-module', '.no-data'] });
});
