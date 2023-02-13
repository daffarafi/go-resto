import { html, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import '@elements/ButtonElement';
import Style from '@styles/elements/PopupElement/index.scss';

class PopupElement extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    popupMessageList: { type: Array, attribute: 'popup-data-list' },
    appendPopup: { type: Function },
  };

  constructor() {
    super();
    this.popupMessageList = [];
  }

  _closePopup(index) {
    this.popupMessageList = this.popupMessageList.filter((_, i) => i !== index);
  }

  appendPopup(message) {
    this.popupMessageList = [message, ...this.popupMessageList];
  }

  render() {
    return html`<div class="popup-element">
      <div class="popup-container">
        ${map(
          this.popupMessageList.slice(0, 3),
          (popupMessage) => html`<div class="popup-box">
            <p>${popupMessage}</p>
            <button-element
              color="primary"
              color-hover="secondary"
              bg-color="transparent"
              bg-color-hover="primary"
              border="primary"
              .clickEvent=${() => this._closePopup(this.popupMessageList.indexOf(popupMessage))}
              ><span>OK</span></button-element
            >
          </div>`,
        )}
      </div>
    </div>`;
  }
}

customElements.define('popup-element', PopupElement);
