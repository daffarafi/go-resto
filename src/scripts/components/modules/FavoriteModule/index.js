import { html, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import '@elements/ItemTemplate';
import '@icons/search-icon';
import Style from '@styles/pages/FavoriteStyle/index.scss';

class FavoriteModule extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    restaurants: { type: Array },
    searchCallback: { type: Function },
    _searchQuery: { type: String, attribute: false },
    isNoRestaurantFound: { type: Boolean },
  };

  constructor() {
    super();
    this.restaurants = [];
    this._searchQuery = '';
    this._handleSearch = () => {
      this.searchCallback(this._searchQuery);
    };
    this.isNoRestaurantFound = false;
  }

  render() {
    return html`
      <div class="container favorite-page margin-section">
        <div class="section-header">
          <h2 class="margin-bottom">Favorite Restaurants</h2>
          <div class="margin-bottom searchbar">
            <input
              placeholder="Restaurant or city"
              id="searchElement"
              @keyup=${(e) => {
                this._searchQuery = e.target.value;
                this._handleSearch();
              }}
            />
            <button id="searchButtonElement" @click=${this._handleSearch}>
              <search-icon></search-icon>
            </button>
          </div>
        </div>
        ${this._renderRestaurant()}
      </div>
    `;
  }

  _renderRestaurant() {
    if (this.isNoRestaurantFound) {
      return html`<div class="not-found">
        ${this._searchQuery} is not found!
      </div>`;
    }

    if (this.restaurants.length === 0) {
      return html`<div class="no-data">No data!</div>`;
    }

    return html`<div class="restaurant-list">
      ${map(
        this.restaurants,
        (restaurant) => html`<item-template
          id=${restaurant.id}
          name=${restaurant.name}
          picture-id=${restaurant.pictureId}
          rating=${restaurant.rating}
          description=${restaurant.description}
          city=${restaurant.city}
        ></item-template>`,
      )}
    </div>`;
  }
}

customElements.define('favorite-module', FavoriteModule);
