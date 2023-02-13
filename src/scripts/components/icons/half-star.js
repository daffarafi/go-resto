import { html, LitElement } from 'lit';

class HalfStar extends LitElement {
  render() {
    return html`<svg
      width="22"
      height="22"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 0L15.818 14.6337L0 16.0042L11.99 26.46L8.404 42L22 33.7547V0Z"
        fill="#E88F2A"
      />
      <path
        d="M22 0L28.182 14.6337L44 16.0042L32.01 26.46L35.596 42L22 33.7547V0Z"
        fill="#E5E5E5"
      />
    </svg>`;
  }
}

customElements.define('half-star', HalfStar);
