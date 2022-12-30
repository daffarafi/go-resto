import SubmitReviewInitiator from '../utils/submit-review-initiator';

class ReviewsContent extends HTMLElement {
  set reviews({ reviews, restaurantId }) {
    this._reviews = reviews;
    this._restaurantId = restaurantId;
    this.render();
    this._afterRender();
    this._addTextAreaAdjust();
  }

  render() {
    this.innerHTML = `
    <h1>Reviews</h1>
    <div class="review-container">
    <div class="review">
      <div class="review-item-header">
        <div class="reviewer">
          <div class="profile-img"></div>
          <div class="profile-name-date">
            <div class="profile-name">
              <h4><input class='input-name' type="text" id='reviewName' placeholder="Your name..."></h4>
            </div>
          </div>
        </div>
      </div>
      <div class="review-message">
        <textarea class="textarea" id='reviewMessage' placeholder="Write your review here!"></textarea>
        <button class='submit-review' id='submitReview'>
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 18.5V11.5625L9.26316 9.25L0 6.9375V0L22 9.25L0 18.5Z" fill="#E88F2A"/>
          </svg>
        </button>
      </div>
    </div>
    ${this._reviews
      .map((review) => this._createReviewItem(review))
      .join('')}</div>
    `;
  }

  _afterRender() {
    SubmitReviewInitiator.init({
      submitButton: document.getElementById('submitReview'),
      restaurantId: this._restaurantId,
      reviewMessage: document.getElementById('reviewMessage'),
      reviewName: document.getElementById('reviewName'),
    });
  }

  _createReviewItem(review) {
    return `
    <div class="review">
      <div class="review-item-header">
        <div class="reviewer">
          <div class="profile-img"></div>
          <div class="profile-name-date">
            <div class="profile-name">
              <h4>${review.name}</h4>
            </div>
            <div class="review-date">
              <h5>${review.date}</h5>
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

  _addTextAreaAdjust() {
    const textArea = document.getElementById('reviewMessage');
    textArea.addEventListener('keyup', () => {
      textArea.style.height = '1px';
      textArea.style.height = `${25 + textArea.scrollHeight}px`;
    });
  }
}

customElements.define('reviews-content', ReviewsContent);
