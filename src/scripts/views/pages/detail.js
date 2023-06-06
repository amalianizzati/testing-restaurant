/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import '../../component/resto-detail';

const Detail = {
  async render() {
    return `
    <resto-detail></resto-detail>
    <div id="likeButtonContainer"></div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailResto(url.id);
    const data = restaurantById.restaurant;
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(data);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      // eslint-disable-next-line no-undef
      data,
      // eslint-disable-next-line no-undef
      id: data.id,
      name: data.name,
      description: data.description,
      rating: data.rating,
      pictureId: data.pictureId,
      city: data.city,
    });
  },
};
export default Detail;
