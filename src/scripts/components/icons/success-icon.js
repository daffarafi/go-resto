import { html, LitElement } from 'lit';

class SuccessIcon extends LitElement {
  render() {
    return html`<svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 0C16.2 0 0 16.2 0 36C0 55.8 16.2 72 36 72C55.8 72 72 55.8 72 36C72 16.2 55.8 0 36 0ZM28.8 54L10.8 36L15.876 30.924L28.8 43.812L56.124 16.488L61.2 21.6L28.8 54Z"
        fill="#008000"
      />
    </svg> `;
  }
}

customElements.define('success-icon', SuccessIcon);
