import { html, LitElement } from 'lit';
import Style from '@styles/pages/HomeStyle/header-content.scss';
import '@elements/ButtonElement';

class HeaderContent extends LitElement {
  static get styles() {
    return Style;
  }

  _jumpToExploreRestaurant() {
    const exploreRestaurant = document
      .querySelector('home-module')
      .shadowRoot.querySelector('explore-restaurant')
      .shadowRoot.getElementById('exploreRestaurant');
    exploreRestaurant.scrollIntoView();
  }

  render() {
    return html`
      <section>
        <picture>
          <source
            media="(max-width: 480px)"
            srcset="./images/hero-image_4-small.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 480px)"
            srcset="./images/hero-image_4-small.jpg"
            type="image/jpeg"
          />
          <source srcset="./images/hero-image_4-large.webp" type="image/webp" />
          <img src="./images/hero-image_4-large.jpg" alt="header background" />
        </picture>
        <div class="opacity"></div>
        <div class="head-content">
          <h1><span>Go</span>Resto</h1>
          <button-element
            color="transparent"
            color-hover="primary"
            bg-color="primary"
            bg-color-hover="transparent"
            border="primary"
            .clickEvent=${this._jumpToExploreRestaurant}
            >RESTAURANTS</button-element
          >
        </div>
      </section>
    `;
  }
}

customElements.define('header-content', HeaderContent);
