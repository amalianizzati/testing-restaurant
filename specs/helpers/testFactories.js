import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithRestaurant = async (data) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    data,
  });
};

export { createLikeButtonPresenterWithRestaurant };
