import './restaurant-list.js';

class ExploreRestaurant extends HTMLElement {
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
                <h2 class="margin-bottom">Explore Restaurant</h2>
                <p class="margin-bottom">Jika anda sedang mencari restoran yang nyaman dan sesuai untuk anda, maka GoResto adalah website yang cocok untuk anda! Anda bisa menggunakan fitur cari dibawah atau mencari restoran satu persatu.</p>
                <div class="margin-bottom searchbar">
                    <input
                    placeholder="Restaurant or city"
                    id="searchElement"
                    type="search"
                    />
                    <button id="searchButtonElement" type="submit">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4167 5.5C20.5772 5.5 23.6082 6.7555 25.843 8.99031C28.0778 11.2251 29.3333 14.2562 29.3333 17.4167C29.3333 20.3683 28.2517 23.0817 26.4733 25.1717L26.9683 25.6667H28.4167L37.5833 34.8333L34.8333 37.5833L25.6667 28.4167V26.9683L25.1717 26.4733C23.0093 28.3191 20.2596 29.3332 17.4167 29.3333C14.2562 29.3333 11.2251 28.0778 8.99031 25.843C6.7555 23.6082 5.5 20.5772 5.5 17.4167C5.5 14.2562 6.7555 11.2251 8.99031 8.99031C11.2251 6.7555 14.2562 5.5 17.4167 5.5M17.4167 9.16667C12.8333 9.16667 9.16667 12.8333 9.16667 17.4167C9.16667 22 12.8333 25.6667 17.4167 25.6667C22 25.6667 25.6667 22 25.6667 17.4167C25.6667 12.8333 22 9.16667 17.4167 9.16667Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            <restaurant-list class="explore-restaurant"/>
        </div>
        `;
	}
}

customElements.define('explore-restaurant', ExploreRestaurant);
