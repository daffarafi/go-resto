import { html, LitElement } from 'lit';
import '@elements/ButtonElement';
import '@icons/error-icon';
import '@icons/warning-icon';
import '@icons/success-icon';
import '@icons/close-icon';
import Style from '@styles/elements/ModalElement/index.scss';

class ModalElement extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    title: { type: String },
    content: { type: String },
    buttonLabel: { type: String, attribute: 'button-label' },
    modalStatus: { type: String, attribute: 'modal-status' },
    isOpen: { type: Boolean },
    _isButtonFullWidth: { type: Boolean, attribute: false },
    buttonCallback: { type: Function },
  };

  constructor() {
    super();
    this.isOpen = false;
    this._isButtonFullWidth = false;
    this.modalStatus = 'success';
    this.title = 'Welcome!';
    this.content = 'You can close this pop-up by click the button below!';
    this.buttonLabel = 'CLOSE';
    window.addEventListener('resize', () => {
      this._setButtonFullWidth();
    });
  }

  _closeModal(e) {
    e.stopPropagation();
    this.isOpen = false;
  }

  _renderStatusIcon() {
    if (this.modalStatus === 'error') {
      return html`<error-icon></error-icon>`;
    }
    if (this.modalStatus === 'warning') {
      return html`<warning-icon></warning-icon>`;
    }
    return html`<success-icon></success-icon>`;
  }

  _setButtonFullWidth() {
    if (window.innerWidth >= 1024) {
      this._isButtonFullWidth = false;
    } else {
      this._isButtonFullWidth = true;
    }
  }

  buttonCallback(e) {
    this._closeModal(e);
  }

  render() {
    this._setButtonFullWidth();
    return html`<div class="modal-container ${this.isOpen ? '' : 'invisible'}">
      <div
        class="container ${this.isOpen ? 'show-up' : ''}"
        @click=${(e) => this._closeModal(e)}
      >
        <div
          class="modal-box ${this.isOpen ? 'show-up' : ''}"
          @click=${(e) => {
            e.stopPropagation();
          }}
        >
          <div class="modal-status-logo">${this._renderStatusIcon()}</div>
          <div class="modal-body">
            <div class="modal-title">
              <h1>${this.title}</h1>
              <button-element
                color="transparent"
                color-hover="transparent"
                bg-color="transparent"
                bg-color-hover="transparent"
                border="transparent"
                .clickEvent=${(e) => this._closeModal(e)}
              >
                <close-icon></close-icon>
              </button-element>
            </div>
            <p>${this.content}</p>
            <div class="modal-button">
              <button-element
                ?is-full-width=${this._isButtonFullWidth}
                color="transparent"
                color-hover="primary"
                bg-color="primary"
                bg-color-hover="transparent"
                border="primary"
                .clickEvent=${(e) => this.buttonCallback(e)}
              >
                ${this.buttonLabel}
              </button-element>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define('modal-element', ModalElement);
