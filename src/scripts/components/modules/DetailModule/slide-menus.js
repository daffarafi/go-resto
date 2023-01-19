import { html, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import Style from '@styles/pages/DetailStyle/slide-menus.scss';

class SlideMenus extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    menus: { type: Object },
  };

  constructor() {
    super();
    this.menus = {};
  }

  render() {
    return html`
      <div class="menus-content">
        <h1>Menus</h1>
        <div class="menus-container" id="menusContainer">
          ${map(
            Object.entries(this.menus),
            (menuDetail) => this._createMenuContainer(...menuDetail),
          )}
        </div>
      </div>
    `;
  }

  _createMenuContainer(categoryTitle, menuList) {
    return html`
      <h2>${categoryTitle}</h2>
      <div class="menu-container">
        ${map(
          menuList,
          (menu) => html`
            <div class="menu-item">
              <div class="menu-image"></div>
              <div class="menu-title">
                <h3>${menu.name}</h3>
              </div>
            </div>
          `,
        )}
      </div>
    `;
  }
}

customElements.define('slide-menus', SlideMenus);
