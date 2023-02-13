import { html, LitElement } from 'lit';

class LinkedinIcon extends LitElement {
  render() {
    return html`<svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.83334 5.20301C1.83334 4.30932 2.18836 3.45224 2.8203 2.8203C3.45223 2.18837 4.30932 1.83335 5.20301 1.83335H38.7933C39.2362 1.83262 39.6749 1.91926 40.0843 2.0883C40.4936 2.25734 40.8656 2.50547 41.179 2.81846C41.4923 3.13146 41.7408 3.50319 41.9103 3.91237C42.0798 4.32154 42.1669 4.76013 42.1667 5.20301V38.7933C42.1672 39.2363 42.0803 39.675 41.9111 40.0844C41.7418 40.4938 41.4935 40.8658 41.1804 41.1791C40.8672 41.4924 40.4954 41.7409 40.0861 41.9104C39.6768 42.0798 39.2381 42.1669 38.7952 42.1667H5.20301C4.76035 42.1667 4.32202 42.0795 3.91307 41.91C3.50412 41.7405 3.13257 41.4922 2.81965 41.1791C2.50672 40.866 2.25855 40.4943 2.08932 40.0853C1.92008 39.6762 1.8331 39.2378 1.83334 38.7952V5.20301ZM17.798 17.2113H23.2595V19.954C24.0478 18.3773 26.0645 16.9583 29.095 16.9583C34.9048 16.9583 36.2817 20.0988 36.2817 25.861V36.5347H30.4022V27.1737C30.4022 23.892 29.6138 22.0403 27.6118 22.0403C24.8343 22.0403 23.6793 24.0368 23.6793 27.1737V36.5347H17.798V17.2113ZM7.71468 36.2835H13.596V16.9583H7.71468V36.2817V36.2835ZM14.4375 10.6553C14.4486 11.1589 14.359 11.6596 14.1739 12.1281C13.9889 12.5966 13.7122 13.0233 13.3599 13.3834C13.0077 13.7435 12.5871 14.0295 12.1228 14.2249C11.6586 14.4202 11.1599 14.5208 10.6563 14.5208C10.1526 14.5208 9.65396 14.4202 9.18968 14.2249C8.7254 14.0295 8.30481 13.7435 7.95259 13.3834C7.60037 13.0233 7.32361 12.5966 7.13857 12.1281C6.95353 11.6596 6.86392 11.1589 6.87501 10.6553C6.89678 9.66691 7.30472 8.7263 8.01147 8.03494C8.71822 7.34358 9.66759 6.95645 10.6563 6.95645C11.6449 6.95645 12.5943 7.34358 13.3011 8.03494C14.0078 8.7263 14.4157 9.66691 14.4375 10.6553V10.6553Z"
        fill="#494949"
      />
    </svg>`;
  }
}

customElements.define('linkedin-icon', LinkedinIcon);
