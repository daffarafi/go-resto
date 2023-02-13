import { html, LitElement } from 'lit';
import '@icons/target-icon';
import '@icons/checklist-icon';
import '@icons/accelerator-icon';
import Style from '@styles/pages/HomeStyle/our-services.scss';

class OurServices extends LitElement {
  static get styles() {
    return Style;
  }

  render() {
    return html`
      <section>
        <picture>
          <source
            media="(max-width: 480px)"
            srcset="./images/features-bg-small.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 480px)"
            srcset="./images/features-bg-small.jpg"
            type="image/jpeg"
          />
          <source srcset="./images/features-bg-large.webp" type="image/webp" />
          <img src="./images/features-bg-large.jpg" alt="header background" />
        </picture>
        <div class="opacity"></div>
        <div class="container">
          <div class="section-header">
            <h2>Why choose us?</h2>
          </div>
          <div class="features">
            <div class="feature-item">
              <div class="feature-logo">
                <target-icon></target-icon>
              </div>
              <h5>Akurat</h5>
              <p>Kami selalu memastikan data restoran yang akurat</p>
            </div>
            <div class="feature-item">
              <div class="feature-logo">
                <checklist-icon></checklist-icon>
              </div>
              <h5>Update</h5>
              <p>Data yang kami tampilkan adalah data terbaru</p>
            </div>
            <div class="feature-item">
              <div class="feature-logo">
                <accelerator-icon></accelerator-icon>
              </div>
              <h5>Cepat</h5>
              <p>Website kami lebih cepat 100% dari website lain</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('our-services', OurServices);
