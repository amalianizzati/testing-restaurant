/* eslint-disable comma-dangle */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');
  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 10);
  I.seeElement('.restaurant__title a');

  const firstResto = locate('.restaurant__title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 4);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');

  const likedRestoName = await I.grabTextFrom('.restaurant__title a');
  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');
  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 10);
  I.seeElement('.restaurant__title a');

  const firstResto = locate('.restaurant__title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 4);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');

  const likedRestoName = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestoName, likedRestoName);
});
