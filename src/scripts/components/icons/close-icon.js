import { html, LitElement } from 'lit';

class CloseIcon extends LitElement {
  render() {
    return html`<svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.7 17L0 15.3L6.8 8.5L0 1.7L1.7 0L8.5 6.8L15.3 0L17 1.7L10.2 8.5L17 15.3L15.3 17L8.5 10.2L1.7 17Z"
        fill="#161616"
      />
    </svg> `;
  }
}

customElements.define('close-icon', CloseIcon);
