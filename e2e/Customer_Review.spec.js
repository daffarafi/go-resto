/* eslint-disable */
const assert = require('assert');

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(3);
});

// @only
Scenario('can send review', async ({ I }) => {
  I.seeElement({
    shadow: ['home-module', 'explore-restaurant', 'item-template'],
  });

  I.executeScript(() => {
    const button = document
      .querySelector('home-module')
      .shadowRoot.querySelector('explore-restaurant')
      .shadowRoot.querySelector('item-template')
      .shadowRoot.querySelector('button-element')
      .shadowRoot.querySelector('a');
    button.click();
  });

  I.waitForElement({ shadow: ['detail-module', 'h1'] }, 5);

  I.see('Reviews', {
    shadow: [
      'detail-module',
      'slide-element',
      '.slider',
      'button:nth-child(3)',
    ],
  });

  I.executeScript(() => {
    const button = document
      .querySelector('detail-module')
      .shadowRoot.querySelector('slide-element')
      .shadowRoot.querySelector('button:nth-child(3)');
    button.click();
  });

  I.see('Reviews', {
    shadow: ['detail-module', 'slide-element', 'slide-reviews', 'h1'],
  });

  I.seeElement({
    shadow: ['detail-module', 'slide-element', 'slide-reviews', '#reviewName'],
  });
  I.seeElement({
    shadow: [
      'detail-module',
      'slide-element',
      'slide-reviews',
      '#reviewMessage',
    ],
  });
  I.seeElement({
    shadow: [
      'detail-module',
      'slide-element',
      'slide-reviews',
      '#submitReview',
    ],
  });

  const date = new Date();
  const id = date.getTime().toString().match(/\d+/g).join('');
  const today = date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  I.fillField(
    {
      shadow: [
        'detail-module',
        'slide-element',
        'slide-reviews',
        '#reviewName',
      ],
    },
    `Name-${id}`,
  );
  I.fillField(
    {
      shadow: [
        'detail-module',
        'slide-element',
        'slide-reviews',
        '#reviewMessage',
      ],
    },
    `Message-${id}`,
  );

  I.executeScript(() => {
    const button = document
      .querySelector('detail-module')
      .shadowRoot.querySelector('slide-element')
      .shadowRoot.querySelector('slide-reviews')
      .shadowRoot.querySelector('#submitReview');
    button.click();
  });

  const reviewNameResult = await I.grabTextFrom({
    shadow: [
      'detail-module',
      'slide-element',
      'slide-reviews',
      '.review:nth-child(2)',
      'h2',
    ],
  });
  const reviewMessageResult = await I.grabTextFrom({
    shadow: [
      'detail-module',
      'slide-element',
      'slide-reviews',
      '.review:nth-child(2)',
      'p',
    ],
  });
  const reviewDateResult = await I.grabTextFrom({
    shadow: [
      'detail-module',
      'slide-element',
      'slide-reviews',
      '.review:nth-child(2)',
      'h3',
    ],
  });

  assert.strictEqual(reviewNameResult, `Name-${id}`);
  assert.strictEqual(reviewMessageResult, `Message-${id}`);
  assert.strictEqual(reviewDateResult, today);
});
