import './button-element';

class HeaderContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.style.backgroundImage = 'url("./images/heros/hero-image_4.webp")';
    this.style.display = 'flex';
    this.style.flexDirection = 'column';
    this.classList.add('margin-section');
    this.innerHTML = `
        <div class="opacity"></div>
        <div class="head-content">
            <h1><span>Go</span>Resto</h1>
        </div>
        `;
    const button = document.createElement('button-element');
    const headContent = document.querySelector('.head-content');
    button.content = {
      link: '#mainContent',
      text: 'Restaurant',
      isPrimary: true,
    };
    headContent.appendChild(button);
  }
}

customElements.define('header-content', HeaderContent);
