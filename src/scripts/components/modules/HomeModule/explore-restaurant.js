import { html, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import '@elements/ItemTemplate';
import '@icons/search-icon';
import Style from '@styles/pages/HomeStyle/explore-restaurant.scss';

class ExploreRestaurant extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    restaurants: { type: Array },
    searchCallback: { type: Function },
    _searchQuery: { type: String, attribute: false },
    isNoRestaurantFound: { type: Boolean },
    _isLoading: { type: Boolean, attribute: false },
  };

  constructor() {
    super();
    this.restaurants = [];
    this._searchQuery = '';
    this.isNoRestaurantFound = false;
    this._isLoading = false;
  }

  async _handleSearch() {
    this._isLoading = true;
    try {
      await this.searchCallback(this._searchQuery);
    } catch (err) {
      const modal = document.querySelector('modal-element');
      modal.title = 'Error';
      modal.content = err;
      modal.modalStatus = 'error';
      modal.isOpen = true;
    }
    this._isLoading = false;
  }

  render() {
    return html`
      <section class="container" id="exploreRestaurant">
        <div class="section-header">
          <h2 class="margin-bottom">Explore Restaurant</h2>
          <p class="margin-bottom">
            Jika anda sedang mencari restoran yang nyaman dan sesuai untuk anda,
            maka GoResto adalah website yang cocok untuk anda! Anda bisa
            menggunakan fitur cari dibawah atau mencari restoran satu persatu.
          </p>
          <div class="margin-bottom searchbar">
            <input
              placeholder="Restaurant or city"
              id="searchElement"
              @keyup=${async (e) => {
                this._searchQuery = await e.target.value;
                await this._handleSearch();
              }}
            />
            <button
              id="searchButtonElement"
              aria-label="search restaurant"
              @click=${this._handleSearch}
            >
              <search-icon></search-icon>
            </button>
          </div>
        </div>
        ${this._isLoading
          ? html`<div class="loader"></div>`
          : this._renderRestaurant()}
      </section>
    `;
  }

  _renderRestaurant() {
    if (this.isNoRestaurantFound) {
      return html`<div class="not-found">
        ${this._searchQuery} is not found!
      </div>`;
    }

    if (this.restaurants.length === 0) {
      return html`<div class="loader"></div>`;
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

customElements.define('explore-restaurant', ExploreRestaurant);
