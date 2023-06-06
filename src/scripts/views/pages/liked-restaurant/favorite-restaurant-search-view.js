/* eslint-disable comma-dangle */
import { createRestoItemTemplate } from '../../templates/template-creator';

/* eslint-disable implicit-arrow-linebreak */
class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
          <div id="restaurant-search-container">
              <input id="query" type="text">
              <div class="restaurant-result-container">
                  <ul class="restaurants">
                  </ul>
              </div>
          </div>
          `;
  }

  getFavoriteRestaurantTemplate() {
    return `
    <div class="content">
        <input id= "query" type="text">
        <div id ="restaurants" class= "restaurants">
            <h2 class="content__heading">Your liked Restaurant</h2>
              <div id= "restaurant-search-container">
              </div>
        </div>
    </div>`;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestoItemTemplate(restaurant)),
        ''
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant__not__found "> Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
