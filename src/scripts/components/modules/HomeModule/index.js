import { html, LitElement } from 'lit';
import './header-content';
import './explore-restaurant';
import './our-services';
import './trending-today';
import Style from '@styles/pages/HomeStyle/index.scss';

class HomeModule extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    restaurants: { type: Array },
    trendingRestaurants: { type: Array },
    isNoRestaurantFound: { type: Boolean },
  };

  constructor() {
    super();
    this.restaurants = [];
    this.trendingRestaurants = [];
    this.isNoRestaurantFound = false;
  }

  render() {
    return html`
      <div>
        <header-content class="margin-section block"></header-content>
        <explore-restaurant
          restaurants=${JSON.stringify(this.restaurants)}
          .searchCallback=${this.searchCallback}
          ?isNoRestaurantFound=${this.isNoRestaurantFound}
          class="margin-section block"
        ></explore-restaurant>
        <our-services class="margin-section block"></our-services>
        <trending-today
          restaurants=${JSON.stringify(this.trendingRestaurants)}
          class="margin-section block"
        ></trending-today>
      </div>
    `;
  }
}

customElements.define('home-module', HomeModule);
