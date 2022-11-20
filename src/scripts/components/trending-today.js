import './restaurant-list.js';

class TrendingToday extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.classList.add('margin-section');
		this.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="margin-bottom">Trending Today</h2>
                <p class="margin-bottom">Berikut adalah restoran yang sedang ramai dikunjungi!</p>
            </div>
            <restaurant-list class="popular-restaurant"/>
        </div>
        `;
	}
}

customElements.define('trending-today', TrendingToday);
