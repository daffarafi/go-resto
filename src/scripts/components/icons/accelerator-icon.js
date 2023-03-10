import { html, LitElement } from 'lit';

class AcceleratorIcon extends LitElement {
  render() {
    return html`<svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_126_16)">
        <path
          d="M21.318 29.6743L17.5652 25.751L30.0153 14.8372L32.2337 17.2242L21.318 29.6743ZM37.5192 40.7605C41.4425 36.8372 44 31.3793 44 25.2395C44 13.1322 34.1092 3.2395 22 3.2395C9.89083 3.2395 0 13.1322 0 25.2395C0 31.3812 2.387 36.8372 6.48083 40.7605L9.54983 37.6897C6.31033 34.4502 4.43483 30.1858 4.43483 25.2413C4.43121 22.9335 4.88305 20.6475 5.76446 18.5146C6.64586 16.3817 7.93951 14.4436 9.57126 12.8115C11.203 11.1794 13.1408 9.88538 15.2735 9.00353C17.4063 8.12168 19.6921 7.66936 22 7.6725C24.3076 7.66936 26.5931 8.12156 28.7256 9.00318C30.8581 9.8848 32.7957 11.1785 34.4274 12.8102C36.0591 14.4419 37.3529 16.3795 38.2345 18.5121C39.1161 20.6446 39.5683 22.9301 39.5652 25.2377C39.5652 30.0135 37.5192 34.4483 34.4502 37.6878L37.5192 40.7605Z"
          fill="#E88F2A"
        />
      </g>
      <defs>
        <clipPath id="clip0_126_16">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>`;
  }
}

customElements.define('accelerator-icon', AcceleratorIcon);
