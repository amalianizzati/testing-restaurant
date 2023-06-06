/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
<div class= "detail">
  <h1 class="resto-name">${restaurant.name}</h1>
  <img class= lazyload height="400px" witdh="100%" data-src="${
    CONFIG.MEDIUM_BASE_IMAGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" />
    <div class="info">
        <h2>Informasi Restaurant</h2>
        <h3>Kota</h3>
            <p>${restaurant.city}</p>
        <h3>Rating</h3>
            <p>${restaurant.rating}</p>
            <h3>Menu Makanan</h3>
            <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
            <h3>Menu Minuman</h3>
            <p>${restaurant.menus.drinks
              .map((drink) => drink.name)
              .join(', ')}</p>
    </div>
    <div class= "description">
        <h3>Deskripsi</h3>
          <p>${restaurant.description}</p>
    </div>
</div>
    <div class="customer-reviews">
        <h3>Customer Reviews</h3>${restaurant.customerReviews
          .map(
            (review) => `
            <div class="review">
               <span class="name">${review.name}</span>  <span class="date">${review.date}</span></p>
               <p>${review.review}</p>
                
            </div>`
          )
          .join('')}
    </div>`;
const createRestoItemTemplate = (restaurants) => `
<div class="restaurant col" tabindex="0">
<div class="card">
    <div class="card-img">
        <div class="city-label">
            <span class="city-label-text">
                Kota ${restaurants.city || '-'}
            </span>
        </div>
        <img class="lazyload" height="200px" width="100%" data-src="${
          CONFIG.MEDIUM_BASE_IMAGE_URL + restaurants.pictureId
        }" alt="${restaurants.name || '-'}">
    </div>
    <div class="card-body">
        <div class="rating">
            <i class="fas fa-star"></i>
            <span>${restaurants.rating || '-'}</span>
        </div>
        <h3 class="restaurant__title">
            <a href="./#/detail/${
              restaurants.id
            }" title="Link ke halaman detail makanan">${
  restaurants.name || '-'
}</a>
        </h3>
        <p class="card-text">${restaurants.description || '-'}</p>
    </div>
</div>
</div>>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
