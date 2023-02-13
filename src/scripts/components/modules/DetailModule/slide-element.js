import { html, LitElement } from 'lit';
import './slide-menus';
import './slide-address';
import './slide-reviews';
import Style from '@styles/pages/DetailStyle/slide-element.scss';

class SlideElement extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    menus: { type: Object },
    address: { type: String },
    customerReviews: { type: Array, attribute: 'customer-reviews' },
    sliderContent: { attribute: false },
    submitReviewCallback: { type: Function },
    _selectedSlider: { type: String, attribute: false },
  };

  constructor() {
    super();
    this.menus = {};
    this.address = '-';
    this.customerReviews = [];
    this._selectedSlider = 'menus';
  }

  willUpdate(changed) {
    if (changed.has('menus') && this.menus) {
      this._renderMenus();
      return;
    }
    if (changed.has('customerReviews') && this.customerReviews) {
      this._renderReviews();
    }
  }

  render() {
    return html`
      <div>
        <div class="slider">
          <button
            @click=${this._renderMenus}
            class="${this._selectedSlider === 'menus' ? 'selected' : ''}"
          >
            <p>Menus</p>
            <div class="block"></div>
          </button>
          <button
            @click=${this._renderAddress}
            class="${this._selectedSlider === 'address' ? 'selected' : ''}"
          >
            <p>Address</p>
            <div class="block"></div>
          </button>
          <button
            @click=${this._renderReviews}
            class="${this._selectedSlider === 'reviews' ? 'selected' : ''}"
          >
            <p>Reviews</p>
            <div class="block"></div>
          </button>
        </div>
        <div class="slider-content" id="sliderContent">
          ${this.sliderContent}
        </div>
      </div>
    `;
  }

  _renderMenus() {
    this.sliderContent = html`<slide-menus
      menus=${JSON.stringify(this.menus)}
    ></slide-menus>`;
    this._selectedSlider = 'menus';
  }

  _renderAddress() {
    this.sliderContent = html`<slide-address
      address=${this.address}
    ></slide-address>`;
    this._selectedSlider = 'address';
  }

  _renderReviews() {
    this.sliderContent = html`<slide-reviews
      customer-reviews=${JSON.stringify(this.customerReviews)}
      .submitReviewCallback=${this.submitReviewCallback}
    ></slide-reviews>`;
    this._selectedSlider = 'reviews';
  }
}

customElements.define('slide-element', SlideElement);
