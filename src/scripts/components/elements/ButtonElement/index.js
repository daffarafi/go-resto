import { html, LitElement } from 'lit';
import Style from '@styles/elements/ButtonElement/index.scss';

class ButtonElement extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    isFullWidth: { type: Boolean, attribute: 'is-full-width' },
    isDisabled: { type: Boolean, attribute: 'is-disabled' },
    isLink: { type: Boolean, attribute: 'is-link' },
    href: { type: String },
    clickEvent: { type: Function },
    color: { type: String },
    colorHover: { type: String, attribute: 'color-hover' },
    bgColor: { type: String, attribute: 'bg-color' },
    bgColorHover: { type: String, attribute: 'bg-color-hover' },
    border: { type: String },
    ariaLabel: { type: String, attribute: 'aria-label' },
  };

  constructor() {
    super();
    this._classOption = ['primary', 'secondary', 'transparent'];
    this.isFullWidth = false;
    this.isDisabled = false;
    this.isLink = false;
    this.href = '#';
    this.color = 'primary';
    this.colorHover = 'primary';
    this.bgColor = 'primary';
    this.bgColorHover = 'primary';
    this.border = 'primary';
    this.ariaLabel = '';
    this.clickEvent = (e) => {
      e.stopPropagation();
    };
  }

  _subclassSelector(subclass) {
    if (this._classOption.includes(subclass)) {
      return subclass;
    }
    return 'primary';
  }

  _setHostFullWidth() {
    if (this.isFullWidth) {
      this.style = 'width: 100%';
    } else {
      this.style = '';
    }
  }

  _renderButton() {
    return html`
      <button
        type="button"
        ?disabled=${this.isDisabled}
        @click=${this.clickEvent}
        aria-label=${this.ariaLabel}
        class="button ${this.isFullWidth ? 'full-width' : ''}
        color-${this._subclassSelector(this.color)}
        color-hover-${this._subclassSelector(this.colorHover)}
        bg-color-${this._subclassSelector(this.bgColor)} 
        bg-color-hover-${this._subclassSelector(this.bgColorHover)}
        border-${this._subclassSelector(this.border)} 
        "
      >
        <slot></slot>
      </button>
    `;
  }

  _renderAnchor() {
    return html`
      <a
        href="${this.isDisabled ? '#' : this.href}"
        @click=${this.clickEvent}
        aria-label=${this.ariaLabel}
        class="button ${this.isFullWidth ? 'full-width' : ''}
        color-${this._subclassSelector(this.color)}
        color-hover-${this._subclassSelector(this.colorHover)}
        bg-color-${this._subclassSelector(this.bgColor)} 
        bg-color-hover-${this._subclassSelector(this.bgColorHover)}
        border-${this._subclassSelector(this.border)} "
      >
        <slot></slot>
      </a>
    `;
  }

  render() {
    this._setHostFullWidth();
    return html`${this.isLink ? this._renderAnchor() : this._renderButton()}`;
  }
}

customElements.define('button-element', ButtonElement);
