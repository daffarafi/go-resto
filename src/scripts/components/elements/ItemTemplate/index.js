import { html, LitElement } from 'lit';
import '@elements/ButtonElement';
import Styles from '@styles/elements/ItemTemplateStyle/index.scss';
import { LazyLoad } from '@utils';

class ItemTemplate extends LitElement {
  static get styles() {
    return Styles;
  }

  static properties = {
    id: { type: String },
    name: { type: String },
    pictureId: { type: String, attribute: 'picture-id' },
    rating: { type: Number },
    description: { type: String },
    city: { type: String },
  };

  constructor() {
    super();
    this.id = 'no-id';
    this.name = '<no-name>';
    this.pictureId = 'default';
    this.rating = 0;
    this.description = '<no-desc>';
    this.city = '-';
  }

  _createLazyLoadImage() {
    const img = document.createElement('img');
    img.setAttribute(
      'data-src',
      `https://restaurant-api.dicoding.dev/images/small/${this.pictureId}`,
    );
    img.setAttribute('alt', this.name);
    LazyLoad.observe(img);
    return img;
  }

  render() {
    return html`
      <div class="item-container">
        <div class="restaurant-cover">${this._createLazyLoadImage()}</div>
        <div class="restaurant-detail">
          <div class="restaurant-detail-text">
            <h4><span>★</span>${this.rating}</h4>
            <h3>${this.name}</h3>
            <p>${this.description}</p>
          </div>
          <button-element
            is-link
            href="/#/detail/${this.id}"
            color="transparent"
            color-hover="primary"
            bg-color="primary"
            bg-color-hover="transparent"
            border="primary"
            aria-label="Read more about ${this.name}"
            >Read more</button-element
          >
        </div>
        <div class="restaurant-city">
          <p>${this.city}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('item-template', ItemTemplate);
