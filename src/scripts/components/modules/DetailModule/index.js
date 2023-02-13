import { html, LitElement } from 'lit';
import { CONFIG } from '@globals';
import '@icons/full-star';
import '@icons/half-star';
import '@icons/empty-star';
import './slide-element';
import '@elements/ButtonElement';
import Style from '@styles/pages/DetailStyle/index.scss';

class DetailModule extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    restaurantDetail: { type: Object },
    isFavorited: { type: Boolean, attribute: 'is-favorite' },
    favoriteButtonCallback: { type: Function },
    submitReviewCallback: { type: Function },
  };

  constructor() {
    super();
    this.restaurantDetail = {};
    this.favoriteButtonCallback = async () => {};
    this.isFavorited = false;
  }

  async _favoriteButtonHandler(e) {
    e.preventDefault();
    const popup = document.querySelector('popup-element');
    const modal = document.querySelector('modal-element');
    try {
      const message = await this.favoriteButtonCallback();
      popup.appendPopup(message);
    } catch (err) {
      modal.title = 'Error';
      modal.content = err;
      modal.modalStatus = 'error';
      modal.isOpen = true;
    }
  }

  render() {
    return html`<div class="restaurant-detail">
      <div class="restaurant-image" id="restaurantImage">
        ${Object.keys(this.restaurantDetail).length === 0
          ? html`<div class="loader"></div>`
          : html`<img
              src="${CONFIG.BASE_IMAGE_URL}large/${this.restaurantDetail
                .pictureId}"
              alt=""
            />`}
      </div>
      <div class="container" id="restaurantDetail">
        ${Object.keys(this.restaurantDetail).length === 0
          ? html`<div class="loader"></div>`
          : html`<div class="restaurant-detail">
              <div class="restaurant-name" id="restaurantName">
                <h1>
                  ${this.restaurantDetail.name ?? html`<i>No name provided</i>`}
                </h1>
                <button-element
                  color="transparent"
                  color-hover="primary"
                  bg-color="primary"
                  bg-color-hover="transparent"
                  border="primary"
                  aria-label=${this.isFavorited
                    ? 'unfavorite this restaurant'
                    : 'favorite this restaurant'}
                  .clickEvent=${(e) => this._favoriteButtonHandler(e)}
                  >${this.isFavorited
                    ? 'REMOVE FROM FAVORITE'
                    : 'ADD TO FAVORITE'}</button-element
                >
              </div>
              <div class="restaurant-city" id="restaurantCity">
                <h2>
                  ${this.restaurantDetail.city || html`<i>No city provided</i>`}
                </h2>
              </div>
              <div class="restaurant-rating" id="restaurantRating">
                <div class="star">${html`${this._createStarReview()}`}</div>
                <div class="rating-label">
                  <h3>
                    ${this.restaurantDetail.rating} |
                    ${this.restaurantDetail.customerReviews?.length ?? 0}
                    Review(s)
                  </h3>
                </div>
              </div>
              <div class="restaurant-desc" id="restaurantDesc">
                <h4>Description</h4>
                <p>
                  ${this.restaurantDetail.description
                  ?? html`<i>No desc provided</i>`}
                </p>
              </div>
              <slide-element
                menus=${JSON.stringify(this.restaurantDetail.menus)}
                address=${this.restaurantDetail.address}
                customer-reviews=${JSON.stringify(
                  this.restaurantDetail.customerReviews,
                )}
                .submitReviewCallback=${this.submitReviewCallback}
              ></slide-element>
            </div>`}
      </div>
    </div>`;
  }

  _createStarReview() {
    let starCount = this.restaurantDetail.rating;
    const star = [];
    for (let i = 0; i < 5; i += 1) {
      if (starCount >= 1) {
        star.push(html`<full-star></full-star>`);
      } else if (starCount > 0) {
        star.push(html`<half-star></half-star`);
      } else {
        star.push(html`<empty-star></empty-star>`);
      }
      starCount -= 1;
    }
    return star;
  }
}

customElements.define('detail-module', DetailModule);
