import './restaurant-list.js';

class TrendingToday extends HTMLElement {
	constructor() {
		super();
	}

	set isEnglish(isEnglish) {
		this._isEnglish = isEnglish;
		this.render();
	}

	connectedCallback() {
		this.isEnglish = false;
	}

	render() {
		this.classList.add('margin-section');
		this.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="margin-bottom">Trending Today</h2>
                ${
					this._isEnglish
						? `<p class="margin-bottom">Check out today's trending restaurant!</p>`
						: `<p class="margin-bottom">Berikut adalah restoran yang sedang ramai dikunjungi!</p>`
				}
                
            </div>
            <restaurant-list class="popular-restaurant"/>
        </div>
        `;
	}
}

customElements.define('trending-today', TrendingToday);
