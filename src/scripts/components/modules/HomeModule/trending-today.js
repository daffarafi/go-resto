import { html, LitElement } from 'lit';
import '@elements/ItemTemplate';
import { map } from 'lit/directives/map.js';
import Style from '@styles/pages/HomeStyle/trending-today.scss';

class TrendingToday extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    restaurants: { type: Array },
  };

  constructor() {
    super();
    this.restaurants = [];
  }

  render() {
    return html`
      <section class="container">
        <div class="section-header">
          <h2 class="margin-bottom">Trending Today</h2>
          <p class="margin-bottom">
            Berikut adalah restoran yang sedang ramai dikunjungi!
          </p>
        </div>
        ${this.restaurants.length === 0
          ? html`<div class="loader"></div>`
          : html` <div class="restaurant-list">
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
            </div>`}
      </section>
    `;
  }
}

customElements.define('trending-today', TrendingToday);
