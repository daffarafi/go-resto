import SlideButtonInitiator from '../utils/slide-button-initiator';
import RestaurantDetailInitiator from '../utils/restauant-detail-initiator';
import FavoriteButtonInitiator from '../utils/favorite-button-initiator';
import './slide-button';
import './menus-content';
import './address-content';
import './reviews-content';
import './favorite-button';

class RestaurantDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurantDetail(restaurantDetail) {
    this._restaurantDetail = restaurantDetail;
    this._afterRender();
    this._sliderInit();
    this._favoriteButtonHandler();
  }

  render() {
    this.innerHTML = `
    <div class="restaurant-image" id="restaurantImage">
      <div class="loader"></div>
    </div>
    <div class="container" id="restaurantDetail"> 
      <div class="loader"></div>
    </div>

    `;
  }

  _afterRender() {
    const restaurantImageContainer = document.getElementById('restaurantImage');
    const restaurantDetailContainer =
      document.getElementById('restaurantDetail');

    restaurantImageContainer.innerHTML = `
      <img src="https://restaurant-api.dicoding.dev/images/large/${this._restaurantDetail.pictureId}" alt="">
    `;

    restaurantDetailContainer.innerHTML = `
      <div class="restaurant-detail">
        <div class="restaurant-name" id="restaurantName">
          <h1>${this._restaurantDetail.name}</h1>
          <favorite-button></favorite-button>
        </div>
        <div class="restaurant-city" id="restaurantCity">
          <h2>${this._restaurantDetail.city}</h2>
        </div>
        <div class="restaurant-rating" id="restaurantRating">
          <div class="star">
            ${this._createStarReview()}
          </div>
          <div class="rating-label">
            <h3>${this._restaurantDetail.rating} | ${
      this._restaurantDetail.customerReviews.length
    } Review(s)</h3>
          </div>
        </div>
        <div class="restaurant-desc" id="restaurantDesc">
          <h4>Description</h4>
          <p>${this._restaurantDetail.description}</p>
        </div>
        <div class="slider">
          <slide-button id="menusSlideButton" class='selected'></slide-button>
          <slide-button id="addressSlideButton"></slide-button>
          <slide-button id="reviewsSlideButton"></slide-button>
        </div>
        <div class='slider-content' id="sliderContent">
          <menus-content id='menusContent'></menus-content>
          <address-content id='addressContent' class="hidden"></address-content>
          <reviews-content id='reviewsContent' class="hidden"></reviews-content>
        </div>
      </div>
    `;
  }

  _createStarReview() {
    let starCount = this._restaurantDetail.rating;
    let star = '';
    for (let i = 0; i < 5; i += 1) {
      if (starCount >= 1) {
        star += `<svg width="22" height="22" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 0L15.818 14.6337L0 16.0042L11.99 26.46L8.404 42L22 33.7547V0Z" fill="#E88F2A"/>
        <path d="M22 0L28.182 14.6337L44 16.0042L32.01 26.46L35.596 42L22 33.7547V0Z" fill="#E88F2A"/>
        </svg>`;
      } else if (starCount > 0) {
        star += `<svg width="22" height="22" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 0L15.818 14.6337L0 16.0042L11.99 26.46L8.404 42L22 33.7547V0Z" fill="#E88F2A"/>
        <path d="M22 0L28.182 14.6337L44 16.0042L32.01 26.46L35.596 42L22 33.7547V0Z" fill="#E5E5E5"/>
        </svg>
        `;
      } else {
        star += `<svg width="22" height="22" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 0L15.818 14.6337L0 16.0042L11.99 26.46L8.404 42L22 33.7547V0Z" fill="#E5E5E5"/>
        <path d="M22 0L28.182 14.6337L44 16.0042L32.01 26.46L35.596 42L22 33.7547V0Z" fill="#E5E5E5"/>
        </svg>
        `;
      }
      starCount -= 1;
    }
    return star;
  }

  _sliderInit() {
    const { id, menus, address, customerReviews } = this._restaurantDetail;
    const menusContent = document.getElementById('menusContent');
    const addressContent = document.getElementById('addressContent');
    const reviewsContent = document.getElementById('reviewsContent');

    RestaurantDetailInitiator.init({
      menusContent,
      addressContent,
      reviewsContent,
      menus,
      address,
      customerReviews,
      restaurantId: id,
    });

    SlideButtonInitiator.init({
      menusSlideButton: document.getElementById('menusSlideButton'),
      addressSlideButton: document.getElementById('addressSlideButton'),
      reviewsSlideButton: document.getElementById('reviewsSlideButton'),
      menusContent,
      addressContent,
      reviewsContent,
    });
  }

  _favoriteButtonHandler() {
    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('favorite-button'),
      restaurant: this._restaurantDetail,
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
