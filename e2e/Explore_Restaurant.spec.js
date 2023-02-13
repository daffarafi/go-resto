/* eslint-disable */
const assert = require('assert');

Feature('Explore Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement(
    {
      shadow: ['home-module', 'explore-restaurant', '.restaurant-list'],
    },
    5,
  );
});

Scenario('searching restaurants', async ({ I }) => {
  I.seeElement({
    shadow: ['home-module', 'explore-restaurant', '#searchElement'],
  });
  I.seeElement({
    shadow: ['home-module', 'explore-restaurant', 'item-template'],
  });

  // Get titles inside Shadow Element. (home-module > explore-restaurant > item-template > h3)
  const titles = await I.executeScript(() => {
    return Array.from(
      document
        .querySelector('home-module')
        .shadowRoot.querySelector('explore-restaurant')
        .shadowRoot.querySelectorAll('item-template'),
    ).map(
      (itemElement) => itemElement.shadowRoot.querySelector('h3').innerText,
    );
  });

  const searchQuery = 'kafe';
  const filteredRestaurants = titles.filter(
    (title) => title.toLowerCase().indexOf(searchQuery) !== -1,
  );

  I.fillField(
    {
      shadow: ['home-module', 'explore-restaurant', '#searchElement'],
    },
    searchQuery,
  );

  I.wait(3);

  // Get titles inside Shadow Element after search query. (home-module > explore-restaurant > item-template > h3)
  const resultTitles = await I.executeScript(() => {
    return Array.from(
      document
        .querySelector('home-module')
        .shadowRoot.querySelector('explore-restaurant')
        .shadowRoot.querySelectorAll('item-template'),
    ).map(
      (itemElement) => itemElement.shadowRoot.querySelector('h3').innerText,
    );
  });

  assert.deepEqual(filteredRestaurants, resultTitles);
});
