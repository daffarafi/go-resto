import { html, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import '@icons/send-icon';
import Style from '@styles/pages/DetailStyle/slide-reviews.scss';

class SlideReviews extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    customerReviews: { type: Array, attribute: 'customer-reviews' },
    submitReviewCallback: { type: Function },
    _isLoading: { type: Boolean, attribute: false },
  };

  constructor() {
    super();
    this.customerReviews = [];
    this._isLoading = false;
  }

  _addTextAreaAdjust(element) {
    element.style.height = '1px';
    element.style.height = `${25 + element.scrollHeight}px`;
  }

  _handleSubmitReview = async (name, reviewMessage) => {
    const modal = document.querySelector('modal-element');
    const popup = document.querySelector('popup-element');

    if (name.value.trim() === '') {
      modal.title = 'Warning';
      modal.content = 'Name cannot be empty!';
      modal.modalStatus = 'warning';
      modal.isOpen = true;
      return;
    }

    if (reviewMessage.value.trim() === '') {
      modal.title = 'Warning';
      modal.content = 'Review cannot be empty!';
      modal.modalStatus = 'warning';
      modal.isOpen = true;
      return;
    }

    this._isLoading = true;
    try {
      await this.submitReviewCallback(name.value, reviewMessage.value);
      this.shadowRoot.getElementById('reviewName').value = '';
      this.shadowRoot.getElementById('reviewMessage').value = '';
      popup.appendPopup('Review sent!');
    } catch (err) {
      modal.title = 'Error';
      modal.content = err;
      modal.modalStatus = 'error';
      modal.isOpen = true;
    }
    this._isLoading = false;
  };

  render() {
    return html`
      <div class="reviews-content">
        <h1>Reviews</h1>
        <div class="review-container">
          <div class="review">
            <div class="review-item-header">
              <div class="reviewer">
                <div class="profile-img"></div>
                <div class="profile-name-date">
                  <div class="profile-name">
                    <h2>
                      <input
                        class="input-name"
                        type="text"
                        id="reviewName"
                        placeholder="Your name..."
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="review-message">
              <textarea
                class="textarea"
                id="reviewMessage"
                placeholder="Write your review here!"
                @keyup=${(e) => this._addTextAreaAdjust(e.target)}
              ></textarea>
              ${this._isLoading
                ? html` <div class="small-loader"></div> `
                : html`<button
                    class="submit-review"
                    id="submitReview"
                    @click=${() => {
                      this._handleSubmitReview(
                        this.shadowRoot.getElementById('reviewName'),
                        this.shadowRoot.getElementById('reviewMessage'),
                      );
                    }}
                  >
                    <send-icon></send-icon>
                  </button>`}
            </div>
          </div>
          ${map(this.customerReviews.slice().reverse(), (review) => this._createReviewItem(review))}
        </div>
      </div>
    `;
  }

  _createReviewItem(review) {
    return html`
      <div class="review">
        <div class="review-item-header">
          <div class="reviewer">
            <div class="profile-img"></div>
            <div class="profile-name-date">
              <div class="profile-name">
                <h2>${review.name}</h2>
              </div>
              <div class="review-date">
                <h3>${review.date}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="review-message">
          <p>${review.review}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('slide-reviews', SlideReviews);
