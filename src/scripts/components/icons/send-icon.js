import { html, LitElement } from 'lit';

class SendIcon extends LitElement {
  render() {
    return html`<svg
      width="54"
      height="45"
      viewBox="0 0 54 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 34V25.375L24.7895 22.5L13 19.625V11L41 22.5L13 34Z"
        fill="#E88F2A"
      />
    </svg>`;
  }
}

customElements.define('send-icon', SendIcon);
