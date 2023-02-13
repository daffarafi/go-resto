import { html, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import '@elements/ButtonElement';
import '@icons/icon-404';
import Style from '@styles/pages/NotFoundStyle/index.scss';
import { navigateLinks } from './constant';

class NotFoundModule extends LitElement {
  static get styles() {
    return Style;
  }

  render() {
    return html`
      <div class="not-found">
        <div class="404-icon">
          <icon-404></icon-404>
        </div>
        <h1>404 Page Not Found</h1>
        <p>Are you sure the website URL is correct?</p>
        <p>Try to contact developer or go back to Homepage</p>
        <div class="not-found-button">
          ${map(
            navigateLinks,
            ({ text, link }) => html`
              <a href="${link}">
                <button-element
                  color="transparent"
                  color-hover="primary"
                  bg-color="primary"
                  bg-color-hover="transparent"
                  border="primary"
                  >${text}</button-element
                >
              </a>
            `,
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('notfound-module', NotFoundModule);
