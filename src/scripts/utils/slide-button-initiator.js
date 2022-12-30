const SlideButtonInitiator = {
  init({
    menusSlideButton,
    addressSlideButton,
    reviewsSlideButton,
    menusContent,
    addressContent,
    reviewsContent,
  }) {
    this._menusSlideButton = menusSlideButton;
    this._addressSlideButton = addressSlideButton;
    this._reviewsSlideButton = reviewsSlideButton;
    this._menusContent = menusContent;
    this._addressContent = addressContent;
    this._reviewsContent = reviewsContent;

    this._menusSlideButton.buttonLabel = 'Menus';
    this._menusSlideButton.addEventListener('click', (event) => {
      this._showMenusContent(event);
    });

    this._addressSlideButton.buttonLabel = 'Address';
    this._addressSlideButton.addEventListener('click', (event) => {
      this._showAddressContent(event);
    });

    this._reviewsSlideButton.buttonLabel = 'Reviews';
    this._reviewsSlideButton.addEventListener('click', (event) => {
      this._showReviewsContent(event);
    });
  },

  _showMenusContent(event) {
    event.stopPropagation();
    this._menusSlideButton.classList.add('selected');
    this._addressSlideButton.classList.remove('selected');
    this._reviewsSlideButton.classList.remove('selected');

    this._menusContent.classList.remove('hidden');
    this._addressContent.classList.add('hidden');
    this._reviewsContent.classList.add('hidden');
  },

  _showAddressContent(event) {
    event.stopPropagation();
    this._menusSlideButton.classList.remove('selected');
    this._addressSlideButton.classList.add('selected');
    this._reviewsSlideButton.classList.remove('selected');

    this._menusContent.classList.add('hidden');
    this._addressContent.classList.remove('hidden');
    this._reviewsContent.classList.add('hidden');
  },

  _showReviewsContent(event) {
    event.stopPropagation();
    this._menusSlideButton.classList.remove('selected');
    this._addressSlideButton.classList.remove('selected');
    this._reviewsSlideButton.classList.add('selected');

    this._menusContent.classList.add('hidden');
    this._addressContent.classList.add('hidden');
    this._reviewsContent.classList.remove('hidden');
  },
};

export default SlideButtonInitiator;
