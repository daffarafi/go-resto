import { html, LitElement } from 'lit';

class WarningIcon extends LitElement {
  render() {
    return html`<svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 0C16.128 0 0 16.128 0 36C0 55.872 16.128 72 36 72C55.872 72 72 55.872 72 36C72 16.128 55.872 0 36 0ZM39.6 54H32.4V46.8H39.6V54ZM39.6 39.6H32.4V18H39.6V39.6Z"
        fill="#FFBB01"
      />
    </svg> `;
  }
}

customElements.define('warning-icon', WarningIcon);
