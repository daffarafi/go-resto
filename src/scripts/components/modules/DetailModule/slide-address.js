import { html, LitElement } from 'lit';
import Style from '@styles/pages/DetailStyle/slide-address.scss';

class SlideAddress extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    address: { type: String },
  };

  constructor() {
    super();
    this.address = '-';
  }

  render() {
    return html`
      <div class="address-content">
        <h1>Address</h1>
        <p>${this.address}</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3878519652994!2d106.82609847562772!3d-6.370209836943294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1ad14fb6cf%3A0xc94e4d829420fa15!2sFakultas%20Ilmu%20Komputer%20(Fasilkom)%20UI!5e0!3m2!1sid!2sid!4v1672202685796!5m2!1sid!2sid"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    `;
  }
}

customElements.define('slide-address', SlideAddress);
