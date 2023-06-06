/* eslint-disable operator-linebreak */
import '../../component/resto-fav';
import { createRestoItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
    <div id= "query" class ="content">
      <h2 class ="content__heading">Your Liked Restaurant</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML =
        '<h2 class="restaurant__not__found">Tidak ada restaurant untuk ditampilkan</h2>';
    }
  },
};

export default Favorite;
