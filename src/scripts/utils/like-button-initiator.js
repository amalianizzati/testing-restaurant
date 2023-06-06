/* eslint-disable no-shadow */
// import FavoriteRestaurantIdb from '../data/favorite-resto-idb';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRestaurants, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._data = data;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._data;
    console.log(this._data);
    if (await this._isDataExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDataExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = `
    <button aria-label="like this restaurant" id="likeButton" class="like">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
    `;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._data);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = ` <button aria-label="unlike this restaurant" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
</button>
    `;

    const likeButton = document.querySelector('#likedButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._data.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
